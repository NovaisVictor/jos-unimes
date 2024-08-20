'use server'

import { prisma } from '@/lib/prisma'

async function canCheckIn(viewerId: string) {
  const viewer = await prisma.viewer.findUnique({
    where: { id: viewerId },
  })

  if (!viewer) {
    throw new Error('Viewer not found')
  }

  if (!viewer.paymentStatus) {
    throw new Error(
      'Você não pode realizar check-in porque o pagamento está pendente.',
    )
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0) // Zera a hora para comparar apenas a data

  const checkInCounts = viewer.checkInDates.reduce(
    (acc, date) => {
      const checkInDate = new Date(date)
      const dateString = checkInDate.toISOString().split('T')[0] // Formata a data para YYYY-MM-DD

      // Conta check-ins do dia atual
      if (checkInDate >= today) {
        acc.currentDayCount++
      }

      // Conta dias distintos em que o check-in foi realizado
      acc.totalDays.add(dateString) // Usa um Set para contar dias únicos

      return acc
    },
    { currentDayCount: 0, totalDays: new Set() },
  )

  const canCheckInToday = checkInCounts.currentDayCount < 3 // Permite check-in se menos de 3 já foram feitos hoje
  const canCheckInOnDifferentDays = checkInCounts.totalDays.size < 3 // Permite check-in em no máximo 3 dias distintos

  return canCheckInToday && canCheckInOnDifferentDays // Permite check-in se ambas as condições forem verdadeiras
}

export async function validateTicket(id: string) {
  const canCheck = await canCheckIn(id)

  if (!canCheck) {
    throw new Error(
      'Você já realizou o check-in 3 vezes hoje ou em 3 dias diferentes.',
    )
  }

  // Se puder fazer check-in, atualiza o registro
  const viewer = await prisma.viewer.update({
    where: { id },
    data: {
      checkIn: true,
      checkInDates: {
        push: new Date(), // Adiciona a data atual ao array de check-ins
      },
    },
  })

  return { message: 'Check-in realizado', success: true, viewer }
}

export async function getViewer(id: string) {
  const viewer = await prisma.viewer.findFirst({
    where: { id },
  })

  if (!viewer) {
    throw new Error('Cliente não encontrado')
  }

  return { message: 'Check-in realizado', success: true, viewer }
}

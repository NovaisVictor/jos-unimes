'use server'

import { prisma } from '@/lib/prisma'
import type { Viewer } from './colums'

export async function getViewers(): Promise<Viewer[]> {
  const viewers = await prisma.viewer.findMany({
    select: {
      id: true,
      name: true,
      phone: true,
      cpf: true,
      email: true,
      checkInDates: true,
      period: true,
      semester: true,
      paymentStatus: true,
    },
  })

  return viewers.map((viewer) => ({
    ...viewer,
    phone: viewer.phone || '', // Substitui null por uma string vazia
    paymentStatus: viewer.paymentStatus ?? false, // Substitui null por false (ou outro valor padrão)
  }))
}

export async function updatePaymentStatus(id: string) {
  await prisma.viewer.update({
    data: {
      paymentStatus: true,
    },
    where: { id },
  })
}

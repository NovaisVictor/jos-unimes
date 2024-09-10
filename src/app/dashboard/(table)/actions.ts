'use server'

import { prisma } from '@/lib/prisma'
import type { Viewer } from './colums'
import QRCode from 'qrcode'
export async function getViewers(): Promise<Viewer[]> {
  const viewers = await prisma.viewer.findMany({
    select: {
      id: true,
      name: true,
      phone: true,
      cpf: true,
      email: true,
      checkInDates: true,
      teacherForming: true,
      period: true,
      semester: true,
      paymentStatus: true,
    },
  })

  return viewers.map((viewer) => ({
    ...viewer,
    phone: viewer.phone || '', // Substitui null por uma string vazia
    paymentStatus: viewer.paymentStatus ?? false, // Substitui null por false (ou outro valor padrão)
    teacher: viewer.teacherForming === 'FORMING' ? 'Formando' : 'Professor',
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

export async function handleDownloadQRCode(id: string) {
  const url: string = await new Promise((resolve, reject) => {
    QRCode.toDataURL(
      `https://jos-unimes.vercel.app/dashboard/qrcode/${id}`,
      function (err, url) {
        if (err) {
          console.error(err)
          reject(err)
        }
        resolve(url)
      },
    )
  })

  return url
}

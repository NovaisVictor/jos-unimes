'use server'
import { prisma } from '@/lib/prisma'
import { queryClient } from '@/lib/react-query'
import { SendEmailTicket } from '@/utils/send-mail'
import { NextResponse, type NextRequest } from 'next/server'
import { z } from 'zod'

const paymentConfirmationSchema = z
  .object({
    payment: z.object({
      customer: z.string(),
    }),
  })
  .passthrough()

export async function POST(request: NextRequest) {
  const body = await request.json()

  const { payment } = paymentConfirmationSchema.parse(body)

  const viewer = await prisma.viewer.findUnique({
    where: {
      customerId: payment.customer,
    },
  })

  if (!viewer) {
    throw new Error('Viewer not exists')
  }

  await prisma.viewer.update({
    data: {
      paymentStatus: true,
    },
    where: { id: viewer.id },
  })
  queryClient.invalidateQueries({ queryKey: ['viewers'] })
  queryClient.refetchQueries({ queryKey: ['viewers'] })

  await SendEmailTicket({
    id: viewer.id,
    name: viewer.name,
    email: viewer.email,
  })

  return NextResponse.json({ status: 200 })
}

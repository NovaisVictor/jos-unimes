'use server'
import { z } from 'zod'
import { cpf } from 'cpf-cnpj-validator'
import { prisma } from '@/lib/prisma'
import { createCustomerAsaas } from '@/http/create-customer-asaas'
import { createChargeAsaas } from '@/http/create-charge-asaas'

const subscriptionSchema = z
  .object({
    name: z.string().min(1, {
      message: 'Nome é obrigatório',
    }),
    email: z.string().email({ message: 'E-mail é obrigatório' }),
    phone: z.string().nullish(),
    cpf: z.string({ message: 'CPF é obrigatório' }),
    semester: z.coerce.number({ message: 'Semestre é obrigatório' }),
    teacher: z.enum(['teacher', 'forming'], {
      message: 'Professor/Formando é obrigatório',
    }),
    period: z.string({ message: 'Período é obrigatório' }),
  })
  .refine(
    (data) => {
      const cleanCpf = data.cpf.replace(/\D/g, '')
      const isValid = cpf.isValid(cleanCpf)
      return isValid
    },
    {
      message: 'Por favor, insira um cpf válido.',
      path: ['cpf'],
    },
  )

export async function subscriptionAction(data: FormData) {
  const result = subscriptionSchema.safeParse(Object.fromEntries(data))
  if (!result.success) {
    const errors = result.error.flatten().fieldErrors
    return { success: false, message: null, errors }
  }
  const { name, email, phone, cpf, semester, period, teacher } = result.data

  try {
    const user = await prisma.viewer.findFirst({
      where: {
        cpf,
      },
    })

    if (!user) {
      const { id } = await createCustomerAsaas({
        name,
        cpfCnpj: cpf,
        email,
      })
      await prisma.viewer.create({
        data: {
          name,
          customerId: id,
          email,
          phone,
          cpf,
          semester,
          teacherForming: teacher === 'forming' ? 'FORMING' : 'TEACHER',
          period,
          paymentStatus: false,
          checkIn: false,
        },
      })
      await createChargeAsaas(id)
    } else {
      return {
        success: false,
        message: 'Você já criou uma cobrança.',
        errors: null,
      }
    }
  } catch (err) {
    console.log(err)
    return {
      success: false,
      message: 'Unexpected error, try again in a few minutes.',
      errors: null,
    }
  }
  return { success: true, message: null, errors: null }
}

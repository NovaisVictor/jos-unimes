'use server'

import { prisma } from '@/lib/prisma'
import { cookies } from 'next/headers'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import { z } from 'zod'
import { env } from 'process'

const signInSchema = z.object({
  username: z.string({ message: 'Por favor, insira um nome de usuário.' }),
  password: z.string().min(1, { message: 'Por favor, insira sua senha.' }),
})

export async function signInWithEmailAndPassword(data: FormData) {
  const result = signInSchema.safeParse(Object.fromEntries(data))

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors
    return { success: false, message: null, errors }
  }
  const { username, password } = result.data

  try {
    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    })
    if (!user) {
      throw new Error('Usuário ou senha invalidos')

      return {
        success: false,
        message: 'Usuário ou senha invalidos',
        errors: null,
      }
    }

    const isPasswordValid = compare(password, user.passwordHash)

    if (!isPasswordValid) {
      throw new Error('Usuário ou senha invalidos')
      return {
        success: false,
        message: 'Usuário ou senha invalidos',
        errors: null,
      }
    }

    const token = sign({ sub: user.id }, env.JWT_SECRET!, {
      expiresIn: 60 * 60 * 24 * 7,
    })

    cookies().set('token', token, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
  } catch (err) {
    return {
      success: false,
      message: 'Unexpected error, try again in a few minutes.',
      errors: null,
    }
  }
  return { success: true, message: null, errors: null }
}

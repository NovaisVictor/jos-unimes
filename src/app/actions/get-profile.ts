'use server'

import { prisma } from '@/lib/prisma'
import { verify } from 'jsonwebtoken'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { env } from 'process'

export async function getProfile(token: string) {
  const { sub } = verify(token, env.JWT_SECRET!)

  if (!sub) {
    throw new Error('Unautorized')
  }
  const userId = sub.toString()
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  })

  if (!user) {
    throw new Error('Unautorized')
  }
  return { user }
}

export async function auth() {
  const token = cookies().get('token')?.value

  if (!token) {
    redirect('/auth/sign-in')
  }

  try {
    const { user } = await getProfile(token)
    return { user }
  } catch {
    cookies().delete('token')
  }

  redirect('/auth/sign-in')
}

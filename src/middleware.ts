// middleware.ts
import { NextResponse, type NextRequest } from 'next/server'
import { jwtVerify } from 'jose'
import { env } from 'process'

export async function middleware(req: NextRequest) {
  const token = req.cookies.get('token')?.value

  if (!token) {
    return NextResponse.redirect(new URL('/auth/sign-in', req.url))
  }

  try {
    await jwtVerify(token, new TextEncoder().encode(env.JWT_SECRET!))
    // console.log(payload)
  } catch (err) {
    console.error('Token inválido:', err)
    return NextResponse.redirect(`${env.NEXT_PUBLIC_URL}/auth/sign-in`)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*'],
}

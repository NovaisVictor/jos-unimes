import { isAuthenticated } from '@/auth/auth'
import { SignInForm } from './sign-in-form'
import { redirect } from 'next/navigation'

export default function SignInPage() {
  if (isAuthenticated()) {
    redirect('/dashboard')
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-full max-w-xs">
        <SignInForm />
      </div>
    </div>
  )
}

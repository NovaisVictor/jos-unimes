'use client'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useFormState } from '@/hooks/use-form-state'

import { toast } from 'sonner'
import { signInWithEmailAndPassword } from './actions'

export function SignInForm() {
  const router = useRouter()

  const [{ errors }, handleSubmit, isPending] = useFormState(
    signInWithEmailAndPassword,
    () => {
      toast.success('Login realizado com sucesso')
      router.push('/dashboard')
    },
    (errMessage) => {
      toast.error(errMessage)
    },
  )

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1">
          <Label htmlFor="username">Usuário</Label>
          <Input name="username" type="string" id="username" />
          {errors?.username && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.username[0]}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Senha</Label>
          <Input name="password" type="password" id="password" />
          {errors?.password && (
            <p className="text-xs font-medium text-red-500 dark:text-red-400">
              {errors.password[0]}
            </p>
          )}
        </div>
        <Button className="w-full" type="submit" disabled={isPending}>
          {isPending ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            'Entrar com usuário e senha'
          )}
        </Button>
        {/* <Button variant={'link'} className="w-full" asChild>
          <Link href="/sign-up">Create new account</Link>
        </Button> */}
      </form>
    </div>
  )
}

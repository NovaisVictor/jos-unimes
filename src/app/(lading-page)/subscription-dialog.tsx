'use client'

import { useFormState } from '@/hooks/use-form-state'
import { Button } from '../../components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../components/ui/dialog'
import { Input } from '../../components/ui/input'
import { Label } from '../../components/ui/label'
import { toast } from 'sonner'
import { subscriptionAction } from './actions'
import { Loader2 } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function SubscriptionDialog() {
  const [{ errors }, handleSubmit, isPending] = useFormState(
    subscriptionAction,
    () => {
      toast.success(
        'Cadastro realizado com sucesso. Confira seu e-mail com as instruções para pagamento',
      )
    },
    (errMessage) => {
      toast.error(errMessage)
    },
  )
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Realizar inscrição</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Inscreva-se</DialogTitle>
          <DialogDescription>a</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col justify-center">
              <div className="flex items-center justify-end gap-4">
                <Label htmlFor="name" className="text-right">
                  Nome
                </Label>
                <Input id="name" name="name" className="w-4/5" />
              </div>
              <div className="flex justify-end">
                {errors?.name && (
                  <p className="text-xs mt-2 text-center w-4/5 font-medium text-red-500 dark:text-red-400">
                    {errors.name[0]}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center justify-end gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input id="email" type="email" name="email" className="w-4/5" />
              </div>
              <div className="flex justify-end">
                {errors?.email && (
                  <p className="text-xs mt-2 text-center w-4/5 font-medium text-red-500 dark:text-red-400">
                    {errors.email[0]}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center justify-end gap-4">
                <Label htmlFor="phone" className="text-right">
                  Celular
                </Label>
                <Input id="phone" type="phone" name="phone" className="w-4/5" />
              </div>
              <div className="flex justify-end">
                {errors?.phone && (
                  <p className="text-xs mt-2 text-center w-4/5 font-medium text-red-500 dark:text-red-400">
                    {errors.phone[0]}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center justify-end gap-4">
                <Label htmlFor="cpf" className="text-right">
                  CPF
                </Label>
                <Input id="cpf" name="cpf" type="text" className="w-4/5" />
              </div>
              <div className="flex justify-end">
                {errors?.cpf && (
                  <p className="text-xs mt-2 text-center w-4/5 font-medium text-red-500 dark:text-red-400 col-span-3">
                    {errors.cpf[0]}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center justify-end gap-4">
                <Label htmlFor="period" className="text-right">
                  Periodo
                </Label>
                <Select name="period">
                  <SelectTrigger className="w-4/5">
                    <SelectValue placeholder="Selecione seu período" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="noturno">Noturno</SelectItem>
                    <SelectItem value="diurno">Integral</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end">
                {errors?.period && (
                  <p className="text-xs mt-2 text-center w-4/5 font-medium text-red-500 dark:text-red-400 col-span-3">
                    {errors.period[0]}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <div className="flex items-center justify-end gap-4">
                <Label htmlFor="semester" className="text-right">
                  Semestre
                </Label>
                <Select name="semester">
                  <SelectTrigger className="w-4/5">
                    <SelectValue placeholder="Selecione seu semestre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1º semestre</SelectItem>
                    <SelectItem value="2">2º semestre</SelectItem>
                    <SelectItem value="3">3º semestre</SelectItem>
                    <SelectItem value="4">4º semestre</SelectItem>
                    <SelectItem value="5">5º semestre</SelectItem>
                    <SelectItem value="6">6º semestre</SelectItem>
                    <SelectItem value="7">7º semestre</SelectItem>
                    <SelectItem value="8">8º semestre</SelectItem>
                    <SelectItem value="9">9º semestre</SelectItem>
                    <SelectItem value="10">10º semestre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex justify-end">
                {errors?.semester && (
                  <p className="text-xs mt-2 text-center w-4/5 font-medium text-red-500 dark:text-red-400 col-span-3">
                    {errors.semester[0]}
                  </p>
                )}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isPending}>
              {isPending ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                'Inscrever-se'
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

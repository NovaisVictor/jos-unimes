'use client'
import { cn } from '@/lib/utils'
import { useMutation } from '@tanstack/react-query'
import { ColumnDef } from '@tanstack/react-table'
import { handleDownloadQRCode, updatePaymentStatus } from './actions'
import { queryClient } from '@/lib/react-query'
import { Button } from '@/components/ui/button'
import { Check, QrCode } from 'lucide-react'

export type Viewer = {
  id: string
  name: string
  phone: string
  cpf: string
  semester: number
  teacher: string
  paymentStatus: boolean
  period: string
  checkInDates: Date[]
  email: string
}

export const columns: ColumnDef<Viewer>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'name',
    header: 'Nome',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'phone',
    header: 'Telefone',
    cell: ({ row }) => !row.getValue('phone') && 'Sem telefone',
  },
  {
    accessorKey: 'cpf',
    header: 'CPF',
  },
  {
    accessorKey: 'semester',
    header: 'Semestre',
    cell: ({ row }) => `${row.getValue('semester')}º`,
  },
  {
    accessorKey: 'period',
    header: 'Período',
  },
  {
    accessorKey: 'teacher',
    header: 'Professor/Formando(a)',
  },

  {
    accessorKey: 'paymentStatus',
    header: 'Status de pagamento',
    cell: ({ row }) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { mutate, isPending } = useMutation({
        mutationFn: async () => {
          console.log(row.getValue('id'))
          await updatePaymentStatus(row.getValue('id'))
        },
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ['viewers'] })
        },
      })
      return (
        <div className="flex items-center gap-3">
          <span
            className={cn(
              'h-2 w-2 rounded-full',
              row.getValue('paymentStatus') ? 'bg-green-400' : 'bg-slate-400',
            )}
          />
          <span
            className={cn(
              'font-medium',
              !row.getValue('paymentStatus') && 'text-muted-foreground',
            )}
          >
            {row.getValue('paymentStatus') ? 'Pago' : 'Pendente'}
          </span>
          {!row.getValue('paymentStatus') && (
            <Button
              size={'sm'}
              variant={'outline'}
              onClick={() => mutate()}
              disabled={isPending}
              className="gap-2"
            >
              {' '}
              Confirmar <Check className="size-5" />{' '}
            </Button>
          )}
        </div>
      )
    },
  },
  {
    accessorKey: 'id',
    header: 'Gerar QR code',
    cell: ({ row }) => {
      return (
        <div>
          {/* <QRCode id="qrcode" value={link} /> */}
          <Button
            variant={'secondary'}
            onClick={async () => {
              const url = await handleDownloadQRCode(row.getValue('id'))
              console.log(url)
              const downloadLink = document.createElement('a')
              downloadLink.href = url
              downloadLink.download = 'qrcode.png'
              document.body.appendChild(downloadLink)
              downloadLink.click()
              document.body.removeChild(downloadLink)
            }}
          >
            <QrCode />
          </Button>
        </div>
      )
    },
  },
  {
    accessorKey: 'checkInDates',
    header: 'Datas de check-in',
    cell: ({ row }) => {
      const dates = row.getValue('checkInDates') as Date[]

      // Agrupa os check-ins por data
      const groupedCheckIns = dates.reduce(
        (acc, date) => {
          const dateString = date.toLocaleDateString('pt-BR')
          if (!acc[dateString]) {
            acc[dateString] = [] // Inicializa o array se não existir
          }
          acc[dateString].push(date.toLocaleString('pt-BR')) // Adiciona a data formatada ao grupo
          return acc
        },
        {} as Record<string, string[]>,
      )

      return (
        <div>
          {Object.entries(groupedCheckIns).map(([date, checkIns], index) => (
            <div key={date}>
              {index + 1}º dia: {checkIns.join(', ')}{' '}
              {/* Mostra a data e os check-ins na mesma linha */}
            </div>
          ))}
          {dates.length === 0 && 'Nenhum check-in'}{' '}
          {/* Mensagem se não houver check-ins */}
        </div>
      )
    },
  },
]

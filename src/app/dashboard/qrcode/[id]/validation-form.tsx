'use client'

import { useMutation, useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'
import { getViewer, validateTicket } from './actions'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
import { queryClient } from '@/lib/react-query'

export function ValidationForm() {
  const { id } = useParams<{ id: string }>()

  const today = new Date()
  today.setHours(0, 0, 0, 0) // Zera a hora para comparar apenas a data

  // Query para obter os dados do visualizador
  const {
    data: viewerData,
    isLoading: isViewerLoading,
    // isError: isViewerError,
    error: viewerError,
  } = useQuery({
    queryKey: ['viewer', id],
    queryFn: async () => {
      const data = await getViewer(id)
      return data
    },
    enabled: !!id,
  })

  const { mutate, isPending, isError, error } = useMutation({
    mutationFn: async () => {
      const data = await validateTicket(id)
      return data
    },
    onSuccess: (data) => {
      console.log('Validação bem-sucedida:', data)
      toast.success('Check-in realizado')
      queryClient.invalidateQueries({ queryKey: ['viewer', id] })
      queryClient.refetchQueries({ queryKey: ['viewer', id] })
    },
    onError: (error) => {
      console.error('Erro na validação:', error)
      toast.error(error.message)
    },
  })

  const handleValidate = () => {
    mutate()
  }

  if (isViewerLoading) {
    return <Loader2 className="animate-spin" />
  }

  if (!viewerData || !viewerData.viewer) {
    return (
      <div className="h-[500px] p-4 border border-destructive rounded-md flex items-center justify-center">
        <p className="text-red-600">{viewerError?.message}</p>
      </div>
    )
  }

  return (
    <div className="w-screen p-12 flex justify-center items-center">
      <div className="h-[500px] flex-col p-12 border space-y-4 rounded-md flex justify-center">
        <p>Nome: {viewerData.viewer.name}</p>
        <p>Email: {viewerData.viewer.email}</p>
        <p>Celular: {viewerData.viewer.phone || 'Sem celular'}</p>
        <p>Período: {viewerData.viewer.period}</p>
        <p>Semestre: {viewerData.viewer.semester}º</p>
        <p>
          Check-ins:
          {viewerData?.viewer?.checkInDates &&
          viewerData.viewer.checkInDates.length > 0 ? (
            <>
              {viewerData.viewer.checkInDates.map((date) => (
                <p key={date.toDateString()}>
                  {new Date(date).toLocaleString('pt-BR')}
                </p>
              ))}
            </>
          ) : (
            'Não realizou check-ins hoje' // Exibe mensagem se não houver check-ins
          )}
        </p>

        {viewerData?.viewer?.checkInDates &&
          // Conta os check-ins do dia de hoje
          (() => {
            const todayCheckIns = viewerData.viewer.checkInDates.filter(
              (date) => {
                const checkInDate = new Date(date)
                return checkInDate >= today // Verifica se o check-in é hoje
              },
            )

            if (todayCheckIns.length >= 3) {
              return (
                <p className="text-red-600">
                  Você não pode realizar outro check-in hoje.
                </p>
              )
            }
            return null // Retorna null se não houver mensagem
          })()}
        {!viewerData.viewer.paymentStatus && (
          <p className="text-red-600">Pagamento não confirmado</p>
        )}
        {isError && <p className="text-red-600">{(error as Error).message}</p>}

        <Button
          onClick={handleValidate}
          disabled={
            isPending ||
            (viewerData?.viewer?.checkInDates &&
              viewerData.viewer.checkInDates.filter((date) => {
                const checkInDate = new Date(date)
                return checkInDate.getTime() >= today.getTime()
              }).length >= 3) ||
            !viewerData.viewer.paymentStatus
          }
        >
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : (
            'Validar check-in'
          )}
        </Button>
      </div>
    </div>
  )
}

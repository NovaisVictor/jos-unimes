'use client'

import { Loader2 } from 'lucide-react'
import { getViewers } from './actions'
import { columns } from './colums'
import { ViewersTable } from './viewers-table'
import { useQuery } from '@tanstack/react-query'

export default function App() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['viewers'],
    queryFn: async () => {
      const data = await getViewers()
      return data
    },
  })

  if (isLoading)
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    )
  if (isError) return <div>Error: {(error as Error).message}</div>

  if (!data) {
    return <div>Nenhum cliente encontrado.</div>
  }

  return (
    <main className="flex justify-center items-center max-w-[1200px] mx-auto">
      <ViewersTable columns={columns} data={data} />
    </main>
  )
}

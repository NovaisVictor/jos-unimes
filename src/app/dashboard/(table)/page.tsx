'use client'

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

  if (isLoading) return <div>Carregando...</div>
  if (isError) return <div>Error: {(error as Error).message}</div>

  if (!data) {
    return <div>Nenhum cliente encontrado.</div>
  }

  return (
    <main className="h-screen flex justify-center items-center max-w-[1200px] mx-auto">
      <ViewersTable columns={columns} data={data} />
    </main>
  )
}

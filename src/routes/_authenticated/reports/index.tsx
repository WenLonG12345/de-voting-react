import { createFileRoute } from '@tanstack/react-router'
import { Main } from '@/components/layout/main'

export const Route = createFileRoute('/_authenticated/reports/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Main>
      <h1 className='text-2xl font-bold tracking-tight'>Reports</h1>
    </Main>
  )
}

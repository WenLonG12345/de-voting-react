import { createFileRoute } from '@tanstack/react-router'
import { Main } from '@/components/layout/main'

export const Route = createFileRoute('/admin/(dashboard)/branding/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <Main>
      <h1 className='text-2xl font-bold tracking-tight'>Branding</h1>
    </Main>
  )
}

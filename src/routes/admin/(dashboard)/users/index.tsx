import { createFileRoute } from '@tanstack/react-router'
import Users from '@/features/users'

export const Route = createFileRoute('/admin/(dashboard)/users/')({
  component: Users,
})

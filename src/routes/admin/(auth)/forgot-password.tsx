import { createFileRoute } from '@tanstack/react-router'
import ForgotPassword from '@/features/auth/forgot-password'

export const Route = createFileRoute('/admin/(auth)/forgot-password')({
  component: ForgotPassword,
})

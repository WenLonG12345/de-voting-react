import { createFileRoute } from '@tanstack/react-router'
import Otp from '@/features/auth/otp'

export const Route = createFileRoute('/admin/(auth)/otp')({
  component: Otp,
})

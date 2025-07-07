import { createFileRoute } from '@tanstack/react-router'
import SettingsAccount from '@/features/settings/account'

export const Route = createFileRoute('/admin/(dashboard)/settings/account')({
  component: SettingsAccount,
})

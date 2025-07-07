import { createFileRoute } from '@tanstack/react-router'
import SettingsAppearance from '@/features/settings/appearance'

export const Route = createFileRoute('/admin/(dashboard)/settings/appearance')({
  component: SettingsAppearance,
})

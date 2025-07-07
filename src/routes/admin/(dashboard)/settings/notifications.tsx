import { createFileRoute } from '@tanstack/react-router'
import SettingsNotifications from '@/features/settings/notifications'

export const Route = createFileRoute('/admin/(dashboard)/settings/notifications')({
  component: SettingsNotifications,
})

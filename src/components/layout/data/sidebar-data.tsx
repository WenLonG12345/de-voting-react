import {
  IconChecklist,
  IconLayoutDashboard,
  IconMessages,
  IconPackages,
  IconUsers,
} from '@tabler/icons-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  header: {
    title: 'Shadcn Admin',
    logo: <img src="/logo.svg"/>,
    description: 'Vite + ShadcnUI',
  },
  navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          url: '/admin',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Campaigns',
          url: '/admin/campaigns',
          icon: IconChecklist,
        },
        {
          title: 'Users',
          url: '/admin/users',
          icon: IconUsers,
        },
        {
          title: 'Reports',
          url: '/admin/reports',
          icon: IconMessages,
        },
        {
          title: 'Branding',
          url: '/admin/branding',
          icon: IconPackages,
        },
      ],
    },
  ],
}

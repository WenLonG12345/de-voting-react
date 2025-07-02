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
          url: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Campaigns',
          url: '/campaigns',
          icon: IconChecklist,
        },
        {
          title: 'Users',
          url: '/users',
          icon: IconUsers,
        },
        {
          title: 'Reports',
          url: '/reports',
          icon: IconMessages,
        },
        {
          title: 'Branding',
          url: '/branding',
          icon: IconPackages,
        },
      ],
    },
  ],
}

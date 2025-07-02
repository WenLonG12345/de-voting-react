import React from 'react'
import { SidebarMenuButton } from '../ui/sidebar'

const SidebarDisplay = () => {
  return (
    <SidebarMenuButton
      size='lg'
      className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
    >
      <img src='/images/logo.svg' alt='LOGO' className='size-8' />
      <div className='grid flex-1 text-left text-sm leading-tight'>
        <span className='truncate font-semibold'>Astro Voting CMS</span>
        {/* <span className='truncate text-xs'></span> */}
      </div>
    </SidebarMenuButton>
  )
}

export default SidebarDisplay

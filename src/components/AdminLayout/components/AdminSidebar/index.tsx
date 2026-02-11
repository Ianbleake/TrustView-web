import { Sidebar, SidebarContent } from '@/components/ui/sidebar'
import React from 'react'
import { AdminbarHeader } from './AdminbarHeader'
import { AdminbarMenu } from './AdminbarMenu'
import { AdminbarFooter } from './AdminbarFooter'

export const AdminSidebar = ():React.ReactElement => {
  return (
    <Sidebar collapsible="icon" >
      <AdminbarHeader />

      <SidebarContent>
        <AdminbarMenu />
      </SidebarContent>

      <AdminbarFooter />
    </Sidebar>
  )
}
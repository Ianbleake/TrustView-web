import React from 'react'
import { Outlet } from 'react-router-dom'
import { SidebarProvider } from '../ui/sidebar'
import { AdminHeader } from './components/AdminHeader'
import { AdminSidebar } from './components/AdminSidebar'

export const AdminLayout = ():React.ReactElement => {
  return (
    <SidebarProvider>
      <div className="hidden md:block">
        <AdminSidebar />
      </div>

      <main className="w-full flex flex-col bg-gray-100">
        <AdminHeader />
        <section className="p-4">
          <Outlet />
        </section>
      </main>
    </SidebarProvider>
  )
}
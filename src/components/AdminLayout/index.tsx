import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { SidebarProvider } from '../ui/sidebar'
import { AdminHeader } from './components/AdminHeader'
import { AdminSidebar } from './components/AdminSidebar'
import { useSessionStorage } from '@/storage/authStorage'

export const AdminLayout = ():React.ReactElement => {

  const { session, profile } = useSessionStorage();
  const location = useLocation();

  if (!session) {
    return (
      <Navigate
        to="/auth"
        replace
        state={{ from: location.pathname }}
      />
    );
  }else{
    if(profile?.role === "user"){
      return(
        <Navigate
          to="/platform"
          replace
          state={{ from: location.pathname }}
        />
      )
    }
  }

  return (
    <SidebarProvider>
      <div className="hidden md:block">
        <AdminSidebar />
      </div>

      <main className="w-full flex flex-col bg-gray-100 min-h-screen">
        <AdminHeader />
        <section className="py-4 px-16 flex-1">
          <Outlet />
        </section>
      </main>
    </SidebarProvider>
  )
}
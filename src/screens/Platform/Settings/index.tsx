import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Bell, CircleUser, CreditCard, Shield } from 'lucide-react'
import React from 'react'
import { ProfileConfig } from './components/ProfileConfig'
import { NotificationsConfig } from './components/NotificationsConfig'
import { BillingConfig } from './components/BillingConfig'

export const Settings = ():React.ReactElement => {
  return (
    <Tabs
      defaultValue="overview"
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Configuración</h1>
            <p className="text-muted-foreground">Administra tu cuenta y preferencias</p>
          </div>
        </div>

        <TabsList className="bg-gray-200/50 w-full md:w-2/3 h-auto grid grid-cols-2 gap-2 md:flex shadow-sm">
          <TabsTrigger
            className="cursor-pointer shadow-inner flex flex-row items-center justify-center gap-3 data-[state=active]:shadow-amber-500 data-[state=active]:text-amber-600"
            value="overview"
          >
            <CircleUser />
            Perfil
          </TabsTrigger>

          <TabsTrigger
            className="cursor-pointer shadow-inner flex flex-row items-center justify-center gap-3 data-[state=active]:shadow-amber-500 data-[state=active]:text-amber-600"
            value="analytics"
          >
            <Bell />
            Notificaciones
          </TabsTrigger>


          <TabsTrigger
            className="cursor-pointer shadow-inner flex flex-row items-center justify-center gap-3 data-[state=active]:shadow-amber-500 data-[state=active]:text-amber-600"
            value="settings"
          >
            <CreditCard />
            Facturacion
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="overview">
        <ProfileConfig />
      </TabsContent>

      <TabsContent value="analytics">
        <NotificationsConfig />
      </TabsContent>

      <TabsContent value="settings">
        <BillingConfig />
      </TabsContent>
    </Tabs>
  )
}
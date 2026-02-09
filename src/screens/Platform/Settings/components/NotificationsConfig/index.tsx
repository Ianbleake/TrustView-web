import React from 'react'
import { SettingsCard } from '../SettingsCard'
import { Mail } from 'lucide-react'

export const NotificationsConfig = ():React.ReactElement => {
  return (
    <section className="flex flex-col gap-4">

      <SettingsCard
        icon={Mail}
        title="Notificaciones por email"
        description="Configura qué emails quieres recibir"
      >
        <div></div>
      </SettingsCard>
      
    </section>
  )
}
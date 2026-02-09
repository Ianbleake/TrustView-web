import React from 'react'
import { SettingsCard } from '../SettingsCard'
import { Mail } from 'lucide-react'
import { SettingSwitch } from '../SettingSwitch'

export const NotificationsConfig = ():React.ReactElement => {
  return (
    <section className="flex flex-col gap-4">

      <SettingsCard
        icon={Mail}
        title="Notificaciones por email"
        description="Configura qué emails quieres recibir"
      >
        <div className='flex flex-col gap-2'>
          <SettingSwitch title='Nuevas reseñas' subtitle='Recibir email cuando llega una reseña nueva'/>
        </div>
      </SettingsCard>
      
    </section>
  )
}
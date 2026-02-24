import React from 'react'
import { SettingsCard } from '../SettingsCard'
import { Mail } from 'lucide-react'
import { SettingSwitch } from '../SettingSwitch'
import { useSessionStorage } from '@/storage/authStorage'
import useUpdateProfileSettings from '@/hooks/profile/useUpdateProfileSettings'

export const NotificationsConfig = ():React.ReactElement => {

  const { profile } = useSessionStorage();

  const notifications = profile?.settings?.notifications ?? {
    newReviews: false,
    badReviews: false,
    weeklySummary: false,
  };

  const { mutate: updateSettings } = useUpdateProfileSettings();

  const handleToggle = (key: keyof typeof notifications) => 
    (checked: boolean):void => {
  
      updateSettings({
        user_id: profile!.id,
        settings: {
          notifications: {
            ...notifications,
            [key]: checked,
          }
        }
      });
  };
 
  return (
    <section className="flex flex-col gap-4">

      <SettingsCard
        icon={Mail}
        title="Notificaciones por email"
        description="Configura qué emails quieres recibir"
      >
        <div className='flex flex-col gap-2'>
        <SettingSwitch
          switchState={notifications.newReviews}
          onChange={handleToggle('newReviews')}
          title="Nuevas reseñas"
          subtitle="Recibir email cuando llega una reseña nueva"
        />

        <SettingSwitch
          switchState={notifications.badReviews}
          onChange={handleToggle('badReviews')}
          title="Reseñas negativas"
          subtitle="Alerta cuando una reseña tiene menos de 3 estrellas"
        />

        <SettingSwitch
          switchState={notifications.weeklySummary}
          onChange={handleToggle('weeklySummary')}
          title="Reporte semanal"
          subtitle="Resumen semanal por email con métricas"
        />
        </div>
      </SettingsCard>
      
    </section>
  )
}
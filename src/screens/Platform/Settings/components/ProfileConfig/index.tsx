import React from 'react'
import { Building } from 'lucide-react'
import { ProfileInfo } from './ProfileInfo'
import { SettingsCard } from '../SettingsCard'
import { StoreInfo } from './StoreInfo';

export const ProfileConfig = ():React.ReactElement => {


  return (
    <section className="flex flex-col gap-4">

      <ProfileInfo />

      <SettingsCard
        icon={Building}
        title="Información de tu tienda"
        description="Información general de tu tienda"
      >
        <StoreInfo/>
      </SettingsCard>
      
    </section>
  )
}
import React from 'react'
import { BillingCard } from './BillingCard'
import { Metrics } from './Metrics'
import { useSessionStorage } from '@/storage/authStorage'
import { BillingFeatures } from './BillingFeatures'

export const BillingInfo = ():React.ReactElement => {

  const { profile } = useSessionStorage();

  return (
    <div className='p-4 flex flex-col gap-8'>
      {
        profile?.billing && (
          <div className='flex flex-row items-center gap-20'>
            <BillingCard plan={profile.billing} />
            <Metrics plan={profile.billing}/>
          </div>
        )
      }

      <BillingFeatures/>
      
    </div>
  )
}
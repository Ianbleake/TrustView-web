import React from 'react'
import { BillingCard } from './BillingCard'
import { UseMetrics } from './UseMetrics'
import { useSessionStorage } from '@/storage/authStorage'

export const BillingInfo = ():React.ReactElement => {

  const { profile } = useSessionStorage();

  return (
    <div className='flex flex-row items-center gap-4 p-4'>
      {
        profile?.billing && (
          <BillingCard plan={profile.billing} />
        )
      }

      <UseMetrics/>
    </div>
  )
}
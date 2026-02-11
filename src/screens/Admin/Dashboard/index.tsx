import React from 'react'
import { Header } from './components/Header'
import { Analytics } from './components/Analytics'
import { PlatformUsage } from './components/PlatformUsage'
import { BillingsPlans } from './components/BillingsPlans'

export const Dashboard = ():React.ReactElement => {
  return (
    <div className='flex flex-col gap-8 animate'>
      <Header/>
      <Analytics/>
      <PlatformUsage/>
      <BillingsPlans/>
    </div>
  )
}
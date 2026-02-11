import React from 'react'
import { Header } from './components/Header'
import { Analytics } from './components/Analytics'
import { ReviewsChart } from './components/ReviewsChart'
import { RecentReviews } from './components/RecentReviews'
import { useSessionStorage } from '@/storage/authStorage'

export const Dashboard = ():React.ReactElement => {

  const { user, session, store, profile } = useSessionStorage()

  console.log("Session:", {
    user, session, store, profile
  })
  return (
    <div className='flex flex-col gap-8 animate'>
      <Header/>
      <Analytics/>
      <ReviewsChart/>
      <RecentReviews/>
    </div>
  )
}
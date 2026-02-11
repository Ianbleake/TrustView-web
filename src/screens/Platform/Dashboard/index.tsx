import React from 'react'
import { Header } from './components/Header'
import { Analytics } from './components/Analytics'
import { ReviewsChart } from './components/ReviewsChart'
import { RecentReviews } from './components/RecentReviews'

export const Dashboard = ():React.ReactElement => {

  return (
    <div className='flex flex-col gap-8 animate'>
      <Header/>
      <Analytics/>
      <ReviewsChart/>
      <RecentReviews/>
    </div>
  )
}
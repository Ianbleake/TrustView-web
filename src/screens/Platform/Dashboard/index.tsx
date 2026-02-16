import React from 'react'
import { Header } from './components/Header'
import { Analytics } from './components/Analytics'
import { ReviewsChart } from './components/ReviewsChart'
import { RecentReviews } from './components/RecentReviews'
import useStoreAnalytics from '@/hooks/analytics/useStoreAnalytics'

export const Dashboard = ():React.ReactElement => {

  const { isLoading } = useStoreAnalytics();

  //TODO: Create a Dashboard skeleton to show while the analytics data is loading
  if(isLoading){
    return(
      <div>
        loading...
      </div>
    )
  }

  return (
    <div className='flex flex-col gap-8 animate'>
      <Header/>
      <Analytics/>
      <ReviewsChart/>
      <RecentReviews/>
    </div>
  )
}
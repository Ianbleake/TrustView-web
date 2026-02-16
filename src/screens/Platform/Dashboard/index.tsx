import React from 'react'
import { Header } from './components/Header'
import { Analytics } from './components/Analytics'
import { ReviewsChart } from './components/ReviewsChart'
import { RecentReviews } from './components/RecentReviews'
import useStoreAnalytics from '@/hooks/analytics/useStoreAnalytics'
import { AnalyticsSkeleton } from '@/components/skeletons/AnalyticsSkeleton'

export const Dashboard = ():React.ReactElement => {

  const { isLoading } = useStoreAnalytics();

  if(isLoading){
    return(
      <AnalyticsSkeleton/>
    )
  }

  return (
    <div className='flex flex-col gap-8'>
      <Header/>
      <Analytics/>
      <ReviewsChart/>
      <RecentReviews/>
    </div>
  )
}
import React from 'react'
import { StarRating } from './StarRating'
import { Card } from '@/components/ui/card'
import { useAnalyticsStorage } from '@/storage/analyticsStorage'
import { StarsCount } from '../../../../../components/StarsCount'

export const ReviewsChart = ():React.ReactElement => {

  const { analytics } = useAnalyticsStorage();

  //TODO: Add a Empty state in case of no analytics data or error fetching it
  if(!analytics){
    return(
      <div>No data</div>
    )
  }

  return (
    <Card className='flex flex-col px-4 py-6 animate-fade-in'>

      <div className='flex flex-row items-center justify-between'>

        <div className='flex flex-col items-start'>
          <h2 className='text-xl font-medium tracking-tight text-gray-900'>Distribución de Calificaciones</h2>
          <p className='text-sm text-gray-500'>Basado en {analytics.totalReviews.count} reseñas</p>
        </div>

        <div className='flex flex-col gap-1 items-end'>
          <h2 className='text-3xl font-semibold text-orange-600 font-heading'>{analytics.rating.average}</h2>
          <StarsCount count={analytics.rating.average} size="sm"/>
        </div>

      </div>

      <StarRating ratings={analytics.starsRatings}/>

    </Card>
  )
}
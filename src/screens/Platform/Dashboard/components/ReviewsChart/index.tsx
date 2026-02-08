import { Card } from '@/components/ui/card'
import React from 'react'
import { StarsCount } from './StarsCount'
import { StarRating } from './StarRating'
import { analyticsBase } from '@/content/Analytics'

export const ReviewsChart = ():React.ReactElement => {
  return (
    <Card className='flex flex-col px-4 py-6'>

      <div className='flex flex-row items-center justify-between'>

        <div className='flex flex-col items-start'>
          <h2 className='text-xl font-medium tracking-tight text-gray-900'>Distribución de Calificaciones</h2>
          <p className='text-sm text-gray-500'>Basado en {analyticsBase.totalReviews.count} reseñas</p>
        </div>

        <div className='flex flex-col gap-1 items-end'>
          <h2 className='text-3xl font-semibold text-orange-600 font-heading'>{analyticsBase.rating.average}</h2>
          <StarsCount count={analyticsBase.rating.average} size="sm"/>
        </div>

      </div>

      <StarRating ratings={analyticsBase.starsRatings}/>

    </Card>
  )
}
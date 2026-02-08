import React from 'react'
import { AnalyticCard } from './AnalyticCard'
import { MessageSquare, Star, ThumbsUp, TrendingUp } from 'lucide-react';

const analyticsValues:AnalyticValue[] = [
  {
    title: 'Total Reseñas',
    value: 234,
    percentage: '+12%',
    icon: MessageSquare,
    growth: 'positive',
  },
  {
    title: 'Rating Promedio',
    value: 4.5,
    percentage: '+3%',
    icon: Star,
    growth: 'positive',
  },
  {
    title: 'Tasa Respuesta',
    value: 87,
    percentage: '-5%',
    icon: TrendingUp,
    growth: 'negative',
  },
  {
    title: 'Positivas',
    value: 92,
    percentage: '+2%',
    icon: ThumbsUp,
    growth: 'positive',
  },
];

export const Analytics = ():React.ReactElement => {
  return (
    <div className='w-full flex flex-row gap-2 items-center'>

      {
        analyticsValues.map((analytic) => {
          return(
            <AnalyticCard key={analytic.title} analytic={analytic}/>
          )
        })
      }

    </div>
  )
}
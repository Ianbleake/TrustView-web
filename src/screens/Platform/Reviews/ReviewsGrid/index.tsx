import { ReviewCard } from '@/components/ReviewCard';
import React from 'react'

type ReviewsGrid = {
  reviews: Review[];
}

export const ReviewsGrid = ({
  reviews,
}:ReviewsGrid ):React.ReactElement => {
  return (
    <div className='grid grid-cols-2 gap-4'>
      {
        reviews.map((review) => {
          return(
            <ReviewCard key={review.id} review={review} />
          )
        })
      }
    </div>
  )
}
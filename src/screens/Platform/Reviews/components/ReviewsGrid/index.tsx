import { ReviewCard } from '@/components/ReviewCard';
import React from 'react'

type ReviewsGrid = {
  reviews: Review[];
}

export const ReviewsGrid = ({
  reviews,
}: ReviewsGrid): React.ReactElement => {
  return (
    <div className="columns-1 md:columns-2 gap-4 animate-fade-in flex-1">
      {reviews.map((review) => (
        <div key={review.id} className="mb-4 break-inside-avoid">
          <ReviewCard review={review} />
        </div>
      ))}
    </div>
  )
}

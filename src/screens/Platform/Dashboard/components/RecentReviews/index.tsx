import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { ReviewCard } from '@/components/ReviewCard'
import { RecentReviewsData } from '@/content/RecentReviews'

export const RecentReviews = ():React.ReactElement => {
  return (
    <div className='flex flex-col animate-fade-in'>

        <div className="flex items-center justify-between mb-4 ">
          <h2 className="font-heading text-lg font-semibold">Reseñas Recientes</h2>
          <Link to="/platform/reviews" className="flex items-center gap-1 text-sm font-medium text-orange-400 hover:underline">
            Ver todas <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {
          RecentReviewsData.map((review) => {
            return (
              <ReviewCard review={review} />
            )
          })
        }
      </div>

    </div>
  )
}
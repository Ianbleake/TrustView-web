import React from 'react'

type MetricsProps = {
  plan: Billing;
}

export const Metrics = ({
  plan,
}:MetricsProps ):React.ReactElement => {

  const usedReviews = 10;

  const reviewsLimit: Record<Billing, number> = {
    free: 20,
    base: 200,
    pro: Infinity,
  };
  
  const reviewsCount =
    reviewsLimit[plan] === Infinity
      ? "Ilimitadas"
      : `${usedReviews}/${reviewsLimit[plan]}`;

  const percentage = plan === "pro" ? 100 : (usedReviews/reviewsLimit[plan])*100;
  
  return (
    <div className='flex flex-col items-start justify-start gap-3 min-w-xs'>

      <div className='flex flex-col gap-2 w-full'>
        <p className='font-heading font-semibold text-lg text-orange-600'>Reseñas <span className='text-orange-500/80'>( {reviewsCount} )</span></p>
        <div className='w-full h-5 bg-gray-200/50 rounded-lg overflow-hidden'>
          <div className='h-full gradient-bg rounded-lg ' style={{ width: `${percentage}%`}}/>
        </div>
      </div>

    </div>
  )
}
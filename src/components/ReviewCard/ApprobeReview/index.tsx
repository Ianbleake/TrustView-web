import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import useApprobeReview from '@/hooks/reviews/useApprobeReview'
import { Check } from 'lucide-react'
import React from 'react'

type ApprobeReviewProps = {
    reviewId: string
}

export const ApprobeReview = ({
    reviewId,
}:ApprobeReviewProps ):React.ReactElement => {

  const { mutate:Approbe, isPending } = useApprobeReview();

  return (
    <Button
        size={"sm"}
        variant={"gradient"}
        onClick={() => Approbe({ review_id: reviewId })}
        disabled={isPending}
        className='min-w-24'
    >
      {
        isPending ? (
          <Spinner/>
        ) : (
          <>
            Aprobar
            <Check/>
          </>
        )
      }
    </Button>
  )
}
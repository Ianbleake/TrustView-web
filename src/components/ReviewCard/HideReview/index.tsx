import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner';
import useHideReview from '@/hooks/reviews/useHideReview';
import { EyeClosed } from 'lucide-react'
import React from 'react'

type HideReviewProps = {
  reviewId: string;
}

export const HideReview = ({
  reviewId,
}:HideReviewProps ):React.ReactElement => {

  const { mutate:reject, isPending } = useHideReview();

  return (
    <Button
        size={"sm"}
        variant={"ghost"}
        onClick={() => reject({ review_id: reviewId }) }
        disabled={isPending}
        className='min-w-24'
    >
      {
        isPending ? (
          <Spinner/>
        ) : (
          <>
            Ocultar
            <EyeClosed/>
          </>
        )
      }
    </Button>
  )
}
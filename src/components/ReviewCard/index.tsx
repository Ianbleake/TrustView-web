import React from 'react'
import { StarsCount } from '../StarsCount'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '../ui/button'
import { Check, EyeClosed } from 'lucide-react'





type ReviewCardProps = {
    review: Review
}

export const ReviewCard = ({
    review,
}:ReviewCardProps ):React.ReactElement => {
  return (
   <Card className='group relative flex flex-col p-4 hover:shadow-lg transition-all duration-300 overflow-hidden'>

        <div
            className="
                pointer-events-none
                absolute -top-20 right-25
                w-48 h-48
                bg-orange-400/20
                rounded-full
                blur-3xl
                opacity-0
                transition-opacity duration-300
                group-hover:opacity-100
            "
        />

        <div className='flex flex-row items-center justify-between w-full'>

            <div className='flex flex-row items-start justify-start gap-4'>
                <div className='flex items-center justify-center h-12 w-12 rounded-full gradient-bg text-white font-heading text-lg font-semibold'>
                    {review.author.charAt(0).toUpperCase()}
                </div>

                <div className='flex flex-col items-start justify-start'>
                    <h4 className='text-lg font-heading font-semibold text-gray-900'>{review.author}</h4>
                    <span className='text-sm text-gray-500 font-normal' >{review.date}</span>
                </div>
            </div>

            <Badge variant={review.status === "approved" ? "success" : review.status === "pending" ? "warning" : "error"}>
                {review.status}
            </Badge>
        </div>

        <div className='flex flex-col gap-2 items-start justify-start'>
            <StarsCount count={review.rating} />

            <p className='text-md font-normal text-gray-900 text-justify'>
                { review.content}
            </p>
        </div>

        <div className='border-t border-gray-200 pt-4 flex flex-row items-center justify-between'>
            <p className='text-sm font-medium text-gray-500'>Producto: <span className='text-orange-600'>{review.product}</span></p>
            {
                review.status === "approved" ? (
                <Button
                    size={"sm"}
                    variant={"ghost"}
                >
                    Ocultar
                    <EyeClosed/>
                </Button>
                ) : (
                <Button
                    size={"sm"}
                    variant={"gradient"}
                >
                    Aprobar
                    <Check/>
                </Button>
                )
            }
        </div>
   </Card>
  )
}
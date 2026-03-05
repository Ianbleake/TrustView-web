import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export const ProductCardSkeleton = ():React.ReactElement => {
  return (
    <Card className="flex flex-col w-72 pt-0 max-w-65 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden bg-gray-100/10">

      <div className="h-60 bg-gray-50 flex items-center justify-center border-b border-gray-100">
        <Skeleton className='h-full w-full' />
      </div>

      <div className="px-5 flex flex-col gap-3">

        <div className='flex flex-row gap-2 items-center justify-between'>

          <Skeleton className='h-4 w-2/3'/>

          <Skeleton className='h-8 w-8' />

        </div>

        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} className="h-5 w-5 rounded-full" />
          ))}
        </div>
        

      </div>

    </Card>
  )
}
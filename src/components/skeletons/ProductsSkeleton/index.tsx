import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import { PageTitleSkeleton } from '../PageTitleSkeleton'
import { ProductCardSkeleton } from '../ProductCardSkeleton'

export const ProductsSkeleton = ():React.ReactElement => {
  return (
    <div className='flex flex-col gap-4'>

      <div className='flex flex-row items-center justify-between'>

        <PageTitleSkeleton/>

        <div className="flex flex-1 items-center justify-end gap-4" >

          <Skeleton className='h-8 w-95' />
          <Skeleton className='h-5 w-22' />

        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-3">

        {
          [1,2,3,4,5].map(() => (
            <div className="mx-2">
              <ProductCardSkeleton/>
            </div>
          ))
        }

      </div>

    </div>
  )
}
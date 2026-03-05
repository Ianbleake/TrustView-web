import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export const ProductDetailSkeleton = ():React.ReactElement => {
  return (
    <div className='flex flex-col flex-1 min-h-full gap-6'>

      <div>
        <Skeleton className='h-4 w-38 mt-3' />
      </div>

      <Card className='flex flex-row justify-between border-gray-100 bg-gray-100/20 p-4'>
        
        <div className='flex flex-row items-center justify-start gap-6'>

          <div className="h-40 w-40 flex items-center justify-center shrink-0 rounded-xl overflow-hidden bg-gray-200/50 border border-gray-200 ">
            <Skeleton className='h-full w-full'/>
          </div>

          <div className="flex flex-col items-start gap-7">

            <div className='flex flex-col gap-1'>

              <div className='flex flex-row items-center gap-3'>
                <Skeleton className='w-45 h-6'/>

                <Skeleton className='h-6 w-6'/>
              </div>

              <div className="flex gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton key={i} className="h-5 w-5 rounded-full" />
                ))}
              </div>

            </div>

            <div className="flex flex-row items-center justify-between gap-8">

              {/* Reviews */}
              <div className="flex flex-row items-center gap-3">

                <Skeleton className="h-10 w-10 rounded-full" />

                <div className="flex flex-col gap-1">
                  <Skeleton className="h-4 w-10" />
                  <Skeleton className="h-4 w-16" />
                </div>

              </div>

              {/* Trend */}
              <div className="flex flex-row items-center gap-3">

                <Skeleton className="h-10 w-10 rounded-full" />

                <div className="flex flex-col gap-1">
                  <Skeleton className="h-4 w-12" />
                  <Skeleton className="h-4 w-20" />
                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="flex flex-2 flex-col justify-center items-end">
          <div className="w-2/3 space-y-3">

            {[1,2,3,4,5].map((i) => (
              <div key={i} className="flex items-center gap-3">

                {/* número estrella */}
                <Skeleton className="h-4 w-3" />

                {/* estrella */}
                <Skeleton className="h-3.5 w-3.5 rounded-sm" />

                {/* barra */}
                <Skeleton className="flex-1 h-3 rounded-full" />

                {/* porcentaje */}
                <Skeleton className="h-4 w-10 ml-auto" />

              </div>
            ))}

          </div>
        </div>

      </Card>

      <div className="flex flex-row items-center justify-between gap-4">
        
        <div className="bg-gray-200/50 w-full md:w-2/3 grid grid-cols-2 md:flex gap-2 p-1 rounded-md">
          <Skeleton className="h-8 w-full rounded-md" />
          <Skeleton className="h-8 w-full rounded-md" />
          <Skeleton className="h-8 w-full rounded-md hidden md:block" />
          <Skeleton className="h-8 w-full rounded-md hidden md:block" />
        </div>

        <Skeleton className="h-8 w-64 rounded-md" />
      </div>

      <div className="columns-1 md:columns-2 gap-4 flex-1">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="mb-4 break-inside-avoid">
            <Card className="w-full flex flex-col p-4 h-fit gap-4 opacity-50 bg-gray-50/30 border-gray-200">

              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-start gap-4">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div className="flex flex-col gap-2">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>

                <Skeleton className="h-6 w-20 rounded-full" />
              </div>

              <Skeleton className="h-4 w-24" />

              <div className="flex flex-col gap-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/6" />
              </div>

              <div className="border-t border-gray-200 pt-4 flex flex-row items-center justify-between">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-8 w-24 rounded-md" />
              </div>

            </Card>
          </div>
        ))}
      </div>

    </div>
  )
}
import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export const LastReviewsSkeleton = ():React.ReactElement => {
  return (
    <div className='flex flex-col'>

      <div className="flex items-center justify-between mb-4 ">
        <Skeleton className='h-6 w-40'/>
        <Skeleton className='h-5 w-20'/>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
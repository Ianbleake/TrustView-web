import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'
import { LastReviewsSkeleton } from '../LastReviewsSkeleton'
import { Star } from 'lucide-react'

export const AnalyticsSkeleton = ():React.ReactElement => {
  return (
    <div className='flex flex-col gap-8 '>

      <Skeleton className='p-18 m-auto w-full rounded-lg'/>

      <div className="w-full flex flex-row gap-2 items-center">
        
        {
          [1, 2, 3, 4].map(() => (
            <Card className='flex flex-row gap-2 min-h-40 items-stretch px-4 py-4 w-1/4 rounded-lg opacity-50 bg-gray-50/30 border-gray-200'>

              <div className="flex flex-1 flex-col">
    
                <div className="flex flex-col gap-1">
                  <Skeleton className='h-6 w-24 mb-2 rounded'/>
                  <Skeleton className='h-10 w-32 rounded'/>
                </div>
    
                <Skeleton className='h-5 w-13 mt-auto rounded-lg'/>
    
              </div>
    
              <Skeleton className='h-12 w-12'/>
              
            </Card>
          ))
        }
      </div>

      <Card className='flex flex-col px-4 py-6 rounded-lg opacity-50 bg-gray-50/30 border-gray-200'>

        <div className='flex flex-row items-center justify-between'>

          <div className='flex flex-col items-start'>
            <Skeleton className='h-6 w-68 mb-2 rounded'/>
            <Skeleton className='h-5 w-32 rounded'/>
          </div>

          <div className='flex flex-col gap-1 items-end'>
            <Skeleton className='h-10 w-14 rounded'/>
            <div className="flex items-center gap-1">
              <Star className='h-3.5 w-3.5 fill-gray-200 animate-pulse text-gray-400/80'/>
              <Star className='h-3.5 w-3.5 fill-gray-200 animate-pulse text-gray-400/80'/>
              <Star className='h-3.5 w-3.5 fill-gray-200 animate-pulse text-gray-400/80'/>
              <Star className='h-3.5 w-3.5 fill-gray-200 animate-pulse text-gray-400/80'/>
              <Star className='h-3.5 w-3.5 fill-gray-200 animate-pulse text-gray-400/80'/>
            </div>
          </div>

        </div>

        <div className="space-y-3">
          {
            [1, 2, 3, 4, 5].map(() => (
              <div className="flex items-center gap-3 group" key={Math.random()}>

                <Skeleton className='h-3.5 w-3.5 rounded-full'/>
                <Star className='h-3.5 w-3.5 fill-gray-200 animate-pulse text-gray-400/80'/>

                <div className="flex-1 h-3 rounded-full bg-gray-200/50 overflow-hidden">
                    <Skeleton className='h-full rounded-full transition-all duration-700' style={{ width: `100%` }}/>
                </div>

                <Skeleton className='h-5 w-12 rounded'/>
              </div>
            ))
          }

        </div>

        <LastReviewsSkeleton/>

      </Card>

    </div>
  )
}
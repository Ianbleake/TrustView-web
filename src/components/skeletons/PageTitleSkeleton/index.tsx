import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export const PageTitleSkeleton = ():React.ReactElement => {
  return (
    <div className='flex flex-col items-start justify-start gap-1'>

      <div className='flex flex-row items-center gap-2 mt-2'> 
        <Skeleton className='h-6 w-30'/>
        <Skeleton className='h-5 w-5 rounded-full'/>
      </div>

      <Skeleton className='h-4 w-90 mt-2' />

    </div>
  )
}
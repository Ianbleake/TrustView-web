import React from "react"
import { Skeleton } from "@/components/ui/skeleton"
import { Card } from "@/components/ui/card"

export const ReviewsSkeleton = (): React.ReactElement => {
  return (
    <div className="flex flex-col gap-6 min-h-full animate-pulse">

      <div className="flex flex-row items-center justify-between mt-2">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-7 w-40" />
          <Skeleton className="h-4 w-72" />
        </div>

        <div className="flex flex-row gap-2 items-center">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </div>

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

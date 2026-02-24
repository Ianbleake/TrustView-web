import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const ProductPageWidgetSkeleton = (): React.ReactElement => {
  return (
    <div className="flex flex-col gap-4">

      
      <div className="max-w-6xl px-6 py-10">

        <div className="grid md:grid-cols-2 gap-12 items-start">

          
          <div className="rounded-2xl border border-gray-200 bg-gray-50 flex flex-1 items-center justify-center h-120">
            <Skeleton className="h-32 w-32 rounded-xl" />
          </div>

          
          <div className="flex w-full flex-col gap-6">

            {/* Título */}
            <div>
              <Skeleton className="h-8 w-48" />
            </div>

            {/* Precio */}
            <div className="flex flex-col gap-2">
              <Skeleton className="h-8 w-32" />
              <Skeleton className="h-4 w-40" />
            </div>

            {/* Stars */}
            <div className="flex gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-5 w-5 rounded-full" />
              ))}
            </div>

            {/* Descripción */}
            <div className="flex flex-col gap-2">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            {/* Botón */}
            <Skeleton className="h-12 w-full rounded-xl mt-4" />

          </div>
        </div>
      </div>

      
      <div className="flex flex-col gap-8">

        
        <div>
          <Skeleton className="h-7 w-64" />
        </div>

        
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="rounded-xl border p-4 flex flex-col gap-3"
            >
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-3 w-16 mt-2" />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
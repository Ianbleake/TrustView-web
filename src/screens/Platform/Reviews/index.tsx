import React, { useState } from 'react'
import { ReviewsGrid } from './ReviewsGrid'
import { RecentReviewsData } from '@/content/RecentReviews'
import { Check, EyeClosed, Hourglass, Star } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const Reviews = ():React.ReactElement => {

  const [filter, setFilter] = useState<"all" | ReviewState >("all");

  const filteredReviews =
    filter === "all"
      ? RecentReviewsData
      : RecentReviewsData.filter(r => r.status === filter);
  
  return (
    <Tabs value={filter} onValueChange={(v) => setFilter(v as "all" | ReviewState)} className='flex flex-col gap-6'>

      <div className='flex flex-col items-start justify-start gap-1'>
        <h1 className='font-heading font-semibold text-2xl text-gray-900'>Reseñas</h1>
        <p className='font-normal text-sm text-gray-400'>Gestioná todas las reseñas de tu tienda</p>
      </div>

      <div className='flex flex-row items-center justify-between'>

        <TabsList className='bg-gray-200/50 w-full md:w-2/3 h-auto grid grid-cols-2 gap-2 md:flex shadow-sm' >

          <TabsTrigger value='all' className="cursor-pointer shadow-inner flex flex-row items-center justify-center gap-3 data-[state=active]:shadow-amber-500 data-[state=active]:text-amber-600" >
            Todas
            <Star/>
          </TabsTrigger>

          <TabsTrigger value='approved' className="cursor-pointer shadow-inner flex flex-row items-center justify-center gap-3 data-[state=active]:shadow-amber-500 data-[state=active]:text-amber-600" >
            Aprovadas
            <Check/>
          </TabsTrigger>

          <TabsTrigger value='pending' className="cursor-pointer shadow-inner flex flex-row items-center justify-center gap-3 data-[state=active]:shadow-amber-500 data-[state=active]:text-amber-600" >
            Pendientes
            <Hourglass/>
          </TabsTrigger>

          <TabsTrigger value='rejected' className="cursor-pointer shadow-inner flex flex-row items-center justify-center gap-3 data-[state=active]:shadow-amber-500 data-[state=active]:text-amber-600" >
            Ocultas
            <EyeClosed/>
          </TabsTrigger>

        </TabsList>

        <div id='search'>

        </div>

      </div>

      <TabsContent value={filter}>
        <ReviewsGrid reviews={filteredReviews} />
      </TabsContent>

    </Tabs>
  )
}
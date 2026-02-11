import React, { useState } from 'react'
import { ReviewsGrid } from './components/ReviewsGrid'
import { RecentReviewsData } from '@/content/RecentReviews'
import { Check, EyeClosed, Hourglass, Search, Star } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { EmptyReviews } from './components/EmptyReviews'
import { ImportReviews } from './components/ImportReviews'
import { CreateReview } from './components/CreateReview'
import { useSessionStorage } from '@/storage/authStorage'

export const Reviews = ():React.ReactElement => {

  const { profile } = useSessionStorage();
  const [filter, setFilter] = useState<"all" | ReviewState>("all");
  const [search, setSearch] = useState("");

  const filteredReviews = RecentReviewsData
    .filter(r => filter === "all" || r.status === filter)
    .filter(r => {
      if (!search) return true;
      const q = search.toLowerCase();
      return (
        r.author.toLowerCase().includes(q) ||
        r.content.toLowerCase().includes(q) ||
        r.product.toLowerCase().includes(q)
      );
    });
  
  return (
    <Tabs value={filter} onValueChange={(v) => setFilter(v as "all" | ReviewState)} className="flex flex-col gap-6 min-h-full">

      <div className='flex flex-row items-center justify-between animate-fade-in'>

        <div className='flex flex-col items-start justify-start gap-1'>
          <h1 className='font-heading font-semibold text-2xl text-gray-900'>Reseñas</h1>
          <p className='font-normal text-sm text-gray-400'>Gestioná todas las reseñas de tu tienda</p>
        </div>

        <div className='flex flex-row gap-2 items-center'>

          <ImportReviews disabled={profile?.billing !== "pro"} />

          <CreateReview />

        </div>


      </div>

      <div className='flex flex-row items-center justify-between animate-fade-in'>

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

        <div className="relative">
          <Input
            type="search"
            placeholder="Buscar por autor, producto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-12"
            size={30}
          />
          <Search className="text-orange-600 absolute top-1 left-3 opacity-80" />
        </div>

      </div>

      <TabsContent value={filter} className="flex flex-1">
        {
          filteredReviews.length <= 0 ? (
            <EmptyReviews/>
          ) : (
            <ReviewsGrid reviews={filteredReviews} />
          ) 
        }
      </TabsContent>

    </Tabs>
  )
}
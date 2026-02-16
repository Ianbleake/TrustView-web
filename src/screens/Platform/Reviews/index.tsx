import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { Input } from '@/components/ui/input'
import useReviews from '@/hooks/reviews/useReviews'
import { ReviewsGrid } from './components/ReviewsGrid'
import { EmptyReviews } from './components/EmptyReviews'
import { CreateReview } from './components/CreateReview'
import { useSessionStorage } from '@/storage/authStorage'
import { ImportReviews } from './components/ImportReviews'
import { useReviewStorage } from '@/storage/reviewStorage'
import { ReviewsSkeleton } from '@/components/skeletons/ReviewsSkeleton'
import { Check, EyeClosed, Hourglass, Search, Star, ArrowUpDown, ArrowUp, ArrowDown, HeartMinus, HeartPlus } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type SortState = | "newest" | "oldest" | "rating_high" | "rating_low" | "author_az";

const sortConfig: Record<SortState, { label: string; icon: React.ElementType }> = {
  newest: { label: "Más recientes", icon: ArrowDown },
  oldest: { label: "Más antiguas", icon: ArrowUp },
  rating_high: { label: "Mayor calificación", icon: HeartPlus },
  rating_low: { label: "Menor calificación", icon:  HeartMinus },
  author_az: { label: "Autor A-Z", icon: ArrowUpDown },
};

export const Reviews = ():React.ReactElement => {

  const { isLoading } = useReviews();
  const { reviews } = useReviewStorage();

  const { profile } = useSessionStorage();
  const [filter, setFilter] = useState<"all" | ReviewState>("all");
  const [sortBy, setSortBy] = useState<SortState>("newest");

  const [search, setSearch] = useState("");

  const filteredReviews = React.useMemo(() => {
    const base = (reviews ?? [])
      .filter(r => filter === "all" || r.status === filter)
      .filter(r => {
        if (!search) return true;
  
        const q = search.toLowerCase();
  
        const author = r.author?.toLowerCase() ?? "";
        const content = r.content?.toLowerCase() ?? "";
        const product = r.product?.toLowerCase() ?? "";
  
        return (
          author.includes(q) ||
          content.includes(q) ||
          product.includes(q)
        );
      });
  
    return [...base].sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.date).getTime() - new Date(a.date).getTime();
  
        case "oldest":
          return new Date(a.date).getTime() - new Date(b.date).getTime();
  
        case "rating_high":
          return (b.rating ?? 0) - (a.rating ?? 0);
  
        case "rating_low":
          return (a.rating ?? 0) - (b.rating ?? 0);
  
        case "author_az":
          return (a.author ?? "").localeCompare(b.author ?? "");
  
        default:
          return 0;
      }
    });
  }, [reviews, filter, search, sortBy]);

  if (isLoading) {
    return <ReviewsSkeleton />
  }
  
  const SortIcon = sortConfig[sortBy].icon;

  return (
    <Tabs value={filter} onValueChange={(v) => setFilter(v as "all" | ReviewState)} className="flex flex-col gap-6 min-h-full">

      <div className='flex flex-row items-center justify-between animate-fade-in'>

        <div className='flex flex-col items-start justify-start gap-1'>
          <h1 className='font-heading font-semibold text-2xl text-gray-900'>Reseñas</h1>
          <p className='font-normal text-sm text-gray-400'>Gestioná todas las reseñas de tu tienda</p>
        </div>

        <div className='flex flex-row gap-3 items-center'>

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

        <div className="flex items-center bg-white border rounded-lg shadow-sm overflow-hidden w-85">

          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-600 opacity-80" size={18} />
            <Input
              type="search"
              placeholder="Buscar por autor, producto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          <div className="h-8 w-px bg-gray-200" />

          <div>
            <Select
              value={sortBy}
              onValueChange={(v) => setSortBy(v as SortState)}
            >

              <SelectTrigger className="border-0 focus-visible:ring-0 gap-2 w-auto h-10 px-3 rounded-lg hover:bg-gray-100 transition cursor-pointer">
                <SortIcon className="text-orange-600" size={16} />
              </SelectTrigger>


              <SelectContent position="popper">
                <SelectItem className='cursor-pointer' value="newest">Más recientes</SelectItem>
                <SelectItem className='cursor-pointer' value="oldest">Más antiguas</SelectItem>
                <SelectItem className='cursor-pointer' value="rating_high">Mayor calificación</SelectItem>
                <SelectItem className='cursor-pointer' value="rating_low">Menor calificación</SelectItem>
                <SelectItem className='cursor-pointer' value="author_az">Autor A-Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

        </div>


      </div>

      <TabsContent value={filter} className="flex flex-1">
        {
          !filteredReviews || filteredReviews.length <= 0 ? (
            <EmptyReviews/>
          ) : (
            <ReviewsGrid reviews={filteredReviews} />
          ) 
        }
      </TabsContent>

    </Tabs>
  )
}
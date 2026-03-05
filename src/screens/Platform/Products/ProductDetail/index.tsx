import React from 'react'
import { Card } from '@/components/ui/card'
import { ReviewsTabs } from './ReviewsTabs'
import { merge } from '@/utils/mergeStyles'
import { Nodata } from '@/components/NoData'
import { ReviewsChart } from './ReviewsChart'
import { Button } from '@/components/ui/button'
import { StarsCount } from '@/components/StarsCount'
import useProduct from '@/hooks/products/useProduct'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, Camera, ExternalLink, MessageSquare, Package, RefreshCcw, TrendingUp } from 'lucide-react'
import { ProductDetailSkeleton } from '@/components/skeletons/ProductDetailSkeleton'

export const ProductDetail = ():React.ReactElement => {

  const navigate = useNavigate();

  const { id:productId } = useParams();

  const { isLoading, product } = useProduct(productId || "" );

  if(isLoading){
    return(
      <ProductDetailSkeleton/>
    )
  }

  if(!product || !productId){
    return(
      <Nodata title='No encontramos el producto...' description='Algo salio mal al obtener la informacion del producto...' icon={Package} action={() => window.location.reload()} actionLabel={"Volver a intentar"} actionIcon={RefreshCcw} />
    )
  }

  return (
    <div className='flex flex-col flex-1 min-h-full gap-6'>

      <div>
        <Button variant={"link"} className='' onClick={()=>navigate("/platform/products")}>
          <ArrowLeft/>
          Volver a productos
        </Button>
      </div>

      <Card className='flex flex-row justify-between animate-fade-in p-4' style={{ animationDelay: "50ms" }} >

        <div className='flex flex-row items-center justify-start gap-6'>

          <div className="h-40 w-40 flex items-center justify-center shrink-0 rounded-xl overflow-hidden bg-gray-200/50 border border-gray-200 ">
              {
                product.product_img ? (
                  <img src={product.product_img} alt={product.product_name} className="h-full w-full object-contain rounded-xl" />
                ) : (
                  <Camera className='h-20 w-20 text-gray-500/50'/>
                )
              }
          </div>

          <div className="flex flex-col items-start gap-7">

            <div className='flex flex-col gap-1'>

              <div className='flex flex-row items-center gap-3'>
                <h1 className="font-heading text-2xl font-bold text-foreground">{product.product_name}</h1>
                <a href={product.product_url} target='_blank'><ExternalLink className='text-orange-500 w-5 h-5'/></a>
              </div>

              <StarsCount count={product.rating} showCount />

            </div>

            <div className='flex flex-row items-center justify-between gap-8'>

              <div className='flex flex-row items-center gap-3'>

                <div className='p-2 rounded-full bg-orange-50 border border-orange-500/30'> 
                  <MessageSquare className='h-5 w-5 m-1 text-orange-500'/>
                </div>

                <div className='flex flex-col gap-0'>
                  <p className='text-sm font-semibold text-gray-500'>{product.reviews.total}</p>
                  <span className='text-sm font-semibold text-gray-500' >Reseñas</span>
                </div>

              </div>

              <div className='flex flex-row items-center gap-3'>

                <div className={merge('p-2 rounded-full ', product.reviews.growth === "positive" ? "bg-green-50 border border-green-500/30" : "bg-red-50 border border-red-500/30" )}> 
                  <TrendingUp className={merge("h-5 w-5 m-1", product.reviews.growth === "positive" ? "text-emerald-500" : "text-red-500")}/>
                </div>

                <div className='flex flex-col gap-0'>
                  <p className={merge('text-sm font-semibold text-gray-500',product.reviews.growth === "positive" ? "text-emerald-600" : "text-red-500")}>{product.reviews.growth === "positive" ? "+" : "-"}{ product.reviews.trend }%</p>
                  <span className='text-sm font-semibold text-gray-500'>Este mes</span>
                </div>

              </div>

            </div>

          </div>

        </div>

        <ReviewsChart ratings={product.reviews.reviewsRatings} />

      </Card>

      <ReviewsTabs reviews={product.reviews.reviews}/>

    </div>
  )
}
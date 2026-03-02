import { StarsCount } from '@/components/StarsCount'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList } from '@/components/ui/tabs'
import { ArrowLeft, Camera, ExternalLink, MessageSquare, TrendingUp } from 'lucide-react'
import React from 'react'
import { useParams } from 'react-router-dom'

export const ProductDetail = ():React.ReactElement => {

  const { id:productId } = useParams();

  const product = {

  } as Product;

  return (
    <div className=''>

      <div className='mb-2'>
        <Button variant={"link"} className=''>
          <ArrowLeft/>
          Volver a productos
        </Button>
      </div>

      <Card className='flex flex-row justify-between animate-fade-in p-4' style={{ animationDelay: "50ms" }} >

        <div className='flex flex-row items-center justify-start gap-6'>

          <div className="h-40 w-40 flex items-center justify-center shrink-0 rounded-xl overflow-hidden bg-gray-200/50 border border-gray-200 ">
              {
                product.productImg ? (
                  <img src={product.productImg} alt={product.productName} className="h-full w-full object-cover rounded-xl" />
                ) : (
                  <Camera className='h-20 w-20 text-gray-500/50'/>
                )
              }
          </div>

          <div className="flex flex-col items-start gap-7">

            <div className='flex flex-col gap-1'>
              <div className='flex flex-row items-center gap-3'>
                <h1 className="font-heading text-2xl font-bold text-foreground">Producto test</h1>
                <ExternalLink className='text-orange-500 w-5 h-5'/>
              </div>
              <StarsCount count={5} />
            </div>

            <div className='flex flex-row items-center justify-between gap-8'>

              <div className='flex flex-row items-center gap-3'>

                <div className='p-2 rounded-full bg-orange-50 border border-orange-500/30'> 
                  <MessageSquare className='h-5 w-5 m-1 text-orange-500'/>
                </div>

                <div className='flex flex-col gap-0'>
                  <p className='text-sm font-semibold text-gray-500'>4</p>
                  <span className='text-sm font-semibold text-gray-500' >Reseñas</span>
                </div>

              </div>

              <div className='flex flex-row items-center gap-3'>

                <div className='p-2 rounded-full bg-green-50 border border-green-500/30'> 
                  <TrendingUp className='h-5 w-5 m-1 text-emerald-500'/>
                </div>

                <div className='flex flex-col gap-0'>
                  <p className='text-sm font-semibold text-gray-500'>4</p>
                  <span className='text-sm font-semibold text-gray-500' >Promedio</span>
                </div>

              </div>

            </div>

          </div>

        </div>

        <div id='reviews chart'>

        </div>

      </Card>

      <Tabs>

        <TabsList>

        </TabsList>

        <TabsContent value="">
          <></>
        </TabsContent>
      </Tabs>

    </div>
  )
}
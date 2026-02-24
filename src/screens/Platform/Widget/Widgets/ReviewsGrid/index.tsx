import { getTextStyleClasses } from '@/utils/getTextStyleClasses'
import { merge } from '@/utils/mergeStyles'
import React from 'react'
import { ReviewCardWidget } from '../../ReviewCardWidget';
import useLastReviews from '@/hooks/reviews/useLastReviews';
import { Shirt } from 'lucide-react';
import { StarsRating } from '../../StarsRating';
import { ProductPageWidgetSkeleton } from '@/components/skeletons/ProductPageWidgetSkeleton';


type ReviewsGridProps = {
  widgetConfig: WidgetStyles;
}

export const ReviewsGrid = ({
  widgetConfig,
}:ReviewsGridProps ):React.ReactElement => {

  const { lastReviews, isLoading } = useLastReviews();
  

  if (isLoading) {
    return <ProductPageWidgetSkeleton />;
  }
  
  return (
    <div className='flex flex-col gap-4'>

      <div className="max-w-6xl mx-auto px-6 py-10">

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          
          <div className="rounded-2xl border border-gray-200 bg-gray-50 flex items-center justify-center h-120">
            <Shirt className="h-32 w-32 text-gray-300" />
          </div>

          
          <div className="flex flex-col gap-6">
            
            <div>
              <h1 className="text-3xl font-semibold text-gray-900">
                Producto
              </h1>
            </div>

            <div>
              <span className="text-3xl font-bold text-gray-900">
                $49.99
              </span>
              <p className="text-sm text-gray-500 mt-1">
                Impuestos incluidos
              </p>
            </div>

            <StarsRating count={4} bodyColor={widgetConfig.starBodyColor} fillColor={widgetConfig.starFillColor} emptyColor={widgetConfig.emptyStarColor}/>

            <div>
              <h2 className="text-lg font-medium text-gray-900 mb-2">
                Descripción
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Esta es una descripción completa del producto. Aquí explicas beneficios,
                materiales, uso y lo que haga que el cliente diga “lo necesito”.
              </p>
            </div>

            {/* Botón */}
            <button className="mt-4 bg-black text-white py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors">
              Agregar al carrito
            </button>

          </div>
        </div>

      </div>

      <div className="flex flex-col gap-8">
        <div>
          <h1
            className={merge(
              "text-2xl",
              getTextStyleClasses(widgetConfig.sectionTitleStyle)
            )}
          >
            { widgetConfig.sectionTitle }
          </h1>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
          {lastReviews?.map((review) => (
            <ReviewCardWidget
              key={review.id}
              review={review}
              config={widgetConfig}
            />
          ))}
        </div>
      </div>

    </div>
  )
}
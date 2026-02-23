import { Card } from '@/components/ui/card'
import { Shirt } from 'lucide-react'
import React from 'react'
import { StarsRating } from '../../../StarsRating';

type ProductCardProps = {
  widgetConfig: WidgetStyles;
  index: number;
}
export const ProductCard = ({
  widgetConfig,
  index,
}:ProductCardProps):React.ReactElement => {
  return (
    <Card className="w-72 pt-0 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      

      <div className="h-56 bg-gray-50 flex items-center justify-center border-b border-gray-100">
        <Shirt className="h-20 w-20 text-gray-300" />
      </div>

      <div className="p-5 flex flex-col gap-3">
        
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Producto {index}
          </h2>

          <p className="text-sm text-gray-500 mt-1 line-clamp-2">
            Descripción breve del producto que explica lo esencial sin verse saturado.
          </p>
        </div>

        <StarsRating count={index} bodyColor={widgetConfig.starBodyColor} fillColor={widgetConfig.starFillColor} emptyColor={widgetConfig.emptyStarColor}/>

        <div className="mt-auto">
          <span className="text-lg font-semibold text-gray-900">
            $49.99
          </span>
        </div>
      </div>

    </Card>
  )
}
import React from 'react'
import { ProductCard } from './ProductCard';

type ProductCardRadtingProps = {
  widgetConfig: WidgetStyles;
}

export const ProductCardRadting = ({
  widgetConfig,
}:ProductCardRadtingProps ):React.ReactElement => {
  return (
  <div className="flex justify-center mt-8">
    {
      [1, 2, 3].map((index) => (
        <div key={index} className="mx-2">
          <ProductCard widgetConfig={widgetConfig} index={index} />
        </div>
      ))
    }
  </div>
  )
}
import { ProductCard } from '@/components/ProductCard';
import React from 'react'

type ProductsGridProps = {
  products: Product[];
}

export const ProductsGrid = ({
  products,
}:ProductsGridProps ):React.ReactElement => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-3 animate-fade-in" style={{ animationDelay: "200ms" }}>
    {
      products.map((product) => (
        <div key={product.product_name} className="mx-2">
          <ProductCard  product={product} />
        </div>
      ))
    }
  </div>
  )
}
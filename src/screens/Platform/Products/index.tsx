import { PageTitle } from '@/components/PageTitle'
import { ProductCard } from '@/components/ProductCard'
import { mockProducts } from '@/content/MockProducts'
import React from 'react'

export const Products = ():React.ReactElement => {
  return (
    <div className='flex flex-col gap-4'>

      <div>
        <PageTitle title='Productos' subtitle='Gestiona tus reseñas desde cada uno de tus productos.'/>
      </div>

      <div className='grid grid-cols-3 gap-8'> 
        {
          mockProducts.map((product) => (
            <div key={product.productName} className="mx-2">
              <ProductCard  product={product} />
            </div>
          ))
        }
      </div>

    </div>
  )
}
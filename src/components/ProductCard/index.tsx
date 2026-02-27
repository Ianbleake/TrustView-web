import { Card } from '@/components/ui/card'
import { ExternalLink, Shirt } from 'lucide-react'
import React from 'react'
import { StarsCount } from '../StarsCount';
import { Link } from 'react-router-dom';


type ProductCardProps = {
  product: Product
}
export const ProductCard = ({
  product,
}:ProductCardProps):React.ReactElement => {
  return (
    
      <Card className="w-72 pt-0 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
        

        <div className="h-60 bg-gray-50 flex items-center justify-center border-b border-gray-100">
          {
            product.productImg ? (
              <img className='h-full w-full object-cover' src={product.productImg} alt={product.productName}/>
            ) : (
              <Shirt className="h-20 w-20 text-gray-300" />
            )
          }
        </div>

        <div className="px-5 flex flex-col gap-3">
          
          <div className='flex flex-row gap-2 items-center justify-between'>

            <h2 className="text-base font-semibold text-gray-900 max-w-2/3">
              { product.productName }
            </h2>

            <a href={product.productUrl || "#"} className=''>
              <ExternalLink className='text-orange-600 '/>
            </a>
          </div>

          <StarsCount count={product.productRating} />

          <div className="">
            <Link to={product.id} className='text-lg font-normal text-orange-600'>
              Ver Reseñas
            </Link>
          </div>

        </div>

      </Card>
    
  )
}
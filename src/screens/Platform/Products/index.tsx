import { PageTitle } from '@/components/PageTitle'
import { ProductCard } from '@/components/ProductCard'
import { Input } from '@/components/ui/input'
import useProducts from '@/hooks/products/useProducts'
import { Search } from 'lucide-react'
import React, { useState } from 'react'

export const Products = ():React.ReactElement => {

  const [search, setSearch] = useState("");

  const { isLoading, products } = useProducts(); 

  console.log("products:",products)

  if(isLoading){
    return <div>Loading...</div>
  }

  if(!products){
    return(
      <div>No data</div>
    )
  }

  const filtered = products.filter(p =>
    p.product_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='flex flex-col gap-4'>

      <div className='flex flex-row items-center justify-between'>

        <PageTitle title='Productos' subtitle='Gestiona tus reseñas desde cada uno de tus productos.' info='Los productos que aparecen aqui, son unicamente aquellos que ya han sido reseñados.'/>

        <div className="flex flex-1 items-center justify-end gap-4 animate-fade-in" style={{ animationDelay: "100ms" }}>

          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-orange-600" />
            <Input
              placeholder="Buscar producto"
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9 bg-card "
            />
          </div>

          <div className="text-sm text-muted-foreground">
            {filtered.length} producto{filtered.length !== 1 && "s"}
          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-3">
        {
          filtered.map((product) => (
            <div key={product.product_name} className="mx-2">
              <ProductCard  product={product} />
            </div>
          ))
        }
      </div>

    </div>
  )
}
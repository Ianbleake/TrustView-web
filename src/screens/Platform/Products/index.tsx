import React, { useState } from 'react'
import { Nodata } from '@/components/NoData'
import { Input } from '@/components/ui/input'
import { PageTitle } from '@/components/PageTitle'
import useProducts from '@/hooks/products/useProducts'
import { Package, RefreshCcw, Search } from 'lucide-react'
import { ProductsSkeleton } from '@/components/skeletons/ProductsSkeleton'
import { EmptyProducts } from './EmptyProducts'
import { ProductsGrid } from './ProductsGrid'

export const Products = ():React.ReactElement => {

  const [search, setSearch] = useState("");

  const { isLoading, products } = useProducts(); 

  if(isLoading){
    return <ProductsSkeleton/>
  }

  if(!products){
    return(
      <Nodata title='No hay productos' description='Aun no tienes productos registrados o algo salio mal.' icon={Package} action={() => window.location.reload()} actionLabel={"Volver a intentar"} actionIcon={RefreshCcw} />
    )
  }

  const filtered = products.filter(p =>
    p.product_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className='flex h-full flex-col gap-4'>

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

      {
        !filtered || filtered.length <= 0 ? (
          <EmptyProducts/>
        ) : (
          <ProductsGrid products={filtered} />
        )
      }

    </div>
  )
}
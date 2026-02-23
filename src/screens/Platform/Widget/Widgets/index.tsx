import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import React from 'react'
import { ReviewsGrid } from './ReviewsGrid'
import { ProductCardRadting } from './ProductCardRadting'
import { PackageIcon, ShoppingBag } from 'lucide-react'

type WidgetsProps = {
  widgetConfig: WidgetStyles;
}

export const Widgets = ({
  widgetConfig,
}:WidgetsProps):React.ReactElement => {
  return (
    <Tabs
      defaultValue="productPage"
      className="flex flex-col gap-4"
    >
        <TabsList className="bg-gray-200/50 w-full md:w-2/3 h-auto grid grid-cols-2 gap-2 md:flex shadow-sm">
          <TabsTrigger
            className="cursor-pointer shadow-inner flex flex-row items-center justify-center gap-3 data-[state=active]:shadow-amber-500 data-[state=active]:text-amber-600"
            value='productPage'
          >
            <PackageIcon/>
            Página de producto
          </TabsTrigger>
          <TabsTrigger
            className="cursor-pointer shadow-inner flex flex-row items-center justify-center gap-3 data-[state=active]:shadow-amber-500 data-[state=active]:text-amber-600"
            value='productCards'
          >
            <ShoppingBag/>
            Tarjetas de producto
          </TabsTrigger>
        </TabsList>

        <TabsContent value='productPage'>
          <ReviewsGrid widgetConfig={widgetConfig}/>
        </TabsContent>

        <TabsContent value='productCards'>
          <ProductCardRadting widgetConfig={widgetConfig}/>
        </TabsContent>
    </Tabs>
  )
}
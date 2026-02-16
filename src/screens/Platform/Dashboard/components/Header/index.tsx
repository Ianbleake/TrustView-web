import React from 'react'
import { BackGlow } from './BackGlow'
import { Button } from '@/components/ui/button'
import { RefreshCw } from 'lucide-react'

export const Header = ():React.ReactElement => {
  return (
    <div className='relative flex flex-col p-6 m-auto w-full gap-2 gradient-hero rounded-lg overflow-hidden animate-fade-in'>
      <BackGlow/>
      <span className='font-semibold uppercase text-amber-600'>👋 Bienvenido de vuelta</span>
      <h1 className='font-heading text-white text-3xl font-semibold '>Mi Tienda Nube</h1>
      <p className='text-gray-400 text-md font-normal'>Acá tenés un resumen de cómo van tus reseñas.</p>
      <Button
        variant={"gradient"}
        size={"sm"}
        className='absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2'
        onClick={() => window.location.reload()}
      >
        Actualizar
        <RefreshCw/>
      </Button>
    </div>
  )
}
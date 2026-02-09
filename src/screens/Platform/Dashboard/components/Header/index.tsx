import React from 'react'
import { BackGlow } from './BackGlow'

export const Header = ():React.ReactElement => {
  return (
    <div className='relative flex flex-col p-6 m-auto w-full gap-2 gradient-hero rounded-lg overflow-hidden animate-fade-in'>
      <BackGlow/>
      <span className='font-semibold uppercase text-amber-600'>👋 Bienvenido de vuelta</span>
      <h1 className='font-heading text-white text-3xl font-semibold '>Mi Tienda Nube</h1>
      <p className='text-gray-400 text-md font-normal'>Acá tenés un resumen de cómo van tus reseñas.</p>
      
    </div>
  )
}
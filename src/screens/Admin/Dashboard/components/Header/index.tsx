import { BackGlow } from '@/screens/Platform/Dashboard/components/Header/BackGlow'
import React from 'react'

export const Header = ():React.ReactElement => {
  return (
    <div className='relative flex flex-col p-6 m-auto w-full gap-2 gradient-hero rounded-lg overflow-hidden animate-fade-in'>
      <BackGlow/>
      <span className='font-semibold uppercase text-amber-600'>🛡️ Panel Admin</span>
      <h1 className='font-heading text-white text-3xl font-semibold '>Métricas de la Plataforma</h1>
      <p className='text-gray-400 text-md font-normal'>Vista general del rendimiento y crecimiento de TrustView</p>
    </div>
  )
}
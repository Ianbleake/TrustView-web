import { Brand } from '@/components/Brand'
import { Star } from 'lucide-react'
import React from 'react'

export const AuthBranding = ():React.ReactElement => {
  return (
    <div className="hidden lg:flex lg:w-1/2 gradient-hero items-center justify-center p-12 relative overflow-hidden">

      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-amber-500/20 to-transparent rounded-bl-full animate-float" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-orange-400/15 to-transparent rounded-tr-full animate-float" />

      {Array.from({ length: 8 }).map((_, i) => (
        <Star
          key={i}
          className="absolute text-amber-700/20 fill-amber-500/20 animate-float"
          style={{
            top: `${15 + Math.random() * 70}%`,
            left: `${10 + Math.random() * 80}%`,
            width: `${14 + Math.random() * 16}px`,
            animationDelay: `${i * 0.4}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}

      <div className="relative z-10 text-center max-w-md animate-fade-in">

        <Brand icon size='xl' className='mb-8'/>

        <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
          TrustView
        </h1>

        <p className="text-white/50 text-lg leading-relaxed mb-8">
          Potenciá las ventas de tu Tienda Nube con reseñas auténticas de tus clientes
        </p>

        <div className="flex items-center justify-center gap-6 text-white/30 text-sm">
          <div className="text-center">
            <p className="text-2xl font-bold text-white/70 font-heading">12k+</p>
            <p>Reseñas</p>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="text-center">
            <p className="text-2xl font-bold text-white/70 font-heading">127</p>
            <p>Tiendas</p>
          </div>
          <div className="h-8 w-px bg-white/10" />
          <div className="text-center">
            <p className="text-2xl font-bold text-white/70 font-heading">4.7★</p>
            <p>Promedio</p>
          </div>
        </div>
      </div>

    </div>
  )
}
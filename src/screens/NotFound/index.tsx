import { Button } from '@/components/ui/button'
import { ArrowLeft, Home, SearchX } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { GlowBack } from './components/GlowBack'

export const NotFound = ():React.ReactElement => {
  return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden gradient-hero">
        
        <GlowBack/>

        <div className="relative z-10 mx-auto max-w-lg px-6 text-center">
        
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 shadow-glow animate-float">
            <SearchX className="h-10 w-10 text-primary" />
          </div>

      
          <h1 className="font-heading text-8xl font-bold tracking-tighter text-primary/20 select-none">
            404
          </h1>

          <h2 className="mt-2 font-heading text-2xl font-semibold text-primary-foreground">
            Página no encontrada
          </h2>

          <p className="mt-3 text-base text-gray-400">
            La ruta <code className="rounded-md bg-gray-200/20 px-2 py-0.5 text-sm text-primary">{location.pathname}</code> no existe.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">

            <Button asChild variant={"gradient"} className="gradient-primary w-full sm:w-auto">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Ir al inicio
              </Link>
            </Button>

            <Button asChild variant="outline">
              <Link to="/platform">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </Button>

          </div>
        </div>
        
      </div>
  )
}
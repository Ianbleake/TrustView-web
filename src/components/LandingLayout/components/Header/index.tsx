import React from 'react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'
import { Brand } from '@/components/Brand'
import { useSessionStorage } from '@/storage/authStorage'

export const Header = ():React.ReactElement => {

  const navigate = useNavigate();
  const { profile } = useSessionStorage();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-white/10 dark:bg-black/2 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)]">

      <div className="px-6 flex items-center justify-between h-16">

        <Brand/>

        <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="/#features" className="hover:text-foreground transition-colors">Funcionalidades</a>
          <a href="/#pricing" className="hover:text-foreground transition-colors">Precios</a>
          <a href="/#testimonials" className="hover:text-foreground transition-colors">Testimonios</a>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigate("/auth")}>
            { profile ? "Ingresar" : "Iniciar sesión"}
          </Button>
          {
            !profile && (
              <Button size="sm" variant={"gradient"} className="shadow-glow" onClick={() => navigate("/auth")}>
                Empezar gratis
              </Button>
            )
          }
        </div>
        
      </div>

    </nav>
  )
}
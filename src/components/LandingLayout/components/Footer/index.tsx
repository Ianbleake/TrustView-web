import React from 'react'
import { Brand } from '@/components/Brand'

export const Footer = ():React.ReactElement => {
  return (
    <footer className="border-t border-border/40 py-10">
      <div className="px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <Brand/>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <a href="/terms" className="hover:text-foreground transition-colors">Términos</a>
          <a href="/privacy" className="hover:text-foreground transition-colors">Privacidad</a>
          <a href="/contact" className="hover:text-foreground transition-colors">Contacto</a>
          <span>© 2026 TrustView by Noctis</span>
        </div>

      </div>
    </footer>
  )
}
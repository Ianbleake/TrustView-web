import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const CTA = ():React.ReactElement => {

  const navigate = useNavigate();
  
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 opacity-5 bg-dot-pattern" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-primary/15 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-5">
            ¿Listo para potenciar tu tienda?
          </h2>
          <p className="text-white/50 text-lg mb-8 max-w-lg mx-auto">
            Unite a más de 127 tiendas que ya usan ReviewsApp para aumentar sus ventas con reseñas auténticas.
          </p>
          <Button
            size="lg"
            className="shadow-glow rounded-xl px-10"
            variant={"gradient"}
            onClick={() => navigate("/auth")}
          >
            Crear cuenta gratis
            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
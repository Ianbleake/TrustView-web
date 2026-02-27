import React from 'react'
import { motion } from "framer-motion";
import { ArrowRight, Star, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import type { Variants } from "framer-motion";

export const Hero = ():React.ReactElement => {

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    }),
  };

  const navigate = useNavigate();
  
  return (
    <section className="relative pt-10 pb-20 md:pt-18 md:pb-32 overflow-hidden">
      
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 opacity-5 bg-dot-pattern" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/12 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-primary/8 to-transparent rounded-full blur-3xl" />

      {/* Floating stars */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Star
          key={i}
          className="absolute text-primary/15 fill-primary/15 animate-float"
          style={{
            top: `${20 + Math.random() * 60}%`,
            left: `${5 + Math.random() * 90}%`,
            width: `${12 + Math.random() * 14}px`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        />
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            <Zap className="h-3.5 w-3.5" />
            La app #1 de reseñas para Tienda Nube
          </motion.div>

          <motion.h1 variants={fadeUp} custom={1} className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Convertí reseñas en{" "}
            <span className="bg-gradient-to-r from-primary to-warning bg-clip-text text-transparent">
              más ventas
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} custom={2} className="text-lg md:text-xl text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
            Recolectá, mostrá y gestioná reseñas de tus clientes para aumentar la confianza y las conversiones de tu tienda online.
          </motion.p>

          <motion.div variants={fadeUp} custom={3} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="gradient-primary text-primary-foreground shadow-glow rounded-xl text-base px-8 group"
              onClick={() => navigate("/auth")}
            >
              Empezar gratis
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-xl text-base border-white/10 text-white/70 hover:text-white hover:bg-white/5"
              onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            >
              Ver funcionalidades
            </Button>
          </motion.div>

          <motion.div variants={fadeUp} custom={4} className="flex items-center justify-center gap-8 mt-14 text-white/30 text-sm">
            {[
              { val: "12k+", label: "Reseñas" },
              { val: "127", label: "Tiendas" },
              { val: "4.7★", label: "Promedio" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="text-2xl font-bold text-white/70 font-heading">{s.val}</p>
                <p>{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
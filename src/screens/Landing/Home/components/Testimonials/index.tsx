import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import React from 'react'

export const Testimonials = ():React.ReactElement => {
  return (
    <section id="testimonials" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 gradient-glow pointer-events-none" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros usuarios</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Tiendas que ya confían en ReviewsApp para potenciar sus ventas.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { name: "Sebastián L.", store: "Gadgets Pro MX", text: "Nos sorprendió la cantidad de reseñas que empezamos a recibir apenas activamos los recordatorios automáticos. Súper recomendado.", rating: 5 },
            { name: "Lucía F.", store: "Belleza Natural Shop", text: "La personalización del widget quedó perfecta con nuestra marca. Parece desarrollado a medida.", rating: 5 },
            { name: "Andrés M.", store: "Deportes Elite", text: "Las reseñas negativas ahora las gestionamos mucho mejor. Nos ayudó a mejorar procesos internos.", rating: 4 },
            { name: "Paula G.", store: "Kids Planet", text: "El reporte semanal nos da claridad total sobre la satisfacción del cliente. Información accionable, sin complicaciones.", rating: 5 },
            { name: "Diego C.", store: "Home Office Store", text: "Me encanta que las reseñas incluyan fotos. Genera mucha más confianza y aumenta el tiempo en página.", rating: 4 },
            { name: "Fernanda T.", store: "EcoMarket", text: "Desde que mostramos calificaciones visibles en producto, la tasa de rebote bajó bastante. Impacto real.", rating: 5 },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="rounded-2xl border border-border/60 bg-card p-7 shadow-card"
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }, (_, j) => (
                  <Star
                    key={j}
                    className={`h-4 w-4 ${j < t.rating ? "fill-yellow-300 text-yellow-500" : "fill-transparent text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed mb-5 text-muted-foreground">"{t.text}"</p>
              <div>
                <p className="font-heading font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.store}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
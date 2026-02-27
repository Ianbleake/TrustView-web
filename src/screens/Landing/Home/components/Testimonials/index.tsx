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
            { name: "Valentina R.", store: "Moda Urbana", text: "Desde que instalamos ReviewsApp, nuestras conversiones subieron un 23%. Los clientes confían más al ver reseñas reales.", rating: 5 },
            { name: "Martín S.", store: "Tech Store AR", text: "La integración fue instantánea. En 5 minutos ya teníamos el widget funcionando en nuestra tienda.", rating: 5 },
            { name: "Camila D.", store: "Casa & Deco", text: "El panel de moderación es súper intuitivo. Puedo gestionar todas las reseñas desde un solo lugar.", rating: 4 },
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
                    className={`h-4 w-4 ${j < t.rating ? "fill-star text-star" : "fill-star-empty text-star-empty"}`}
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
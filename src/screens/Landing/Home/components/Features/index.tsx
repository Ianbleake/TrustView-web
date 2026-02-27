import { motion } from 'framer-motion'
import { BarChart3, MessageSquare, Shield, Star, Store, Zap } from 'lucide-react'
import React from 'react'

export const Features = ():React.ReactElement => {
  return (
    <section id="features" className="py-20 md:py-28 relative">

      <div className="absolute inset-0 gradient-glow pointer-events-none" />

      <div className="container mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Todo lo que necesitás</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Herramientas poderosas para gestionar las reseñas de tu tienda y convertir la opinión de tus clientes en ventas.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Star, title: "Recolección automática", desc: "Enviá emails automáticos post-compra para pedir reseñas a tus clientes." },
            { icon: Shield, title: "Moderación inteligente", desc: "Aprobá, rechazá o respondé reseñas desde un panel centralizado." },
            { icon: BarChart3, title: "Analíticas detalladas", desc: "Visualizá métricas clave: rating promedio, volumen y tendencias." },
            { icon: Store, title: "Widget personalizable", desc: "Mostrá las reseñas en tu tienda con diseños que se adaptan a tu marca." },
            { icon: MessageSquare, title: "Reseñas con fotos", desc: "Permitiles a tus clientes adjuntar fotos para mayor credibilidad." },
            { icon: Zap, title: "Integración en 1 click", desc: "Conectá tu Tienda Nube en segundos, sin necesidad de código." },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className="group relative rounded-2xl border border-border/60 bg-card p-7 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5 overflow-hidden"
            >
              
              <div
                  className="
                      pointer-events-none
                      absolute -top-20 right-25
                      w-48 h-48
                      bg-orange-400/20
                      rounded-full
                      blur-3xl
                      opacity-0
                      transition-opacity duration-300
                      group-hover:opacity-100
                  "
              />

              <div className="relative">
                <div className="rounded-xl gradient-bg p-3 w-fit mb-5 shadow-glow">
                  <f.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
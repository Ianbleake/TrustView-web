import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { CheckCircle2, ChevronRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Pricing = ():React.ReactElement => {

  const navigate = useNavigate();
  
  return (
    <section id="pricing" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 opacity-30 bg-dot-pattern pointer-events-none" />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Planes simples y transparentes</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Empezá gratis y escalá a medida que tu tienda crece.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              name: "Free",
              price: "$0",
              desc: "Para empezar a probar",
              features: ["Hasta 50 reseñas/mes", "Widget básico", "1 tienda", "Soporte por email"],
              cta: "Empezar gratis",
              popular: false,
            },
            {
              name: "Basic",
              price: "$9",
              desc: "Para tiendas en crecimiento",
              features: ["Hasta 500 reseñas/mes", "Widget personalizable", "3 tiendas", "Analíticas básicas", "Soporte prioritario"],
              cta: "Elegir Basic",
              popular: false,
            },
            {
              name: "Pro",
              price: "$29",
              desc: "Para tiendas profesionales",
              features: ["Reseñas ilimitadas", "Widget premium", "Tiendas ilimitadas", "Analíticas avanzadas", "Soporte dedicado", "API access"],
              cta: "Elegir Pro",
              popular: true,
            },
          ].map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className={`relative rounded-2xl border p-7 transition-all duration-300 ${
                plan.popular
                  ? "border-primary/40 bg-card shadow-glow scale-[1.03]"
                  : "border-border/60 bg-card shadow-card hover:shadow-card-hover"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-primary-foreground text-xs font-semibold shadow-glow">
                  Más popular
                </div>
              )}
              <h3 className="font-heading font-bold text-xl mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-5">{plan.desc}</p>
              <div className="mb-6">
                <span className="font-heading text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground text-sm">/mes</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-success shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full rounded-xl ${
                  plan.popular
                    ? "gradient-primary text-primary-foreground shadow-glow"
                    : ""
                }`}
                variant={plan.popular ? "default" : "outline"}
                onClick={() => navigate("/auth")}
              >
                {plan.cta}
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
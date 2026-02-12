import { Card } from '@/components/ui/card'
import { merge } from '@/utils/mergeStyles';
import React from 'react'

const BillingPlans = [
  { plan: "Free", count: 45, pct: 35, style: "bg-secondary hover:bg-secondary/90", text: "text-orange-600" },
  { plan: "Basic", count: 52, pct: 41, style: "bg-primary hover:bg-primary/90", text: "text-primary-foreground" },
  { plan: "Pro", count: 30, pct: 24, style: "gradient-bg shadow-glow", text: "text-white" },
];

export const BillingsPlans = ():React.ReactElement => {
  return (
    <Card className="rounded-2xl p-6 animate-fade-in" style={{ animationDelay: '500ms' }}>
      <h2 className="font-heading text-lg font-semibold mb-5">Distribución de Planes</h2>
      <div className="grid grid-cols-3 gap-4">
        {BillingPlans.map(p => (
          <div key={p.plan} className="group text-center p-5 rounded-xl border border-orange-600/40 hover:border-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div className={merge("h-12 w-12 mx-auto rounded-xl flex items-center justify-center mb-3", p.style)}>
              <span className={merge("text-lg font-bold font-heading",p.text)}>
                {p.count}
              </span>
            </div>
            <p className="text-sm font-bold text-foreground">{p.plan}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{p.pct}% del total</p>
          </div>
        ))}
      </div>
    </Card>
  )
}
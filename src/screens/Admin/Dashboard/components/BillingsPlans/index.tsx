import React from 'react'

export const BillingsPlans = ():React.ReactElement => {
  return (
    <div className="rounded-2xl bg-card p-6 shadow-card border border-border/60 animate-fade-in" style={{ animationDelay: '500ms' }}>
      <h2 className="font-heading text-lg font-semibold mb-5">Distribución de Planes</h2>
      <div className="grid grid-cols-3 gap-4">
        {[
          { plan: "Free", count: 45, pct: 35, color: "bg-muted" },
          { plan: "Basic", count: 52, pct: 41, color: "bg-primary/10" },
          { plan: "Pro", count: 30, pct: 24, color: "gradient-primary" },
        ].map(p => (
          <div key={p.plan} className="group text-center p-5 rounded-xl border border-border/40 hover:border-primary/20 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-0.5">
            <div className={`h-12 w-12 mx-auto rounded-xl ${p.color} flex items-center justify-center mb-3`}>
              <span className={`text-lg font-bold font-heading ${p.plan === "Pro" ? "text-primary-foreground" : "text-foreground"}`}>
                {p.count}
              </span>
            </div>
            <p className="text-sm font-bold text-foreground">{p.plan}</p>
            <p className="text-xs text-muted-foreground mt-0.5">{p.pct}% del total</p>
          </div>
        ))}
      </div>
    </div>
  )
}
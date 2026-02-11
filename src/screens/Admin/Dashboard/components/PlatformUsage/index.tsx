import { Card } from '@/components/ui/card'
import { Activity } from 'lucide-react'
import React from 'react'
import { StatCard, type Stat } from './StatCard'

const mock = {
  title: "Reseñas esta semana",
  value: 456,
  trend: 25,
  growth: "positive"
} as Stat

export const PlatformUsage = ():React.ReactElement => {
  return (
    <Card className='flex flex-col gap-4 p-4 animate-fade-in' style={{ animationDelay: '400ms' }}>

      <div className='flex flex-row items-center justify-start gap-3 mb-5'>

        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <Activity className="h-6 w-6 text-primary" />
        </div>

        <div>
          <h2 className="font-heading text-lg font-semibold">Uso de la Plataforma</h2>
          <p className="text-xs text-muted-foreground">Métricas del ultimo mes</p>
        </div>

      </div>

      <div className='grid grid-cols-3 gap-4 mb-2'>
        <StatCard stat={mock}/>
        <StatCard stat={mock}/>
        <StatCard stat={mock}/>
      </div>
      
    </Card>
  )
}
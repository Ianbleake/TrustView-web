import { Button } from '@/components/ui/button';
import { merge } from '@/utils/mergeStyles';
import { Crown, RotateCw, Star, type LucideIcon } from 'lucide-react';
import React from 'react'

type BillingCardProps = {
  plan: Billing;
}

type Variant = "ghost" | "gradient" | "link" | "default" | "destructive" | "outline" | "secondary" | null ;

type BillingConfig = Record<Billing, {
  title: string;
  description: string;
  style: string;
  buttonLabel: string;
  buttonVariant: Variant,
  icon: LucideIcon;
}>

const billingCardConfig:BillingConfig = {
  free: {
    title: "Gratuito",
    description: "Ideal para comenzar y probar la plataforma.",
    style: "border border-orange-500/40 bg-muted/20 shadow-md",
    buttonLabel: "Actualizar a Básico",
    buttonVariant: "secondary",
    icon: Star,
  },
  base: {
    title: "Básico",
    description: "Desbloquea reseñas ilimitadas y funciones clave.",
    style: "border border-primary bg-primary/10 shadow-glow",
    buttonLabel: "Actualizar a Pro",
    buttonVariant: "gradient",
    icon: Crown,
  },
  pro: {
    title: "Pro",
    description: "Saca el máximo provecho con todas las funcionalidades.",
    style: "border border-primary bg-primary/5 animate-pulse-glow",
    buttonLabel: "Actualizar plan",
    buttonVariant: "outline",
    icon: RotateCw,
  },
}

export const BillingCard = ({
  plan,
}:BillingCardProps ):React.ReactElement => {

  const Icon = billingCardConfig[plan].icon;

  return (
    <div className={merge('flex flex-1 flex-row items-center justify-between py-6 px-4 rounded-lg',billingCardConfig[plan].style)}>

      <div className='flex flex-col items-start justify-start '>
        <h2 className='font-heading font-semibold text-2xl text-gray-900'>{billingCardConfig[plan].title}</h2>
        <p className='font-medium text-lg text-gray-500'>{billingCardConfig[plan].description}</p>
      </div>

      <Button
        size={"lg"}
        variant={billingCardConfig[plan].buttonVariant as Variant}
      >
        {billingCardConfig[plan].buttonLabel}
        <Icon/>
      </Button>

    </div>
  )
}
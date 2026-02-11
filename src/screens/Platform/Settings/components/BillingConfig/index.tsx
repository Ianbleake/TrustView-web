import React from 'react'
import { SettingsCard } from '../SettingsCard'
import { CreditCard, Receipt } from 'lucide-react'
import { BillingInfo } from './BillingInfo'
import { PaymentMethods } from './PaymentMethods'

export const BillingConfig = ():React.ReactElement => {
  return (
    <section className="flex flex-col gap-4">

      <SettingsCard
        icon={Receipt}
        title="Plan actual"
        description="Tu suscripción y uso"
      >
        <BillingInfo/>
      </SettingsCard>

      <SettingsCard
        icon={CreditCard}
        title="Método de pago"
        description="Tarjeta asociada a tu cuenta"
      >
        <PaymentMethods/>
      </SettingsCard>
      
    </section>
  )
}
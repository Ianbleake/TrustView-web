import React from 'react'
import { BillFeature } from './BillFeature'

type BillingFeaturesProps = {
  plan: Billing;
}

export const BillingFeatures = ({
  plan,
}:BillingFeaturesProps ):React.ReactElement => {
  return (
    <div className='grid grid-cols-2 gap-4'>

      <BillFeature name='Muestra y oculta reseñas'/>
      <BillFeature isLocked={plan === "pro" ? false : true} name='Reseñas ilimitadas'/>
      <BillFeature name='Crea reseñas manualmente'/>
      <BillFeature isLocked={plan === "pro" ? false : true} name='Personalizar widget'/>
      <BillFeature isLocked={plan === "pro" ? false : true} name='Auto aprovacion de reseñas'/>
      <BillFeature isLocked={plan === "pro" ? false : true} name='Importacion masiva de reseñas'/>

    </div>
  )
}
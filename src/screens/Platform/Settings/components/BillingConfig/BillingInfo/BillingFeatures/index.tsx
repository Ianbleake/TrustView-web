import React from 'react'
import { BillFeature } from './BillFeature'

export const BillingFeatures = ():React.ReactElement => {
  return (
    <div className='grid grid-cols-2 gap-4'>

      <BillFeature name='Muestra y oculta reseñas'/>
      <BillFeature isLocked name='Importacion masiva de reseñas'/>
      <BillFeature name='Crea reseñas manualmente'/>
      <BillFeature isLocked name='Reseñas ilimitadas'/>
      <BillFeature isLocked name='Auto aprovacion de reseñas'/>
      <BillFeature isLocked name='Personalizar widget'/>

    </div>
  )
}
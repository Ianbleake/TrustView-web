import React from 'react'
import { PaymentMethod } from './PaymentMethod'

export const PaymentMethods = ():React.ReactElement => {
  return (
    <div className='flex flex-col items-center px-4' >
      <PaymentMethod/>
    </div>
  )
}
import React from 'react'
import { Outlet } from 'react-router-dom'

export const CheckoutLayout = ():React.ReactElement => {
  return (
    <div>
      <Outlet />
    </div>
  )
}
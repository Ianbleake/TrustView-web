import { AuthBranding } from '@/components/AuthLayout/components/AuthBranding'
import React from 'react'
import { RegisterPage } from './RegisterPage'

export const Register = ():React.ReactElement => {
  return (
    <div className='flex flex-row w-screen h-screen'>
      <AuthBranding/>

      <RegisterPage/>
    </div>
  )
}
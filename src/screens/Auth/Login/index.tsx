import { AuthBranding } from '@/components/AuthLayout/components/AuthBranding'
import React from 'react'
import { LoginPage } from './LoginPage'

export const Login = ():React.ReactElement => {
  return (
    <div className='flex flex-row w-screen h-screen'>
      <AuthBranding/>

      <LoginPage/>
    </div>
  )
}
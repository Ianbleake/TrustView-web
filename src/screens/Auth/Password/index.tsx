import { AuthBranding } from '@/components/AuthLayout/components/AuthBranding'
import React from 'react'
import { PasswordPage } from './PasswordPage'

export const Password = ():React.ReactElement => {
  return (
    <div className='flex flex-row w-screen h-screen'>
      <AuthBranding/>

      <PasswordPage/>
    </div>
  )
}
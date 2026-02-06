import { AuthNavigator } from '@/components/AuthLayout/components/AuthNavigator'
import React from 'react'
import { PasswordForm } from './PasswordForm'

export const PasswordPage = ():React.ReactElement => {
  return (
    <div className='w-1/2 flex items-center justify-center'>

      <AuthNavigator label='¿Recordaste tu contraseña?' navLabel='Iniciá sesión' to='/auth'/>

      <PasswordForm/>

    </div>
  )
}
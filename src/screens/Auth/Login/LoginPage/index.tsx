import { AuthNavigator } from '@/components/AuthLayout/components/AuthNavigator'
import React from 'react'
import { LoginForm } from './LoginForm'

export const LoginPage = ():React.ReactElement => {
  return (
    <div className='w-1/2 flex items-center justify-center'>

      <AuthNavigator label='¿No tenés cuenta?' navLabel='Registrate' to='/auth/register'/>

      <LoginForm/>

    </div>
  )
}
import { AuthNavigator } from '@/components/AuthLayout/components/AuthNavigator'
import React from 'react'
import { RegisterForm } from './RegisterForm'

export const RegisterPage = ():React.ReactElement => {
  return (
    <div className='w-1/2 flex items-center justify-center'>

      <AuthNavigator label='¿Ya tenés cuenta?' navLabel='Iniciá sesión' to='/auth'/>

      <RegisterForm/>

    </div>
  )
}
import { Brand } from '@/components/Brand'
import React from 'react'
import { NavMenu } from './components/NavMenu'
import SignInButton from './components/SignInButton'

export const Header = ():React.ReactElement => {
  return (
    <div className='flex flex-row items-center justify-between bg-gray-100/30 opacity-80 w-screen border-b border-gray-200 shadow-md p-3'>
      <Brand/>

      <NavMenu/>

      <SignInButton/>
    </div>
  )
}
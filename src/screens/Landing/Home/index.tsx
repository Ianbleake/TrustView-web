import React from 'react'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { CTA } from './components/CTA'

export const Home = ():React.ReactElement => {
  return (
    <div className='flex flex-col'>
      <Hero/>
      <Features/>
      <Pricing/>
      <Testimonials/>
      <CTA/>
    </div>
  )
}
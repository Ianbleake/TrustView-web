import React from 'react'

export const BackGlow = ():React.ReactElement => {
  return (
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-bl from-amber-500/20 to-transparent rounded-bl-full animate-float" />
  )
}
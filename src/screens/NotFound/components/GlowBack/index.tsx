import React from 'react'

export const GlowBack = ():React.ReactElement => {
  return (
        <div>
            <div
                className="
                    pointer-events-none absolute inset-0
                    bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.35),transparent_70%)]
                    opacity-60
                "
            />
            <div
                className="
                    pointer-events-none absolute inset-0
                    bg-[radial-gradient(circle,rgba(251,191,36,0.25)_1px,transparent_1px)]
                    bg-position-[16px_16px]
                    opacity-[0.03]
                "
            />
        </div>
  )
}
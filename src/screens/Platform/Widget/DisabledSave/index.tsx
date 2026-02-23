import { Button } from '@/components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Crown, Save } from 'lucide-react'
import React from 'react'

export const DisabledSave = ():React.ReactElement => {
  return (
    <HoverCard openDelay={100} closeDelay={100}>

      <HoverCardTrigger className='cursor-pointer'>
        <Button
          variant={"gradient"}
          className="flex items-center gap-3 min-w-45"
          size={"sm"}
          disabled
        >
          Guardar Cambios
          <Save/>
        </Button>
      </HoverCardTrigger>

      <HoverCardContent side="left" className="w-64">
        <div className="flex flex-col gap-3">

          <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full gradient-bg text-white">
              <Crown className="h-6 w-6" />
            </div>

            <h4 className="font-semibold text-sm leading-snug">
              Dale tu propio estilo con Pro
            </h4>
          </div>

        </div>
      </HoverCardContent>


    </HoverCard>
  )
}
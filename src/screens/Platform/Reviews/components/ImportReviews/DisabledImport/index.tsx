import React from 'react'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Crown, Import } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const DisabledImport = ():React.ReactElement => {
  return (
    <HoverCard openDelay={100} closeDelay={100}>

      <HoverCardTrigger className='cursor-pointer'>
        <Button
          variant={"gradient"}
          className='rounded-full'
          size={"icon-lg"}
          disabled
        >
          <Import/>
        </Button>
      </HoverCardTrigger>

      <HoverCardContent side="left" className="w-64">
        <div className="flex flex-col gap-3">

          <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full gradient-bg text-white">
              <Crown className="h-6 w-6" />
            </div>

            <h4 className="font-semibold text-sm leading-snug">
              Importación masiva disponible en Pro
            </h4>
          </div>

        </div>
      </HoverCardContent>


    </HoverCard>
  )
}
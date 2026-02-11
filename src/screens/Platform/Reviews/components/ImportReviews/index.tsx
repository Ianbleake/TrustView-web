import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Crown, Import } from 'lucide-react';
import React, { useState } from 'react'
import { ImportForm } from './ImportForm';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';

type ImportReviewsProps = {
  disabled?: boolean;
}

export const ImportReviews = ({
  disabled = false
}:ImportReviewsProps ):React.ReactElement => {

  const [ open, setOpen ] = useState(false);

  if(disabled){
    return(
      <HoverCard openDelay={100} closeDelay={100}>

        <HoverCardTrigger className='cursor-pointer'>
          <Button
            variant={"gradient"}
            className='rounded-full'
            size={"icon-lg"}
            onClick={()=>setOpen(true)}
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
  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <Button
        variant={"gradient"}
        className='rounded-full'
        size={"icon-lg"}
        onClick={()=>setOpen(true)}
      >
        <Import/>
      </Button>

      <DialogContent>

        <DialogHeader>
          <DialogTitle>Importar reseñas</DialogTitle>
          <DialogDescription>
            Tienes reseñas pendientes ? aqui puedes importarlas con un solo click.
          </DialogDescription>
        </DialogHeader>

        <ImportForm onClose={() => setOpen(false)}/>

      </DialogContent>

    </Dialog>
  )
}
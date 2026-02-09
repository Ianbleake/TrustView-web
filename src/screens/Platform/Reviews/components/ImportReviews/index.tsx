import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Import } from 'lucide-react';
import React, { useState } from 'react'
import { ImportForm } from './ImportForm';

export const ImportReviews = ():React.ReactElement => {

  const [ open, setOpen ] = useState(false);
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
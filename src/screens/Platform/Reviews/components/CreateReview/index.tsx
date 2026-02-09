import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import React, { useState } from 'react'
import { NewReviewForm } from './NewReviewForm';

export const CreateReview = ():React.ReactElement => {

  const [ open, setOpen ] = useState(false);
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <Button
        variant={"gradient"}
        className='rounded-full'
        size={"icon-lg"}
        onClick={()=>setOpen(true)}
      >
        <Plus/>
      </Button>

      <DialogContent>

        <DialogHeader>
          <DialogTitle>Crear una nueva reseña</DialogTitle>
          <DialogDescription>
            Añade manualmente una reseña para tus productos.
          </DialogDescription>
        </DialogHeader>

        <NewReviewForm onClose={() => setOpen(false)}/>

      </DialogContent>
      
    </Dialog>
  )
}
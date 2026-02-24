import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Pencil } from 'lucide-react'


import React, { useState } from 'react'
import { AvatarEditForm } from './AvatarEditForm'
import { BannerEditForm } from './BannerEditForm'

export const EditMedia = ():React.ReactElement => {

  const [ open, setOpen ] = useState<boolean>(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <DialogTrigger>
          <div className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-white shadow-xl flex items-center justify-center cursor-pointer hover:bg-gray-100/90 hover:scale-105 transition-all duration-300">
            <Pencil
              className="text-gray-600"
              size={20}
            />
          </div>
      </DialogTrigger>

      <DialogContent>

        <DialogHeader>
            <h2 className="text-xl font-heading font-bold">Editar medios</h2>
        </DialogHeader>

        <Tabs defaultValue='avatar'>

          <TabsList className="bg-gray-200/50 w-full md:w-2/3 h-auto grid grid-cols-2 gap-2 md:flex shadow-sm">
            <TabsTrigger className="cursor-pointer shadow-inner flex flex-row items-center justify-center gap-3 data-[state=active]:shadow-amber-500 data-[state=active]:text-amber-600" value='avatar'>
              Avatar
            </TabsTrigger>

            <TabsTrigger className="cursor-pointer shadow-inner flex flex-row items-center justify-center gap-3 data-[state=active]:shadow-amber-500 data-[state=active]:text-amber-600" value='profileBanner'>
              Banner
            </TabsTrigger>
          </TabsList>

          <TabsContent value="avatar">
            <AvatarEditForm onClose={()=>setOpen(false)}/>
          </TabsContent>

          <TabsContent value="profileBanner">
            <BannerEditForm/>
          </TabsContent>


        </Tabs>

      </DialogContent>

      
    </Dialog>
  )
}
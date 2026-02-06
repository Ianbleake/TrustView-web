import React, { useState } from 'react'
import { Card } from '@/components/ui/card'
import { useForm } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { ArrowRight, Eye, EyeClosed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { useNavigate } from 'react-router-dom';

type RegisterValues = {
  storeName: string;
  email: string;
  password: string;
}

export const RegisterForm = ():React.ReactElement => {

  const [ showPass, setShowPass ] = useState<boolean>(false);
  const [ isLoading, setLoading ] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<RegisterValues>({
    defaultValues: {
      storeName: '',
      email: '',
      password: '',
    }
  });

  const navigate = useNavigate();

  const onSubmit = (data: RegisterValues): void => {
    setLoading(true);
    setTimeout(() => {
      console.log(data);
      setLoading(false);
      navigate("/platform");
    }, 3000);
  };
  

  return (
    <Card className='flex flex-col py-6 px-8 min-w-md'>

      <div className='flex flex-col gap-2'>
        <h2 className='font-semibold text-2xl text-gray-800'>Crear cuenta</h2>
        <span className='font-normal text-md text-gray-500' >Registrate para empezar a usar TrustView</span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>

        <div className="flex flex-col gap-2">
          <Label htmlFor="storeName">Nombre de la tienda</Label>
          <Input
            id="storeName"
            type="storeName"
            placeholder="tu@email.com"
            {...register("storeName", {
              required: "El Nombre de la tienda es obligatorio",
            })}
          />
          { errors.storeName && ( <span className='text-sm font-normal text-red-500'>{errors.storeName.message}</span> )}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="tu@email.com"
            {...register("email", {
              required: "El email es obligatorio",
            })}
          />
          { errors.email && ( <span className='text-sm font-normal text-red-500'>{errors.email.message}</span> )}
        </div>

        <div className='flex flex-col gap-2'>
          <Label>Contraseña</Label>
          <div className='relative'>
            <Input
              id="password"
              className='select-none'
              placeholder={ showPass ? "Contraseña" : "••••••••"}
              type={ showPass ? "text" : "password"}
              {...register("password", {
                required: "El password es obligatorio",
              })}
            />
            <div className='absolute right-2 top-2 cursor-pointer transition-all' onClick={()=>setShowPass(!showPass)}>
              { 
                showPass ? (
                  <Eye className='text-amber-500/50'/>
                ) : (
                  <EyeClosed className='text-amber-500/50'/>
                )
              }
            </div>
          </div>
          { errors.password && ( <span className='text-sm font-normal text-red-500'>{errors.password.message}</span> )}
        </div>

        <Button
          variant={"gradient"}
          type="submit"
          className='select-none'
        >
          {
            isLoading ? (
              <Spinner className="size-6" />
            ) : (
              <>
                Crear cuenta
                <ArrowRight/>
              </>
            )
          }
        </Button>
        
      </form>
    </Card>
  )
}
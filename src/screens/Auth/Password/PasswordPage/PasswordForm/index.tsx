import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { ArrowRight } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

type PasswordValues = {
  email: string;
}

export const PasswordForm = ():React.ReactElement => {

  const [ isLoading, setLoading ] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors } } = useForm<PasswordValues>({
    defaultValues: {
      email: '',
    }
  })
  
  const navigate = useNavigate();

  const onSubmit = ( data:PasswordValues ):void => {
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
        <h2 className='font-semibold text-2xl text-gray-800'>Olvidaste tu contraseña?</h2>
        <span className='font-normal text-md text-gray-500' >Ingresá a tu email para continuar</span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>

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
                Iniciar sesión
                <ArrowRight/>
              </>
            )
          }
        </Button>

      </form>
      
    </Card>
  )
}
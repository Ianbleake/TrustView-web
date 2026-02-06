import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

import { ArrowRight, Eye, EyeClosed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { Link, useNavigate } from 'react-router-dom';

type LoginValues = {
  email: string;
  password: string;
}

export const LoginForm = ():React.ReactElement => {

  const [ showPass, setShowPass ] = useState<boolean>(false);
  const [ isLoading, setLoading ] = useState<boolean>(false);
  const { register, handleSubmit, formState:{ errors } } = useForm<LoginValues>({
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const navigate = useNavigate();

  const onSubmit = ( data:LoginValues ):void => {
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
        <h2 className='font-semibold text-2xl text-gray-800'>Bienvenido de vuelta</h2>
        <span className='font-normal text-md text-gray-500' >Ingresá a tu cuenta para continuar</span>
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


        <div className='flex flex-col gap-2'>
          <Label>Contraseña</Label>
          <div className='relative'>
            <Input
              id="password"
              className=''
              placeholder="••••••••"
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
                Iniciar sesión
                <ArrowRight/>
              </>
            )
          }
        </Button>
        <Link
          to={"/auth/forgot-password"}
          className='text-sm text-right text-amber-600'
        >
          Olvidaste tu Contraseña?
        </Link>
      </form>
    </Card>
  )
}
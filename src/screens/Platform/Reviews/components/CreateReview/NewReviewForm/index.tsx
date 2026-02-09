import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Eye, PackageSearch, Star, TextAlignJustify, User } from 'lucide-react';
import { Calendar as DayPicker } from "@/components/ui/calendar"

import React from 'react';
import { useForm, Controller } from 'react-hook-form';

type NewReviewValues = Omit<Review, "id"> & {
  productId: string;
};

type NewReviewFormProps = {
  onClose: () => void;
};

export const NewReviewForm = ({
  onClose,
}: NewReviewFormProps): React.ReactElement => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<NewReviewValues>({
    defaultValues: {
      author: '',
      rating: 1,
      content: '',
      product: '',
      productId: '',
      status: 'pending',
      date: ''
    }
  });

  const onSubmit = (data: NewReviewValues): void => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2 gap-4'>

      
      <div className='flex flex-col items-start gap-2'>
        <Label>Autor:</Label>
        <div className='relative'>
          <Input
            className='pl-10 w-52'
            {...register('author', { required: true })}
          />
          <User className='absolute top-2 left-2 text-orange-600 h-5 w-5'/>
        </div>
        {errors.author && <span className='text-red-500 text-sm'>Este campo es obligatorio</span>}
      </div>

      
      <div className='flex flex-col items-start gap-2'>
        <Label>Rating:</Label>
        <Controller
          control={control}
          name="rating"
          rules={{ required: true }}
          render={({ field }) => (
            <Select onValueChange={val => field.onChange(Number(val))} value={String(field.value) || undefined}>
              <SelectTrigger className="w-full max-w-52 pl-10 relative">
                <Star className="absolute left-2 top-2 h-5 w-5 text-orange-600" />
                <SelectValue placeholder="Selecciona un rating" />
              </SelectTrigger>

              <SelectContent>
                {[1,2,3,4,5].map(n => (
                  <SelectItem key={n} value={String(n)}>
                    {Array.from({ length: n }).map((_, i) => (
                      <Star key={i} className='fill-yellow-300 text-yellow-500 inline'/>
                    ))}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
        {errors.rating && <span className='text-red-500 text-sm'>Selecciona un rating</span>}
      </div>

      
      <div className='flex flex-col items-start gap-2'>
        <Label>ID del producto:</Label>
        <div className='relative'>
          <Input
            className='pl-10 w-52'
            {...register('productId', { required: true })}
          />
          <PackageSearch className='absolute top-2 left-2 text-orange-600 h-5 w-5'/>
        </div>
        {errors.productId && <span className='text-red-500 text-sm'>Este campo es obligatorio</span>}
      </div>

      
      <div className='flex flex-col items-start gap-2'>
        <Label>Nombre del producto:</Label>
        <div className='relative'>
          <Input
            className='pl-10 w-52'
            {...register('product', { required: true })}
          />
          <PackageSearch className='absolute top-2 left-2 text-orange-600 h-5 w-5'/>
        </div>
        {errors.product && <span className='text-red-500 text-sm'>Este campo es obligatorio</span>}
      </div>

      
      <div className='flex flex-col items-start gap-2'>
        <Label>Estado:</Label>
        <Controller
          control={control}
          name="status"
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger className="w-full max-w-52 pl-10 relative">
                <Eye className="absolute left-2 top-2 h-7 w-7 text-orange-600" />
                <SelectValue placeholder="Selecciona un estado" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value='approved'>Aprobada</SelectItem>
                <SelectItem value='pending'>Pendiente</SelectItem>
                <SelectItem value='rejected'>Rechazada</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      
      <div className='flex flex-col items-start gap-2'>
        <Label>Fecha:</Label>
        <Controller
          control={control}
          name="date"
          render={({ field }) => (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="pl-10 w-52 relative text-left font-normal"
                >
                  <Calendar className="absolute left-2 top-2 h-5 w-5 text-orange-600" />
                  {field.value
                    ? new Date(field.value).toLocaleDateString()
                    : "Selecciona fecha"}
                </Button>
              </PopoverTrigger>

              <PopoverContent className="p-0" align="start">
                <DayPicker
                  mode="single"
                  selected={field.value ? new Date(field.value) : undefined}
                  onSelect={(date) =>
                    field.onChange(date ? date.toISOString() : '')
                  }
                  
                />
              </PopoverContent>
            </Popover>
          )}
        />

      </div>

      
      <div className='flex flex-col col-span-2 gap-2'>
        <Label>Reseña:</Label>
        <div className='relative'>
          <Textarea
            className='relative flex-1 pl-12 max-w-md'
            {...register('content', { required: true })}
          />
          <TextAlignJustify className='absolute top-2 left-2 text-orange-600'/>
        </div>
        {errors.content && <span className='text-red-500 text-sm'>La reseña es obligatoria</span>}
      </div>

      
      <div className='flex flex-row items-center justify-end gap-2 col-span-2 border-t border-gray-200 pt-4'>
        <Button
          variant={"secondary"}
          onClick={onClose}
        >
          Cancelar
        </Button>
        <Button type="submit">
          Crear
        </Button>
      </div>

    </form>
  );
};

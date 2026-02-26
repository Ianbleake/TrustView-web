import React from 'react';
import formatDate from '@/utils/formatDate';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { Textarea } from '@/components/ui/textarea';
import { useForm, Controller } from 'react-hook-form';
import { useSessionStorage } from '@/storage/authStorage';
import useCreateReview from '@/hooks/reviews/useCreateReview';
import { Ban, Calendar, Eye, Link, PackageSearch, Save, Star, TextAlignJustify, User } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type NewReviewValues = {
  author: string;
  rating: number;
  content: string;
  productId: string;
  product: string;
  status: ReviewState;
  productUrl: string;
};

type NewReviewFormProps = {
  onClose: () => void;
};

export const NewReviewForm = ({
  onClose,
}: NewReviewFormProps): React.ReactElement => {

  const { store } = useSessionStorage();
  const { mutate:createReview, isPending } = useCreateReview();

  const creationDate = new Date();
  
  const { register, handleSubmit, control, formState: { errors } } = useForm<NewReviewValues>({
    defaultValues: {
      author: '',
      rating: 1,
      content: '',
      product: '',
      productId: '',
      status: "pending",
      productUrl: '',
    }
  });

  const onSubmit = (data: NewReviewValues): void => {

    const formattedData:NewReviewPayload = {
      store_id: store?.id,
      product_id: data.productId,
      product_name: data.product,
      author_name: data.author,
      rating: data.rating,
      approved: data.status === "approved" ? true : data.status === "rejected" ? false : null,
      content: data.content,
      image_url: null,
      product_url: data.productUrl,
      tienda_nube_user_id: store?.tienda_nube_user_id || ""
    }

    createReview(formattedData, {
      onSuccess: () => {
        onClose();
      }
    })

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

      <div className='flex flex-col col-span-2 gap-2'>
          <Label>Url producto:</Label>
          <div className='relative'>
            <Input
              className='pl-10 w-md'
              {
                ...register("productUrl")
              }
            />
            <Link className='absolute top-2 left-2 text-orange-600 h-5 w-5' />
          </div>
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
                <SelectItem value={"approved"}>Aprobada</SelectItem>
                <SelectItem value={"pending"}>Pendiente</SelectItem>
                <SelectItem value={"rejected"}>Rechazada</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
      </div>

      
      <div className='flex flex-col items-start gap-2'>
        <Label>Fecha:</Label>
        <Button
          variant="outline"
          className="pl-10 w-52 relative text-left font-normal select-none"
          disabled
        >
          <Calendar className="absolute left-2 top-2 h-5 w-5 text-orange-600" />
          { formatDate(creationDate,true) }
        </Button>
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
          <Ban/>
        </Button>
        <Button
         type="submit"
         disabled={isPending}
         className='min-w-24'
        >
          {
            isPending ? (
              <Spinner/>
            ) : (
              <>
                Crear
                <Save/>
              </>
            )
          }
        </Button>
      </div>

    </form>
  );
};

import { Button } from '@/components/ui/button';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ImportDropzone } from './ImportDropzone';
import { Ban, Download, Import } from 'lucide-react';
import { handleDownloadTemplate } from '@/utils/handleDownloadTemplate';
import { useSessionStorage } from '@/storage/authStorage';
import useImportReviews from '@/hooks/reviews/useImportReviews';
import { Spinner } from '@/components/ui/spinner';


type ImportFormValues = {
  file: File | null;
};

type ImportFormProps = {
  onClose: () => void;
};

export const ImportForm = ({
  onClose,
}: ImportFormProps): React.ReactElement => {

  const { store } = useSessionStorage();

  const { handleSubmit, control, formState: { errors } } = useForm<ImportFormValues>({
    defaultValues: {
      file: null,
    },
  });

  const { mutate: importReviews, isPending } = useImportReviews();

  const onSubmit = (data: ImportFormValues): void => {

    const importPayload = {
      file: data.file as File,
      store_id: store?.id || "",
    }

    importReviews(importPayload,{
      onSuccess: () => {
        onClose();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">

      <Controller
        name="file"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <div className="col-span-2">
            <ImportDropzone
              value={field.value}
              onChange={field.onChange}
              error={!!errors.file}
            />

            {errors.file && (
              <span className="text-sm text-red-500 mt-2 block">
                Debes subir un archivo
              </span>
            )}
          </div>
        )}
      />

      <div className="flex flex-row items-center justify-between gap-2 col-span-2 border-t border-gray-200 pt-4">

        <Button
          variant={"link"}
          type="button"
          onClick={handleDownloadTemplate}
        >
          Descargar plantilla
          <Download/>
        </Button>


        <div className='flex flex-row items-center justify-end gap-2'>
          <Button
            variant="secondary"
            type="button"
            onClick={onClose}
          >
            Cancelar
            <Ban/>
          </Button>
          <Button
           type="submit"
           variant={"default"}
            disabled={isPending}
            className='min-w-24'
          >
            {
              isPending ? (
                <Spinner/>
              ) : (
                <>
                  Importar
                  <Import/>
                </>
              )
            }
          </Button>
        </div>
      </div>
    </form>
  );
};

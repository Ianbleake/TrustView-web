import { Button } from '@/components/ui/button';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { ImportDropzone } from './ImportDropzone';
import { Ban, Download, Import } from 'lucide-react';


type ImportFormValues = {
  file: File | null;
};

type ImportFormProps = {
  onClose: () => void;
};

export const ImportForm = ({
  onClose,
}: ImportFormProps): React.ReactElement => {

  const { handleSubmit, control, formState: { errors } } = useForm<ImportFormValues>({
    defaultValues: {
      file: null,
    },
  });

  const onSubmit = (data: ImportFormValues): void => {
    console.log('Archivo:', data.file);
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
          <Button type="submit">
            Importar
            <Import/>
          </Button>
        </div>
      </div>
    </form>
  );
};

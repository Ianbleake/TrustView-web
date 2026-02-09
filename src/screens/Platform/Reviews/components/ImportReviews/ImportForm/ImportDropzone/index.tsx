import { UploadCloud, FileSpreadsheet } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

type ImportDropzoneProps = {
  value: File | null;
  onChange: (file: File | null) => void;
  error?: boolean;
};

export const ImportDropzone = ({
  value,
  onChange,
  error,
}: ImportDropzoneProps): React.ReactElement => {

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.ms-excel': ['.xls'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
    },
    onDrop: (files) => {
      onChange(files[0] ?? null);
    },
  });

  const isActive = isDragActive || Boolean(value);


  return (
    <div
      {...getRootProps()}
      className={`
        border-2 border-dashed rounded-lg p-8
        flex flex-col items-center justify-center gap-3
        cursor-pointer
        transition-all duration-300
        hover:bg-orange-50
        ${isActive ? 'border-orange-500 bg-orange-50' : 'border-gray-300'}
        ${error ? 'border-red-500' : ''}
      `}
    >
      <input {...getInputProps()} />

      {value ? (
        <>
          <FileSpreadsheet className="h-10 w-10 text-orange-600" />
          <p className="text-sm font-medium">{value.name}</p>
          <p className="text-xs text-gray-500">
            {(value.size / 1024).toFixed(2)} KB
          </p>
        </>
      ) : (
        <>
          <UploadCloud className="h-10 w-10 text-orange-600" />
          <p className="text-sm font-medium">
            Arrastra tu archivo aquí o haz click
          </p>
          <p className="text-xs text-gray-500">
            CSV o Excel (.csv, .xls, .xlsx)
          </p>
        </>
      )}
    </div>
  );
};

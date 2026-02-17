import { importReviews } from "@/services/reviews/importReviews";
import { useReviewStorage } from "@/storage/reviewStorage";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useImportReviews():UseMutationResult<ImportResponse, AppError, ImportPayload>{

  const { addReviews } = useReviewStorage(); 
  
  const importMutation = useMutation<ImportResponse,AppError,ImportPayload>({
    mutationKey: ["importReviews"],
    mutationFn: importReviews,
    onSuccess: (importedReviews:ImportResponse) => {
      console.log("imported reviews response:",importedReviews);
      addReviews(importedReviews.data.inserted.reviews)
      toast.success(`${importedReviews.data.inserted.count} reseñas importadas exitosamente!`);
    },
    onError: (error:AppError) => {
      {
        //TODO: Mostrar errorres especificos, si hubo productos que no se pudieron importar, que retorne un archivo solo con los productos que se tienen que volver a importar, o si hubo errores de formato en el archivo, etc. 
      }
      toast.error(`Error al importar reseñas, por favor intenta de nuevo:${error.message}`);
    }
  });

return importMutation;
}
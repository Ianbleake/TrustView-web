import { importReviews } from "@/services/reviews/importReviews";
import { useSessionStorage } from "@/storage/authStorage";
import { useMutation, useQueryClient, type UseMutationResult } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useImportReviews():UseMutationResult<ImportResponse, AppError, ImportPayload>{

  const queryClient = useQueryClient();
  const { store } = useSessionStorage();
  
  const importMutation = useMutation<ImportResponse,AppError,ImportPayload>({
    mutationKey: ["importReviews"],
    mutationFn: importReviews,
    onSuccess: (response) => {
      queryClient.setQueryData<GetReviewsResponse>(
        ["reviews", store?.id],
        (old) => {
          if (!old) return old;

          const existing = new Map(
            old.data.map(r => [r.id, r])
          );

          response.data.inserted.reviews.forEach(r => {
            existing.set(r.id, r);
          });

          return {
            ...old,
            data: Array.from(existing.values()),
          };
        }
      );

      toast.success(
        `${response.data.inserted.count} reseñas importadas exitosamente`
      );
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
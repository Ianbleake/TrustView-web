import { importReviews } from "@/services/reviews/importReviews";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useImportReviews():UseMutationResult<ImportResponse, AppError, ImportPayload>{
  
  const importMutation = useMutation<ImportResponse,AppError,ImportPayload>({
    mutationKey: ["importReviews"],
    mutationFn: importReviews,
    onSuccess: (importedReviews:ImportResponse) => {
      toast.success("Reseñas importadas exitosamente");
      console.log("Reseñas importadas:", importedReviews);
    },
    onError: (error:AppError) => {
      toast.error("Error al importar reseñas, por favor intenta de nuevo");
      console.error("Error al importar reseñas:", error);
    }
  });

return importMutation;
}
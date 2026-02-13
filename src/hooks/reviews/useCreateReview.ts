import { createReview } from "@/services/reviews/createReview";
import { useReviewStorage } from "@/storage/reviewStorage";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useCreateReview():UseMutationResult<NewReviewResponse, AppError, NewReviewPayload, unknown> {

  const { addReview } = useReviewStorage();

  const createReviewMutation = useMutation<NewReviewResponse,AppError,NewReviewPayload>({
    mutationKey: ["createReview"],
    mutationFn: createReview,
    onSuccess: (newReview:NewReviewResponse) => {
      addReview(newReview.data);
      toast.success("Reseña creada con exito");
    },
    onError: (error:AppError) => {
      toast.error(error.message || "Error al crear la reseña");
    }
  });

  return createReviewMutation; 
}
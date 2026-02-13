import { approbeReview } from "@/services/reviews/approbeReview";
import { useReviewStorage } from "@/storage/reviewStorage";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useApprobeReview(): UseMutationResult<approbeReviewResponse, AppError, approbeReviewPayload>{

  const { updateReview } = useReviewStorage();

  const approbeReviewMutation = useMutation<approbeReviewResponse, AppError, approbeReviewPayload>({
    mutationKey: ["approbeReview"],
    mutationFn: approbeReview,
    onSuccess: (updatedReview:approbeReviewResponse) => {
      updateReview(updatedReview.data);
      toast.success("Reseña aprobada correctamente");
    },
    onError: (error: AppError) => {
      toast.error(error.message || "Error al aprobar la reseña");
    }
  })

  return approbeReviewMutation;
}
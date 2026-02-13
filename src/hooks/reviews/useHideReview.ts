
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { hideReview } from "@/services/reviews/hideReview";
import { useReviewStorage } from "@/storage/reviewStorage";
import { toast } from "sonner";

export default function useHideReview():UseMutationResult<approbeReviewResponse, AppError, approbeReviewPayload>{

  const { updateReview } = useReviewStorage();

  const hideReviewMutation = useMutation<hideReviewResponse,AppError,hideReviewPayload>({
    mutationKey: ["hideReview"],
    mutationFn: hideReview,
    onSuccess: (updatedReview:hideReviewResponse) => {
      updateReview(updatedReview.data);
      toast.success("Reseña aprobada correctamente");
    },
    onError: (error: AppError) => {
      toast.error(error.message || "Error al aprobar la reseña");
    }
  })

  return hideReviewMutation;
}
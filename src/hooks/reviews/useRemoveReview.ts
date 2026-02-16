import { removeReview } from "@/services/reviews/removeReview";
import { useReviewStorage } from "@/storage/reviewStorage";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useRemoveReview(): UseMutationResult<RemoveReviewResponse,AppError,string> {
  
  const { deleteReview } = useReviewStorage();

  const removeReviewMutation = useMutation<RemoveReviewResponse,AppError,string>({
    mutationKey: ["removeReview"],
    mutationFn: removeReview,
    onSuccess: (removedReview) => {
      toast.success("Reseña eliminada correctamente");
      deleteReview(removedReview.data.id);
    },
    onError: () => {
      toast.error("Error al eliminar la reseña");
    },
  });

  return removeReviewMutation;
}

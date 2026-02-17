import { removeReview } from "@/services/reviews/removeReview";
import { useSessionStorage } from "@/storage/authStorage";
import { useMutation, useQueryClient, type UseMutationResult } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useRemoveReview(): UseMutationResult<RemoveReviewResponse,AppError,string> {
  
  const queryClient = useQueryClient();
  const { store } = useSessionStorage();

  const removeReviewMutation = useMutation<RemoveReviewResponse,AppError,string>({
    mutationKey: ["removeReview"],
    mutationFn: removeReview,
    onSuccess: (removedReview) => {
      
      queryClient.setQueryData<GetReviewsResponse>(
        ["reviews","all", store?.id],
        (old) => {
          if (!old) return old;

          return {
            ...old,
            data: old.data.filter(
              r => r.id !== removedReview.data.id
            ),
          };
        }
      );

      toast.success("Reseña eliminada correctamente");
    },
    onError: () => {
      toast.error("Error al eliminar la reseña");
    },
  });

  return removeReviewMutation;
}

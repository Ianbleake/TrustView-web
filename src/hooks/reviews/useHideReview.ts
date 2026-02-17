
import { useMutation, useQueryClient, type UseMutationResult } from "@tanstack/react-query";
import { hideReview } from "@/services/reviews/hideReview";
import { toast } from "sonner";
import { useSessionStorage } from "@/storage/authStorage";

export default function useHideReview():UseMutationResult<approbeReviewResponse, AppError, approbeReviewPayload>{

  const queryClient = useQueryClient();
  const { store } = useSessionStorage();

  const hideReviewMutation = useMutation<hideReviewResponse,AppError,hideReviewPayload>({
    mutationKey: ["hideReview"],
    mutationFn: hideReview,
    onSuccess: (updatedReview) => {
      queryClient.setQueryData<GetReviewsResponse>(
        ["reviews", store?.id],
        (old) => {
          if (!old) return old;
    
          return {
            ...old,
            data: old.data.map((r) =>
              r.id === updatedReview.data.id
                ? { ...r, ...updatedReview.data }
                : r
            ),
          };
        }
      );
    
      toast.success("Reseña actualizada correctamente");
    },    
    onError: (error: AppError) => {
      toast.error(error.message || "Error al aprobar la reseña");
    }
  })

  return hideReviewMutation;
}
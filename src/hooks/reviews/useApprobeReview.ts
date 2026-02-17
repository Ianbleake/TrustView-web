import { approbeReview } from "@/services/reviews/approbeReview";
import { useSessionStorage } from "@/storage/authStorage";
import { useMutation, useQueryClient, type UseMutationResult } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useApprobeReview(): UseMutationResult<approbeReviewResponse, AppError, approbeReviewPayload>{

  const queryClient = useQueryClient();
  const { store } = useSessionStorage();

  const approbeReviewMutation = useMutation<approbeReviewResponse, AppError, approbeReviewPayload>({
    mutationKey: ["approbeReview"],
    mutationFn: approbeReview,
    onSuccess: (updatedReview) => {
      queryClient.setQueryData<GetReviewsResponse>(
        ["reviews","all", store?.id],
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
    
      toast.success("Reseña aprobada correctamente");
    },    
    onError: (error: AppError) => {
      toast.error(error.message || "Error al aprobar la reseña");
    }
  })

  return approbeReviewMutation;
}
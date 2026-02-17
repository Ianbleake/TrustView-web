import { createReview } from "@/services/reviews/createReview";
import { useSessionStorage } from "@/storage/authStorage";
import { useMutation, useQueryClient, type UseMutationResult } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useCreateReview():UseMutationResult<NewReviewResponse, AppError, NewReviewPayload, unknown> {

  const queryClient = useQueryClient();
  const { store } = useSessionStorage();

  const createReviewMutation = useMutation<NewReviewResponse,AppError,NewReviewPayload>({
    mutationKey: ["createReview"],
    mutationFn: createReview,
    onSuccess: (response) => {
      queryClient.setQueryData<GetReviewsResponse>(
        ["reviews", store?.id],
        (old) => {
          if (!old) return old;

          return {
            ...old,
            data: [response.data, ...old.data],
          };
        }
      );

      toast.success("Reseña creada con éxito");
    },
    onError: (error:AppError) => {
      toast.error(error.message || "Error al crear la reseña");
    }
  });

  return createReviewMutation; 
}
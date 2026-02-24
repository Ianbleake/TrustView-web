import { updateBanner } from "@/services/profile/updateBanner";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useUpdateBanner(): UseMutationResult<UpdateBannerResponde, AppError, UpdateBannerPayload> {

  const updateBannerMutation = useMutation<UpdateBannerResponde, AppError, UpdateBannerPayload>({
    mutationKey: ["updateBanner"],
    mutationFn: updateBanner,
    onSuccess: () => {
      toast.success("Banner actualizado correctamente");
    },
    onError: () => {
      toast.error("Error al actualizar el banner");
    },

  });

  return updateBannerMutation;
}
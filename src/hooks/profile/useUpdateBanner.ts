import { updateBanner } from "@/services/profile/updateBanner";
import { useSessionStorage } from "@/storage/authStorage";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useUpdateBanner(): UseMutationResult<UpdateBannerResponde, AppError, UpdateBannerPayload> {

  const { profile, updateProfile } = useSessionStorage();

  const updateBannerMutation = useMutation<UpdateBannerResponde, AppError, UpdateBannerPayload>({
    mutationKey: ["updateBanner"],
    mutationFn: updateBanner,
    onSuccess: (updatedBanner:UpdateBannerResponde) => {
      toast.success("Banner actualizado correctamente");

      const updatedProfile = {
        ...profile,
        banner: updatedBanner.data.banner,
        banner_accent_color: updatedBanner.data.banner_accent_color
      } as Profile;

      updateProfile(updatedProfile);
    },
    onError: () => {
      toast.error("Error al actualizar el banner");
    },

  });

  return updateBannerMutation;
}
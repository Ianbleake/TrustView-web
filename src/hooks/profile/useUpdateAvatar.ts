import { updateAvatar } from "@/services/profile/updateAvatar";
import { useSessionStorage } from "@/storage/authStorage";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useUpdateAvatar ():UseMutationResult<UpdateAvatarResponde, AppError, UpdateAvatarPayload> {

  const { profile, updateProfile } = useSessionStorage();

  const updateAvatarMutation = useMutation<UpdateAvatarResponde,AppError,UpdateAvatarPayload>({
    mutationKey: ["updateAvatar"],
    mutationFn: updateAvatar,
    onSuccess: (updatedAvatar:UpdateAvatarResponde) => {
      toast.success("Avatar actualizado correctamente");

      const updatedProfile = {
        ...profile,
        color: updatedAvatar.data.color,
        accent_color: updatedAvatar.data.accent_color,
      } as Profile;

      updateProfile(updatedProfile);
    },
    onError: () => { 
      toast.error("Error al actualizar el avatar");
    }
  });

  return updateAvatarMutation;
}
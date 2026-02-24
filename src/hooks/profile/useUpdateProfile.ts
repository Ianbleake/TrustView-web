import { updateProfile } from "@/services/profile/updateProfile";
import { useSessionStorage } from "@/storage/authStorage";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useUpdateProfile(): UseMutationResult<UpdateProfileInfoResponde, AppError, UpdateProfileInfoPayload > {

  const { profile, updateProfile:updateProfileStorage } = useSessionStorage();

  const updateProfileMutation = useMutation<UpdateProfileInfoResponde, AppError, UpdateProfileInfoPayload>({
    mutationKey: ["updateProfile"],
    mutationFn: updateProfile,
    onSuccess: (updatedProfile:UpdateProfileInfoResponde) => {
      toast.success("Perfil actualizado exitosamente.");

      const updated = {
        ...profile,
        first_name: updatedProfile.data.first_name,
        last_name: updatedProfile.data.last_name,
        email: updatedProfile.data.email,
      } as Profile

      updateProfileStorage(updated);
    },
    onError: () => {
      toast.error("Hubo un error al actualizar tu perfil. Por favor, intenta nuevamente.");
    }
  })

  return updateProfileMutation;
}
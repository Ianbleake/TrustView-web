import { updateSettings } from "@/services/profile/updateSettings";
import { useSessionStorage } from "@/storage/authStorage";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useUpdateProfileSettings(): UseMutationResult<UpdateSettingsResponse, AppError, UpdateSettingsPayload, unknown> {

  const { profile, updateProfile } = useSessionStorage();

  const settingsMutations = useMutation<UpdateSettingsResponse, AppError, UpdateSettingsPayload>({
    mutationKey: ['update-profile-settings'],
    mutationFn: updateSettings,
    onSuccess: (updatedSettings:UpdateSettingsResponse) => {
      toast.success('Configuración actualizada');

      const newSettings = {
        ...profile,
        settings: updatedSettings.data.settings,
      } as Profile;

      updateProfile(newSettings);
    },
    onError: () => {
      toast.error('Error al actualizar la configuración');
    }
  })

  return settingsMutations;
}
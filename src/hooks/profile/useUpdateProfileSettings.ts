import { updateSettings } from "@/services/profile/updateSettings";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useUpdateProfileSettings(): UseMutationResult<UpdateSettingsResponse, AppError, UpdateSettingsPayload, unknown> {

  const settingsMutations = useMutation<UpdateSettingsResponse, AppError, UpdateSettingsPayload>({
    mutationKey: ['update-profile-settings'],
    mutationFn: updateSettings,
    onSuccess: () => {
      toast.success('Configuración actualizada');
    },
    onError: () => {
      toast.error('Error al actualizar la configuración');
    }
  })

  return settingsMutations;
}
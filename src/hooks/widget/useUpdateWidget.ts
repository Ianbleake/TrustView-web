import { updateWidget } from "@/services/widget/updateWidget";
import { useSessionStorage } from "@/storage/authStorage";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useUpdateWidget (): UseMutationResult<UpdateWidgetResponse, AppError, updateWidgetPayload> {

  const { updateWidgetConfig } = useSessionStorage();

  const updateWidgetMutation = useMutation<UpdateWidgetResponse, AppError, updateWidgetPayload>({
    mutationKey: ["updateWidget"],
    mutationFn: updateWidget,
    onSuccess: (updatedConfig: UpdateWidgetResponse) => {
      updateWidgetConfig(updatedConfig.data);
      toast.success("Los estilos del widget se actualizaron correctamente.", {
        position: "bottom-right",
      }) ;
    },
    onError: () => {
      toast.error("Ocurrió un error al actualizar los estilos del widget. Por favor, intenta nuevamente.",{
        position: "bottom-right",
      });
    }
  })

  return updateWidgetMutation;
}
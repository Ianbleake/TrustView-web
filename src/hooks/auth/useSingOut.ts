
import signOut from "@/services/auth/singOut";
import { useAnalyticsStorage } from "@/storage/analyticsStorage";
import { useSessionStorage } from "@/storage/authStorage";
import { useReviewStorage } from "@/storage/reviewStorage";
import { useMutation, useQueryClient, type UseMutationResult } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function useLogout():UseMutationResult<void, Error, void, unknown> {

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const clearSession = useSessionStorage((s) => s.clearSession);
  const { clearAnalytics} = useAnalyticsStorage();
  const { clearReviews } = useReviewStorage();

  return useMutation({
    mutationKey: ["auth", "logout"],
    mutationFn: signOut,

    onSuccess: () => {
      clearSession();
      queryClient.clear();
      clearAnalytics();
      clearReviews();
      toast.success("Sesión cerrada");
      navigate("/login");
    },

    onError: () => {
      toast.error("No se pudo cerrar sesión");
    },
  });
}

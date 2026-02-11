
import signOut from "@/services/auth/singOut";
import { useSessionStorage } from "@/storage/authStorage";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const clearSession = useSessionStorage((s) => s.clearSession);

  return useMutation({
    mutationKey: ["auth", "logout"],
    mutationFn: signOut,

    onSuccess: () => {
      // 1️⃣ limpiar estado global
      clearSession();

      // 2️⃣ limpiar cache de React Query
      queryClient.clear();

      // 3️⃣ feedback + redirect
      toast.success("Sesión cerrada");
      navigate("/login");
    },

    onError: () => {
      toast.error("No se pudo cerrar sesión");
    },
  });
}

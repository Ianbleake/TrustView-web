import signIn from "@/services/auth/singIn";
import { useSessionStorage } from "@/storage/authStorage";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export default function useLogin(): UseMutationResult<
  LoginResponse,
  Error,
  LoginPayload
> {

  const navigate = useNavigate();
  const { setSession } = useSessionStorage();

  return useMutation({
    mutationKey: ["auth", "login"],
    mutationFn: signIn,

    onSuccess: ({ user, session, profile, store }) => {
      setSession({
        user,
        session,
        profile,
        store,
      });
    
      toast.success("Bienvenido");
      navigate("/platform");
    },
    

    onError: () => {
      toast.error("Hubo un error al iniciar sesion")
    },
  });
}

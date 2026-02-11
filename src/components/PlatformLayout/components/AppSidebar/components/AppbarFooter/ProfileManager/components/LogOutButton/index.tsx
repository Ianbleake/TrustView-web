import useLogout from "@/hooks/auth/useSingOut";
import { LogOut } from "lucide-react";
import type React from "react";


export const LogOutButton = (): React.ReactElement => {
  const { mutate: logout, isPending } = useLogout();

  return (
    <button
      onClick={() => logout()}
      disabled={isPending}
      className="cursor-pointer flex flex-row items-center flex-1"
    >
      <LogOut className="mr-2 h-4 w-4" />
      {isPending ? "Cerrando..." : "Log out"}
    </button>
  );
};

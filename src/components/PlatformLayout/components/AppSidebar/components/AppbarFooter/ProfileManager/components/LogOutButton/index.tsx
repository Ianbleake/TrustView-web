import { LogOut } from "lucide-react";
import type React from "react";
import { Link } from "react-router-dom";

export const LogOutButton = (): React.ReactElement => {
  return (
    <Link
      to="/auth/login"
      className="cursor-pointer flex flex-row items-center flex-1"
    >
      <LogOut className="mr-2 h-4 w-4" />
      Log out
    </Link>
  );
};

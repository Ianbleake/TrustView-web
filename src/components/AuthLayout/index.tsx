import { useSessionStorage } from "@/storage/authStorage";
import type React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export const AuthLayout = (): React.ReactElement => {

  const { session } = useSessionStorage();
  const location = useLocation();

  if (session) {
    return (
      <Navigate
        to="/platform"
        replace
        state={{ from: location.pathname }}
      />
    );
  }
  return (
    <div>
      <Outlet />
    </div>
  );
};

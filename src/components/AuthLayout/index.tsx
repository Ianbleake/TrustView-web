import type React from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout = (): React.ReactElement => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

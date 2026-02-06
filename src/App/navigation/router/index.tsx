import type React from "react";
import { AuthRouter } from "./AuthRouter";
import { AdminRouter } from "./AdminRouter";
import { NotFound } from "@/screens/NotFound";
import { Route, Routes } from "react-router-dom";
import { PlatformRouter } from "./PlatformRouter";
import { LandingRouter } from "./LandingRouter";


export const AppRouter = (): React.ReactElement => {
  return (
    <Routes>

      {AuthRouter()}
      {AdminRouter()}
      {LandingRouter()}
      {PlatformRouter()}

      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};

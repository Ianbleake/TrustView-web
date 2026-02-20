import type React from "react";
import { Route } from "react-router-dom";
import { Reviews } from "@/screens/Platform/Reviews";
import { Dashboard } from "@/screens/Platform/Dashboard";
import { PlatformLayout } from "@/components/PlatformLayout";
import { Settings } from "@/screens/Platform/Settings";
import { Widget } from "@/screens/Platform/Widget";

export const PlatformRouter = (): React.ReactElement => {
  return (
    <Route
      path="/platform"
      element={<PlatformLayout />}
    >
      <Route
        index
        element={<Dashboard />}
      />

      <Route
        path="/platform/reviews"
        element={<Reviews />}
      />

      <Route
        path="/platform/settings"
        element={<Settings />}
      />

      <Route
        path="/platform/widget"
        element={<Widget />}
      />

    </Route>
  );
};

import { AdminLayout } from "@/components/AdminLayout";
import { Dashboard } from "@/screens/Admin/Dashboard";
import { Stores } from "@/screens/Admin/Stores";
import { Settings } from "@/screens/Platform/Settings";
import type React from "react";
import { Route } from "react-router-dom";

export const AdminRouter = (): React.ReactElement => {
  return (
    <Route
      path="/admin"
      element={<AdminLayout/>}
    >
      <Route
        index
        element={<Dashboard />}
      />

      <Route
        path="stores"
        element={<Stores />}
      />

      <Route
        path="settings"
        element={<Settings />}
      />    

    </Route>
  );
};

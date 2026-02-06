import { AdminLayout } from "@/components/AdminLayout";
import { Dashboard } from "@/screens/Admin/Dashboard";
import { Stores } from "@/screens/Admin/Stores";
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
        path="transform"
        element={<Stores />}
      />

    </Route>
  );
};

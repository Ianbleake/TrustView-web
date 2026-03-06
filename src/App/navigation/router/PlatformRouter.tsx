import type React from "react";
import { Route } from "react-router-dom";
import { Reviews } from "@/screens/Platform/Reviews";
import { Dashboard } from "@/screens/Platform/Dashboard";
import { PlatformLayout } from "@/components/PlatformLayout";
import { Settings } from "@/screens/Platform/Settings";
import { Widget } from "@/screens/Platform/Widget";
import { Products } from "@/screens/Platform/Products";
import { Howitworks } from "@/screens/Platform/Howitworks";
import { ProductDetail } from "@/screens/Platform/Products/ProductDetail";

export const PlatformRouter = (): React.ReactElement => {
  return (
    <Route
      path="/platform"
      element={<PlatformLayout/>}
    >
      <Route
        index
        element={<Dashboard/>}
      />

      <Route
        path="reviews"
        element={<Reviews/>}
      />

      <Route
        path="settings"
        element={<Settings/>}
      />

      <Route
        path="widget"
        element={<Widget/>}
      />

      <Route
        path="products"
        element={<Products/>}
      />

      <Route
        path="products/:id"
        element={<ProductDetail/>}
      />

      <Route
        path="howitworks"
        element={<Howitworks/>}
      />

    </Route>
  );
};

import type React from "react";
import { Route } from "react-router-dom";
import { Checkout } from "@/screens/Checkout";
import { CheckoutReturn } from "@/screens/Checkout/Return";
import { CheckoutLayout } from "@/components/CheckoutLayout";

export const CheckoutRouter = (): React.ReactElement => {
  return (
    <Route
      path="/checkout"
      element={<CheckoutLayout />}
    >

      <Route
        index
        element={<Checkout/>}
      />

      <Route
        path="return"
        element={<CheckoutReturn/>}
      />

    </Route>
  );
};

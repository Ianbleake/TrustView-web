import type React from "react";
import { Route } from "react-router-dom";
import { Login } from "@/screens/Auth/Login";
import { Password } from "@/screens/Auth/Password";
import { Register } from "@/screens/Auth/Register";
import { AuthLayout } from "@/components/AuthLayout";

export const AuthRouter = (): React.ReactElement => {
  return (
    <Route
      path="/auth"
      element={<AuthLayout />}
    >
      <Route
        path="login"
        element={<Login />}
      />

      <Route
        path="forgot-password"
        element={<Password />}
      />

      <Route
        path="register"
        element={<Register />}
      />
    </Route>
  );
};

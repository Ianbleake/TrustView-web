import { Route } from "react-router-dom";
import { Home } from "@/screens/Landing/Home";
import { LandingLayout } from "@/components/LandingLayout";

export const LandingRouter = (): React.ReactElement => (
  <Route
    path="/"
    element={<LandingLayout />}
  >
    <Route
      index
      element={<Home />}
    />
  </Route>
);

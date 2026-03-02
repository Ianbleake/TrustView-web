import { Route } from "react-router-dom";
import { Home } from "@/screens/Landing/Home";
import { Privacy } from "@/screens/Landing/Privacy";
import { LandingLayout } from "@/components/LandingLayout";
import { TermsAndConditions } from "@/screens/Landing/termsAndConditions";
import { Contact } from "@/screens/Landing/Contact";

export const LandingRouter = (): React.ReactElement => (
  <Route
    path="/"
    element={<LandingLayout />}
  >
    <Route
      index
      element={<Home />}
    />

    <Route
      path="privacy"
      element={<Privacy />}
    />

    <Route
      path="terms"
      element={<TermsAndConditions />}
    />

    <Route
      path="contact"
      element={<Contact />}
    />  
  </Route>
);

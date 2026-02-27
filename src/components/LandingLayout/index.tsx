import type React from "react";
import { useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { BaseLayout } from "./components/BaseLayout";
import { Outlet, useLocation } from "react-router-dom";

export const LandingLayout = (): React.ReactElement => {
  const { pathname } = useLocation();

  // biome-ignore lint/correctness/useExhaustiveDependencies: queremos reaccionar al cambio de ruta
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <BaseLayout className="pt-18">
      <Header />

      <div className="flex-1">
        <Outlet />
      </div>

      <Footer />
    </BaseLayout>
  );
};

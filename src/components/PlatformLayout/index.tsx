import type React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "./components/AppSidebar";
import { AppHeader } from "./components/AppHeader";
import { MobileSidebar } from "./components/AppSidebar/components/MobileSidebar";


export const PlatformLayout = (): React.ReactElement => {

  return (
    <SidebarProvider>
      <div className="hidden md:block">
        <AppSidebar />
      </div>

      <main className="w-full flex flex-col bg-gray-100 min-h-screen">
        <AppHeader />
        <section className="py-4 px-16 flex-1">
          <Outlet />
        </section>
      </main>

      <MobileSidebar />
    </SidebarProvider>
  );
};

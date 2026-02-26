import type React from "react";
import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "./components/AppSidebar";
//import { SkeletonTest } from "../skeletons/SkeletonTest";
import { useSessionStorage } from "@/storage/authStorage";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { MobileSidebar } from "./components/AppSidebar/components/MobileSidebar";


export const PlatformLayout = (): React.ReactElement => {

  const { session, profile } = useSessionStorage();
  const location = useLocation();

  if (!session) {
    return (
      <Navigate
        to="/auth"
        replace
        state={{ from: location.pathname }}
      />
    );
  }else{
    if(profile?.role === "admin"){
      return(
        <Navigate
          to="/admin"
          replace
          state={{ from: location.pathname }}
        />
      )
    }
  }

  return (
    <SidebarProvider>
      <div className="hidden md:block">
        <AppSidebar />
      </div>

      <main className="w-full flex flex-col bg-gray-100 min-h-screen">
        <section className="py-4 px-16 flex-1 relative">
          <Outlet />
          {/* <SkeletonTest/> */}
        </section>
      </main>

      <MobileSidebar />
    </SidebarProvider>
  );
};

import { Sidebar, SidebarContent } from "@/components/ui/sidebar";
import type React from "react";
import { AppbarFooter } from "./components/AppbarFooter";
import { AppbarHeader } from "./components/AppbarHeader";
import { AppbarMenu } from "./components/AppbarMenu";

export const AppSidebar = (): React.ReactElement => {
  return (
    <Sidebar collapsible="icon">
      <AppbarHeader />

      <SidebarContent>
        <AppbarMenu />
      </SidebarContent>

      <AppbarFooter />
    </Sidebar>
  );
};

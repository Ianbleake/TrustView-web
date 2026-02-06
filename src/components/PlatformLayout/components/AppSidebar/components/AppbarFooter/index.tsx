import { SidebarFooter } from "@/components/ui/sidebar";
import type React from "react";
import ProfileManager from "./ProfileManager";

export const AppbarFooter = (): React.ReactElement => {
  return (
    <SidebarFooter className="border-t border-gray-200">
      <ProfileManager />
    </SidebarFooter>
  );
};

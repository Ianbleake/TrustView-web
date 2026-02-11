import ProfileManager from "@/components/PlatformLayout/components/AppSidebar/components/AppbarFooter/ProfileManager";
import { SidebarFooter } from "@/components/ui/sidebar";
import type React from "react";


export const AdminbarFooter = ():React.ReactElement => {
  return (
    <SidebarFooter className="border-t border-gray-200">
      <ProfileManager />
    </SidebarFooter>
  )
}
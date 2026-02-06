import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { SidebarMenu, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar";
import type React from "react";
import { LogOutButton } from "./components/LogOutButton";
import { MenuLabel } from "./components/MenuLabel";
import { MenuOptions } from "./components/MenuOptions";
import { ProfileInfo } from "./components/ProfileInfo";

export default function ProfileManager(): React.ReactElement {
  const { isMobile } = useSidebar();

  return (
    <SidebarMenu>
      <SidebarMenuItem className="cursor-pointer transition-all duration-300">
        <DropdownMenu>
          <ProfileInfo />

          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <MenuLabel />

            <DropdownMenuSeparator />

            <MenuOptions />

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <LogOutButton />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

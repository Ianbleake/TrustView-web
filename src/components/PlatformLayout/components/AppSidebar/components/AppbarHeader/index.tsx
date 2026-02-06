import { Brand } from "@/components/Brand";
import { SidebarGroup, SidebarHeader, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { merge } from "@/utils/mergeStyles";
import type React from "react";

export const AppbarHeader = (): React.ReactElement => {
  const { open } = useSidebar();

  return (
    <SidebarHeader>
      <SidebarGroup className="flex flex-row items-center gap-2 border-b border-gray-200 pl-1">

        <SidebarTrigger size={"icon"} className="hover:bg-gray-200/50" />

        <div
          className={merge(
            "flex items-center gap-2 transition-all duration-200 overflow-hidden",
            open ? "opacity-100 translate-x-0 w-auto" : "opacity-0 -translate-x-2 w-0",
          )}
        >
          <Brand icon size="md"/>
          <h1 className="text-2xl font-semibold whitespace-nowrap">
            <span className="text-2xl font-semibold gradient-bg bg-clip-text text-transparent whitespace-nowrap">Trust</span>View
          </h1>
        </div>
      </SidebarGroup>
    </SidebarHeader>
  );
};

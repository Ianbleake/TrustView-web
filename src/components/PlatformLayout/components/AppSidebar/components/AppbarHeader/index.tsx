import { SidebarGroup, SidebarHeader, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { merge } from "@/utils/mergeStyles";
import type React from "react";

export const AppbarHeader = (): React.ReactElement => {
  const { open } = useSidebar();

  return (
    <SidebarHeader>
      <SidebarGroup className="flex flex-row items-center gap-2 border-b border-gray-200 pl-2">
        <SidebarTrigger size={"icon"} />

        <div
          className={merge(
            "flex items-center gap-2 transition-all duration-200 overflow-hidden",
            open ? "opacity-100 translate-x-0 w-auto" : "opacity-0 -translate-x-2 w-0",
          )}
        >
          <h1 className="text-2xl font-semibold bg-linear-to-br from-blue-600 via-sky-500 to-teal-500 bg-clip-text text-transparent whitespace-nowrap">
            Bridgely
          </h1>
        </div>
      </SidebarGroup>
    </SidebarHeader>
  );
};

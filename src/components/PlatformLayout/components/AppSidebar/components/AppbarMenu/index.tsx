import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar";
import { merge } from "@/utils/mergeStyles";
import { Grid } from "lucide-react";
import type React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const platformMenu = [
  { label: "item 1", to: "/", icon: Grid },
  { label: "item 2", to: "/", icon: Grid },
  { label: "item 3", to: "/", icon: Grid },
]

export const AppbarMenu = (): React.ReactElement => {

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { setOpenMobile } = useSidebar();

  const featureSlug = pathname.split("/")[2];

  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
          {platformMenu.map((item) => {
            const itemSlug = item.to.split("/")[2];
            const isActive = featureSlug === itemSlug;

            return (
              <SidebarMenuItem key={item.label}>
                <SidebarMenuButton
                  className={merge(
                    "cursor-pointer hover:bg-blue-50",
                    isActive
                      ? "bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-blue-600"
                      : "",
                  )}
                  onClick={() => {
                    navigate(item.to);
                    setOpenMobile(false);
                  }}
                  asChild
                >
                  <div className="flex flex-row items-center justify-start gap-4 my-1">
                    <item.icon className="w-6 h-6 shrink-0" />
                    <p>{item.label}</p>
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};

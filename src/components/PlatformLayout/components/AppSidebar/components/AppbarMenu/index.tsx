import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar";
import { merge } from "@/utils/mergeStyles";
import { BadgeQuestionMark, Box, ChartPie, MessageCircleHeart, Star } from "lucide-react";
import type React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const platformMenu = [
  { label: "Dashboard", to: "/platform", icon: ChartPie },
  { label: "Reseñas", to: "/platform/reviews", icon: Star },
  { label: "Productos", to: "/platform/products", icon: Box },
  { label: "Widget", to: "/platform/widget", icon: MessageCircleHeart },
  { label: "Como funciona", to: "/platform/howitworks", icon: BadgeQuestionMark },
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
                    "cursor-pointer transition-all duration-300",
                    isActive
                      ? "bg-amber-300/20 hover:bg-amber-300/40 text-orange-600 hover:text-amber-600"
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

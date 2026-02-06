import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { MoreVertical } from "lucide-react";
import type React from "react";
import { UserImage } from "./UserImage";

export const ProfileInfo = (): React.ReactElement => {
  const profile = {
    username: "johndoe",
    first_name: "John",
    last_name: "Doe",
  };
  return (
    <DropdownMenuTrigger
      asChild
      className="cursor-pointer"
    >
      <SidebarMenuButton
        size="lg"
        className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
      >
        <UserImage />

        <div className="grid flex-1 text-left text-sm leading-tight ml-1">
          <span className="truncate font-medium">{profile?.username}</span>
          <span className="text-muted-foreground truncate text-xs">
            {profile?.first_name} {profile?.last_name}
          </span>
        </div>

        <MoreVertical className="ml-auto size-4" />
      </SidebarMenuButton>
    </DropdownMenuTrigger>
  );
};

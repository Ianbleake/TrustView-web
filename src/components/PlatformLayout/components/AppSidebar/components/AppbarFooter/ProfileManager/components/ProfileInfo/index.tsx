import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SidebarMenuButton } from "@/components/ui/sidebar";
import { MoreVertical } from "lucide-react";
import type React from "react";
import { UserImage } from "./UserImage";
import { useSessionStorage } from "@/storage/authStorage";

export const ProfileInfo = (): React.ReactElement => {

  const { profile, store } = useSessionStorage();

  const fullName = `${profile?.first_name} ${profile?.last_name}`;

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
          <span className="truncate font-medium">{fullName}</span>
          <span className="text-muted-foreground truncate text-xs">
            {store?.store_name}
          </span>
        </div>

        <MoreVertical className="ml-auto size-4" />
      </SidebarMenuButton>
    </DropdownMenuTrigger>
  );
};

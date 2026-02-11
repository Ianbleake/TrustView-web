import { DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import type React from "react";
import { UserImage } from "../ProfileInfo/UserImage";
import { useSessionStorage } from "@/storage/authStorage";

export const MenuLabel = (): React.ReactElement => {

  const { profile } = useSessionStorage();

  return (
    <DropdownMenuLabel className="p-0 font-normal">
      <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
        <UserImage />

        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-medium">
            {profile?.first_name} {profile?.last_name}
          </span>
          <span className="text-muted-foreground truncate text-xs">{profile?.email}</span>
        </div>
      </div>
    </DropdownMenuLabel>
  );
};

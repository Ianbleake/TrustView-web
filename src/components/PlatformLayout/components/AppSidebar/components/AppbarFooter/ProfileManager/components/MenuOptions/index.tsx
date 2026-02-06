import { DropdownMenuGroup, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useSidebar } from "@/components/ui/sidebar";
import { Settings } from "lucide-react";
import type React from "react";
import { useNavigate } from "react-router-dom";

export const MenuOptions = (): React.ReactElement => {
  const navigate = useNavigate();
  const { setOpenMobile } = useSidebar();

  return (
    <DropdownMenuGroup>
      <DropdownMenuItem
        className="cursor-pointer"
        onClick={() => {
          navigate("settings");
          setOpenMobile(false);
        }}
      >
        <Settings className="mr-2 h-4 w-4" />
        Settings
      </DropdownMenuItem>
    </DropdownMenuGroup>
  );
};

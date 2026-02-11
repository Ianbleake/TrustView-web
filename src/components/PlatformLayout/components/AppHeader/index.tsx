import type React from "react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { Bell, PanelLeft, ShieldQuestionMark } from "lucide-react";

export const AppHeader = (): React.ReactElement => {
  
  const { setOpenMobile } = useSidebar();

  return (
    <div className="w-full flex flex-row items-center justify-between gap-4 border-b border-gray-200 p-2">
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setOpenMobile(true)}
      >
        <PanelLeft />
      </Button>

      <div className="w-full flex flex-row items-center justify-end gap-4">
        <Bell className="text-gray-400 hover:text-gray-900 transition cursor-pointer" />

        <ShieldQuestionMark className="text-gray-400 hover:text-gray-900 transition cursor-pointer" />
      </div>
    </div>
  );
};

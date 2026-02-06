import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useSidebar } from "@/components/ui/sidebar";
import type React from "react";
import { AppSidebar } from "../..";

export const MobileSidebar = (): React.ReactElement => {
  const { openMobile, setOpenMobile } = useSidebar();

  return (
    <Sheet
      open={openMobile}
      onOpenChange={setOpenMobile}
    >
      <SheetContent
        side="left"
        className="p-0 w-70"
      >
        <AppSidebar />
      </SheetContent>
    </Sheet>
  );
};

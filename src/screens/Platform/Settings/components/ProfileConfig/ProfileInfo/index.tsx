import type React from "react";
import { Pencil } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ProfileInfo = (): React.ReactElement => {
  return (
    <Card className="p-0">
      <div
        id="profileMedia"
        className="relative h-30 rounded-t-xl"
      >
        <div
          id="profileImage"
          className=" absolute h-40 w-40 -bottom-3/4 left-1/2 -translate-x-1/2 rounded-full p-1 bg-white border border-gray-200 shadow shadow-blue-200"
        >
          <div className="h-full w-full flex items-center justify-center bg-emerald-600 rounded-full text-white text-5xl">
            JD
          </div>

          <div className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-white shadow-xl flex items-center justify-center cursor-pointer">
            <Pencil
              className="text-gray-600"
              size={20}
            />
          </div>
        </div>

        <div
          id="profileBanner"
          className="h-full w-ful rounded-t-xl bg-linear-to-r from-emerald-500 to-emerald-900"
        ></div>
      </div>

      <div
        id="profileInfo"
        className="pt-24 pb-6 px-6 flex flex-col items-center text-center gap-3"
      >
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold leading-tight">John Doe</h2>

          <p className="text-sm text-muted-foreground">john.doe@email.com</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mt-2">
          <span className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium">
            Plan Pro
          </span>

          <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-medium">
            Activo
          </span>
        </div>
      </div>
    </Card>
  );
};

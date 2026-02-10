import type React from "react";
import { Pencil } from "lucide-react";
import { Card } from "@/components/ui/card";

export const ProfileInfo = (): React.ReactElement => {
  return (
    <Card className="p-0 gap-0" >
      <div id="profileMedia" className="relative h-30 rounded-t-xl" >
        <div
          id="profileImage"
          className=" absolute h-40 w-40 -bottom-3/4 left-30 -translate-x-1/2 rounded-full p-1 bg-white border border-gray-200 shadow shadow-blue-200"
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

      <div id="profileInfo" className="flex flex-row items-center justify-end pl-58 bg-green-200" >

        <div className="bg-amber-100 h-42 flex flex-row flex-1">

        </div>

      </div>
    </Card>
  );
};

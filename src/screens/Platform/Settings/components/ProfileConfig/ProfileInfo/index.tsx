import type React from "react";
import { Mail, Pencil, UserCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useSessionStorage } from "@/storage/authStorage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const ProfileInfo = (): React.ReactElement => {

  const { profile } = useSessionStorage()

  const initials = profile?.first_name && profile?.last_name
  ? `${profile.first_name[0]}${profile.last_name[0]}`
  : "BD";

  const baseStyle = "rounded-lg bg-emerald-600 text-white text-6xl gradient-bg";
  
  return (
    <Card className="p-0 gap-0" >

      <div id="profileMedia" className="relative h-30 rounded-t-xl" >

        <div id="profileImage" className=" absolute h-40 w-40 -bottom-3/4 left-30 -translate-x-1/2 rounded-full p-1 bg-white border border-gray-200 shadow shadow-blue-200" >

          <Avatar className="h-full w-full roundeed-full">
            <AvatarImage
              src={profile?.avatar_url || undefined}
              alt={profile?.first_name || "user-profile"}
            />

            <AvatarFallback
              className={baseStyle}
            >
              {initials}
            </AvatarFallback>
          </Avatar>

          <div className="absolute bottom-0 right-0 h-10 w-10 rounded-full bg-white shadow-xl flex items-center justify-center cursor-pointer hover:bg-gray-100/90 hover:scale-105 transition-all duration-300">
            <Pencil
              className="text-gray-600"
              size={20}
            />
          </div>
        </div>

        <div id="profileBanner" className="h-full w-full rounded-t-xl bg-linear-to-r from-emerald-500 to-emerald-900" />

        <div className="absolute right-4 top-4 flex flex-row gap-4 items-center">
          <Badge className="h-8 w-fit text-md px-4" variant={profile?.billing === "Pro" ? "gradientShine" : profile?.billing === "base" ? "default" : "secondary"}>
            Plan: {profile?.billing ?? "Free"}
          </Badge>

          <Button
            variant={"gradient"}
            className="rounded-full"
            size={"icon-lg"}
          >
            <Pencil/>
          </Button>
        </div>

      </div>

      <div id="profileInfo" className="flex flex-row items-center justify-end" >

        <div className="h-25 w-4/5 grid grid-cols-2 py-6 px-8 ">

          <div className="w-full h-fit flex flex-row items-center justify-start gap-2">

            <div className="flex items-center justify-center">
              <UserCircle className="h-6 w-6 text-orange-600"/>
            </div>

            <div className="flex flex-row items-center gap-2">
              <h3 className="font-heading font-semibold text-lg text-orange-600">Nombre:</h3>
              <p className="font-normal text-gray-500 text-lg">{profile?.first_name} {profile?.last_name}</p>
            </div>
          </div>

          <div className="w-full h-fit flex flex-row items-center justify-start gap-2">

            <div className="flex items-center justify-center">
              <Mail className="h-6 w-6 text-orange-600"/>
            </div>

            <div className="flex flex-row items-center gap-2">
              <h3 className="font-heading font-semibold text-lg text-orange-600">Email:</h3>
              <p className="font-normal text-gray-500 text-lg">{profile?.email ?? "-"}</p>
            </div>
          </div>

        </div>

      </div>
    </Card>
  );
};

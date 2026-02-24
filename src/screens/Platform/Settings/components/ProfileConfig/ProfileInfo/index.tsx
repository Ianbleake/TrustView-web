import type React from "react";
import { EditMedia } from "./EditMedia";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, Pencil, Save, UserCircle } from "lucide-react";
import { useSessionStorage } from "@/storage/authStorage";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { merge } from "@/utils/mergeStyles";

//TODO: Componetizar componente

type ProfileInfoValues = {
  first_name: string;
  last_name: string;
  email: string;
}

export const ProfileInfo = (): React.ReactElement => {

  const { profile } = useSessionStorage()

  const [ edit, setEdit ] = useState<boolean>(false);

  const initials = profile?.first_name && profile?.last_name
  ? `${profile.first_name[0]}${profile.last_name[0]}`
  : "BD";

  const baseStyle = "rounded-lg text-white text-6xl gradient-bg";

  const gradientStyle = profile?.accentColor ? `linear-gradient(135deg, ${profile.color}, ${profile.accentColor})` : profile?.color || "";

  const bannerStyle = profile?.bannerAccentColor ? `linear-gradient(135deg, ${profile.banner}, ${profile.bannerAccentColor})` : profile?.banner || "";

  const { register, handleSubmit, formState: { errors } } = useForm<ProfileInfoValues>({
    defaultValues: {
        first_name: profile?.first_name || "",
        last_name: profile?.last_name || "",
        email: profile?.email || "",
    }
  })

  const onSubmit = (data: ProfileInfoValues): void => {
    console.log(data);
    setEdit(false);
  };
   
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
              style={{ background: gradientStyle }}
            >
              {initials}
            </AvatarFallback>
          </Avatar>

          <EditMedia/>
        </div>

        <div id="profileBanner" className="h-full w-full rounded-t-xl gradient-bg" style={{ background: bannerStyle}} />

        <div className="absolute right-4 top-4 flex flex-row gap-4 items-center">

          <Badge className={merge("h-8 w-fit text-md px-4", edit && "mr-14 mt-1")} variant={profile?.billing === "pro" ? "gradientShine" : profile?.billing === "base" ? "default" : "secondary"}>
            Plan: {profile?.billing ?? "Free"}
          </Badge>
          
          {
            !edit && (
              <Button
                type="button"
                variant={"gradient"}
                className="rounded-full"
                size={"icon-lg"}
                onClick={() => setEdit(true)}
              >
                <Pencil/>
              </Button>
            )
          }

        </div>

      </div>

      <div id="profileInfo" className="flex flex-row items-center justify-end" >

        { 
          !edit ? (
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
          ) : (
            <form id="profile-form" onSubmit={handleSubmit(onSubmit)} className="relative h-25 w-4/5 grid grid-cols-2 py-6 px-8 ">

                <div className="w-full h-fit flex flex-row items-center justify-start gap-2">
    
                  <div className="flex items-center justify-center">
                    <UserCircle className="h-6 w-6 text-orange-600"/>
                  </div>

                  <div className="flex flex-row items-center gap-2">
                    <h3 className="font-heading font-semibold text-lg text-orange-600">Nombre:</h3>
                    <Input
                      type="text"
                      {...register("first_name", { required: true })}
                    />
                    <Input
                      type="text"
                      {...register("last_name", { required: true })}
                    />
                    { errors.first_name && <span className="text-red-500 text-sm">El nombre es requerido</span>}
                    { errors.last_name && <span className="text-red-500 text-sm">El apellido es requerido</span>}
                  </div>
                </div>

                <div className="w-full h-fit flex flex-row items-center justify-start gap-2 pl-6">

                  <div className="flex items-center justify-center">
                    <Mail className="h-6 w-6 text-orange-600"/>
                  </div>

                  <div className="flex flex-1 flex-row items-center gap-2">
                    <h3 className="font-heading font-semibold text-lg text-orange-600">Email:</h3>
                    <Input
                      type="email"
                      {...register("email", { required: true })}
                      className="flex-1"
                    />
                    { errors.email && <span className="text-red-500 text-sm">El email es requerido</span>}
                  </div>
                </div>

                <Button
                  type="submit"
                  form="profile-form"
                  variant="gradient"
                  className="rounded-full absolute right-4 -top-26"
                  size="icon-lg"
                >
                  <Save />
                </Button>

            </form>
          )
        }

        

      </div>
    </Card>
  );
};

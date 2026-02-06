import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type React from "react";

export const UserImage = (): React.ReactElement => {
  const profile = {
    avatarurl: "",
    username: "johndoe",
    color: "#10B981",
    initials: "JD",
  };

  const baseStyle = "rounded-lg bg-emerald-600 text-white text-lg";

  return (
    <Avatar className="h-8 w-8 rounded-lg ">
      <AvatarImage
        src={profile?.avatarurl || undefined}
        alt={profile?.username || "user-profile"}
      />

      <AvatarFallback
        className={baseStyle}
        style={{ backgroundColor: profile?.color }}
      >
        {profile?.initials || "BD"}
      </AvatarFallback>
    </Avatar>
  );
};

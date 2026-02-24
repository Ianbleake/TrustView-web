import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useSessionStorage } from "@/storage/authStorage";
import type React from "react";

export const UserImage = (): React.ReactElement => {

  const { profile } = useSessionStorage();

  const initials = profile?.first_name && profile?.last_name
    ? `${profile.first_name[0]}${profile.last_name[0]}`
    : "BD";

  const baseStyle = "rounded-lg bg-emerald-600 text-white text-lg gradient-bg";

  const gradientStyle = profile?.accentColor ? `linear-gradient(135deg, ${profile.color}, ${profile.accentColor})` : profile?.color || "";

  return (
    <Avatar className="h-8 w-8 rounded-lg ">
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
  );
};

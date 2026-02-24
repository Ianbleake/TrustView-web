import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import useUpdateAvatar from "@/hooks/profile/useUpdateAvatar";

import { useSessionStorage } from "@/storage/authStorage";
import { twTheme } from "@/utils/twTheme";
import { Ban, Save } from "lucide-react";

import React, { useMemo, useState } from "react";

type AvatarEditFormProps = {
  onClose: () => void;
}

export const AvatarEditForm = ({
  onClose,
}:AvatarEditFormProps): React.ReactElement => {

  const { profile } = useSessionStorage();
  const haveAccent = !!profile?.accent_color;
  const [colorValue, setColor] = useState<string>(profile?.color || "#f97316"); 
  const [accentColor, setAccentColor] = useState<string>(profile?.accent_color || "#fbbf24"); 
  const [gradientEnabled, setGradientEnabled] = useState<boolean>(haveAccent);
  const [activePicker, setActivePicker] = useState<"base" | "accent">("base");

  const initials =
    profile?.first_name && profile?.last_name
      ? `${profile.first_name[0]}${profile.last_name[0]}`
      : "BD";

  const colors = useMemo(() => {
    return Object.entries(twTheme.colors)
      .filter(([_, shades]) => typeof shades === "object")
      .map(([name, shades]) => {
        const sortedShades = Object.entries(
          shades as Record<string, string>
        ).sort((a, b) => Number(a[0]) - Number(b[0]));

        return {
          name,
          shades: sortedShades,
        };
      });
  }, []);

  const backgroundStyle =
    gradientEnabled && colorValue && accentColor
      ? `linear-gradient(135deg, ${colorValue}, ${accentColor})`
      : colorValue;

  const { mutate:updateAvatar, isPending } = useUpdateAvatar();

  const handleSubmit = ():void => {
    
    const formattedPayload: UpdateAvatarPayload = {
      user_id: profile?.id || "",
      color: colorValue,
      accent_color: gradientEnabled ? accentColor : null,
    }

    updateAvatar(formattedPayload,{
      onSuccess: () => {
        onClose();
      }
    });
  }

  return (
    <div className="flex flex-col gap-4">

      <div className="flex flex-row items-center justify-between border border-gray-200 shadow-inner">
        
        <div className="w-1/2 py-6 flex items-center justify-center">
          <div className="h-40 w-40 rounded-full p-1 bg-white border border-gray-200 shadow shadow-blue-200">
            <Avatar className="h-full w-full rounded-full">
              <AvatarFallback
                className="rounded-full text-white text-6xl"
                style={{ background: backgroundStyle }}
              >
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        
        <div className="w-1/2 max-h-70 overflow-auto flex flex-col items-center py-5 gap-4">

          {gradientEnabled && (
            <div className="flex gap-2 justify-around pb-2">
              <Button
                type="button"
                size="sm"
                variant={activePicker === "base" ? "gradient" : "outline"}
                onClick={() => setActivePicker("base")}
              >
                Primario
              </Button>

              <Button
                type="button"
                size="sm"
                variant={activePicker === "accent" ? "gradient" : "outline"}
                onClick={() => setActivePicker("accent")}
              >
                Contraste
              </Button>
            </div>
          )}

          {colors.map(({ name, shades }) => (
            <div
              key={name}
              className="flex flex-col gap-3 pl-10 pr-2 items-center justify-center"
            >
              <div className="w-full text-center text-lg font-medium capitalize">
                {name}
              </div>

              <div className="flex gap-3 flex-wrap">
                {shades.map(([shadeKey, shadeValue]) => {
                  const selected = colorValue === shadeValue;
                  const accentSelected = accentColor === shadeValue;

                  return (
                    <button
                      key={shadeKey}
                      type="button"
                      onClick={() => {
                        if (!gradientEnabled) {
                          setColor(shadeValue);
                          return;
                        }

                        if (activePicker === "base") {
                          setColor(shadeValue);
                        } else {
                          if (shadeValue === colorValue) return;
                          setAccentColor(shadeValue);
                        }
                      }}
                      className={`h-8 w-8 rounded-md border-2 transition-all duration-200 ${
                        selected || accentSelected
                          ? "border-black scale-110"
                          : "border-gray-200 hover:scale-110"
                      }`}
                      style={{ backgroundColor: shadeValue }}
                      title={`${name}-${shadeKey}`}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>

      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center gap-2">
          <p>Gradiente</p>
          <Switch
            checked={gradientEnabled}
            onCheckedChange={(value) => setGradientEnabled(value)}
          />
        </div>

        <div className="flex flex-row gap-2">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Cancelar
              <Ban />
            </Button>
          </DialogClose>

          <Button type="button" variant="gradient" className="min-w-45" onClick={handleSubmit} disabled={isPending}>
            {
              isPending ? (
                <Spinner/>
              ) : (
                <>
                  Guardar cambios
                  <Save/>
                </>
              )
            }
          </Button>
        </div>
      </div>
      
    </div>
  );
};
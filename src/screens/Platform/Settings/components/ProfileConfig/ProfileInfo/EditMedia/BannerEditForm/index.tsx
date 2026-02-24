import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { Switch } from "@/components/ui/switch";
import useUpdateBanner from "@/hooks/profile/useUpdateBanner";
import { useSessionStorage } from "@/storage/authStorage";
import { twTheme } from "@/utils/twTheme";
import { Ban, Save } from "lucide-react";
import React, { useMemo, useState, useEffect } from "react";

type BannerEditFormProps = {
  onClose: () => void;
};

export const BannerEditForm = ({
  onClose,
}: BannerEditFormProps): React.ReactElement => {
  const { profile } = useSessionStorage();

  const haveAccent = !!profile?.bannerAccentColor;

  const [colorValue, setColor] = useState<string>(
    profile?.banner || "#f97316"
  );

  const [accentColor, setAccentColor] = useState<string>(
    profile?.bannerAccentColor || "#fbbf24"
  );

  const [gradientEnabled, setGradientEnabled] =
    useState<boolean>(haveAccent);

  const [activePicker, setActivePicker] =
    useState<"base" | "accent">("base");

  const colors = useMemo(() => {
    return Object.entries(twTheme.colors)
      .filter(([_, shades]) => typeof shades === "object")
      .map(([name, shades]) => {
        const sortedShades = Object.entries(
          shades as Record<string, string>
        ).sort((a, b) => Number(a[0]) - Number(b[0]));

        return { name, shades: sortedShades };
      });
  }, []);

  useEffect(() => {
    if (!gradientEnabled) {
      setAccentColor("");
    }
  }, [gradientEnabled]);

  const backgroundStyle =
    gradientEnabled && accentColor
      ? `linear-gradient(135deg, ${colorValue}, ${accentColor})`
      : colorValue;


  const { mutate:updateBanner, isPending} = useUpdateBanner();

  const handleSubmit = (): void => {
    const formattedPayload: UpdateBannerPayload = {
      user_id: profile?.id || "",
      banner: colorValue,
      banner_accent_color: gradientEnabled ? accentColor : null,
    };

    updateBanner(formattedPayload, {
      onSuccess: () => {
        onClose();
      },
    });

  };

  return (
    <div className="flex flex-col border border-gray-200 shadow-inner rounded-t-lg">

      <div
        className="w-full h-30 rounded-t-lg transition-all duration-300"
        style={{ background: backgroundStyle }}
      />

  
      <div className="w-full max-h-50 overflow-auto flex flex-col items-center py-5 gap-4">

        {gradientEnabled && (
          <div className="flex gap-2 justify-around pb-2">
            <Button
              size="sm"
              variant={activePicker === "base" ? "gradient" : "outline"}
              onClick={() => setActivePicker("base")}
            >
              Primario
            </Button>

            <Button
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
            className="flex flex-col gap-3 px-6 pl-10 items-center justify-center"
          >
            <div className="w-full text-left text-lg font-medium capitalize">
              {name}
            </div>

            <div className="flex gap-3 flex-wrap justify-start">
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
                  />
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-row items-center justify-between px-4 py-3 border-t border-gray-200">

        <div className="flex flex-row items-center gap-2">
          <p>Gradiente</p>
          <Switch
            checked={gradientEnabled}
            onCheckedChange={setGradientEnabled}
          />
        </div>

        <div className="flex flex-row gap-2">
          <DialogClose asChild>
            <Button variant="secondary">
              Cancelar
              <Ban />
            </Button>
          </DialogClose>

          <Button
            variant="gradient"
            className="min-w-45"
            onClick={handleSubmit}
            disabled={isPending}
          >
            {isPending ? (
              <Spinner />
            ) : (
              <>
                Guardar cambios
                <Save />
              </>
            )}
          </Button>
        </div>
      </div>

    </div>
  );
};
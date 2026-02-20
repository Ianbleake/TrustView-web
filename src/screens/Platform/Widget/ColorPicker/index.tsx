import { twTheme } from "@/utils/twTheme";
import React, { useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type ColorPickerProps = {
  value: string;
  onChange: (color: string) => void;
  label?: string;
};

export const ColorPicker = ({
  value,
  onChange,
  label = "Seleccionar color",
}: ColorPickerProps): React.ReactElement => {
  const [open, setOpen] = useState(false);

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

  const handleSelect = (color: string): void => {
    onChange(color);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="flex items-center gap-3 px-3 py-2 border rounded-lg hover:bg-muted transition w-full"
        >
          <div
            className="h-6 w-6 rounded-full border"
            style={{ backgroundColor: value }}
          />
          <span className="text-sm">{label}</span>
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{label}</DialogTitle>
        </DialogHeader>

        <div className="max-h-125 overflow-y-auto pr-2 space-y-4">
          {colors.map(({ name, shades }) => (
            <div key={name} className="flex items-center gap-4">
              
              {/* Nombre del color */}
              <div className="w-24 text-lg font-medium capitalize">
                {name}
              </div>

              {/* Variantes */}
              <div className="flex gap-4 flex-wrap">
                {shades.map(([shadeKey, shadeValue]) => {
                  const selected = value === shadeValue;

                  return (
                    <button
                      key={shadeKey}
                      type="button"
                      onClick={() => handleSelect(shadeValue)}
                      className={`h-8 w-8 rounded-md border-2 transition ${
                        selected
                          ? "border-black scale-110"
                          : "border-transparent hover:scale-105"
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
      </DialogContent>
    </Dialog>
  );
};
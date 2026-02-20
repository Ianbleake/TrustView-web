import { Button } from "@/components/ui/button";
import useLastReviews from "@/hooks/reviews/useLastReviews";
import { Pencil, Save } from "lucide-react";
import React, { useState } from "react";
import { ReviewCardWidget } from "./ReviewCardWidget";
import { Card } from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { ColorPicker } from "./ColorPicker";

export type WidgetStyles = {
  border: "sm" | "md" | "lg" | "none";
  background: string;
  avatarGradient: boolean;
  avatarBackground: string;
  titleColor: string;
  dateColor: string;
  contentColor: string;
  productColor: string;
  starBodyColor: string;
  starFillColor: string;
  emptyStarColor: string;
  showCount: boolean;
  starsSize: "sm" | "md" | "lg";
};

export const Widget = (): React.ReactElement => {
  const [edit, setEdit] = useState(false);
  const { lastReviews } = useLastReviews();

  const { register, handleSubmit, setValue, watch } =
    useForm<WidgetStyles>({
      defaultValues: {
        border: "lg",
        background: "#ffffff",
        avatarGradient: false,
        avatarBackground: "#f97316",
        titleColor: "#111827",
        dateColor: "#6b7280",
        contentColor: "#111827",
        productColor: "#f97316",
        starBodyColor: "#facc15",
        starFillColor: "#facc15",
        emptyStarColor: "#d1d5db",
        showCount: true,
        starsSize: "md",
      },
    });

  const widgetConfig = watch(); 

  const onSubmit = (data: WidgetStyles):void => {
    console.log("Guardar config:", data);
    setEdit(false);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Configuración Widget
          </h1>
          <p className="text-muted-foreground">
            Personaliza la apariencia en tiempo real
          </p>
        </div>

        <Button
          variant="gradient"
          size="sm"
          className="flex items-center gap-3"
          onClick={() => (edit ? handleSubmit(onSubmit)() : setEdit(true))}
        >
          {edit ? "Guardar Cambios" : "Editar Widget"}
          {edit ? <Save /> : <Pencil />}
        </Button>
      </div>

      {/* Editor */}
      {edit && (
        <Card className="p-6">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Border */}
            <div className="flex flex-col gap-2">
              <label>Border Radius</label>
              <select {...register("border")} className="border rounded-md p-2">
                <option value="none">None</option>
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </div>

            {/* Stars Size */}
            <div className="flex flex-col gap-2">
              <label>Stars Size</label>
              <select {...register("starsSize")} className="border rounded-md p-2">
                <option value="sm">Small</option>
                <option value="md">Medium</option>
                <option value="lg">Large</option>
              </select>
            </div>

            {/* Show Count */}
            <div className="flex items-center gap-3">
              <input type="checkbox" {...register("showCount")} />
              <label>Mostrar valor numérico</label>
            </div>

            {/* Background */}
            <div>
              <label className="block mb-2">Background</label>
              <ColorPicker
                value={widgetConfig.background}
                onChange={(color) => setValue("background", color)}
              />
            </div>

            {/* Title Color */}
            <div>
              <label className="block mb-2">Title Color</label>
              <ColorPicker
                value={widgetConfig.titleColor}
                onChange={(color) => setValue("titleColor", color)}
              />
            </div>

            {/* Date Color */}
            <div>
              <label className="block mb-2">Date Color</label>
              <ColorPicker
                value={widgetConfig.dateColor}
                onChange={(color) => setValue("dateColor", color)}
              />
            </div>

            {/* Content Color */}
            <div>
              <label className="block mb-2">Content Color</label>
              <ColorPicker
                value={widgetConfig.contentColor}
                onChange={(color) => setValue("contentColor", color)}
              />
            </div>

            {/* Product Color */}
            <div>
              <label className="block mb-2">Product Color</label>
              <ColorPicker
                value={widgetConfig.productColor}
                onChange={(color) => setValue("productColor", color)}
              />
            </div>

            {/* Star Fill */}
            <div>
              <label className="block mb-2">Star Fill</label>
              <ColorPicker
                value={widgetConfig.starFillColor}
                onChange={(color) => setValue("starFillColor", color)}
              />
            </div>

            {/* Empty Star */}
            <div>
              <label className="block mb-2">Empty Star</label>
              <ColorPicker
                value={widgetConfig.emptyStarColor}
                onChange={(color) => setValue("emptyStarColor", color)}
              />
            </div>

          </form>
        </Card>
      )}

      {/* Preview */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
        {lastReviews?.map((review) => (
          <ReviewCardWidget
            key={review.id}
            review={review}
            config={widgetConfig}
          />
        ))}
      </div>
    </div>
  );
};
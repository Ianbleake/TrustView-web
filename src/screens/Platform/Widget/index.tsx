import { Button } from "@/components/ui/button";
import useLastReviews from "@/hooks/reviews/useLastReviews";
import { Pencil, Save } from "lucide-react";
import React, { useState } from "react";
import { ReviewCardWidget } from "./ReviewCardWidget";

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

  const [widgetConfig, setWidgetConfig] = useState<WidgetStyles>({
    border: "lg",
    background: "bg-white",
    avatarGradient: true,
    avatarBackground: "bg-orange-500",
    titleColor: "text-gray-900",
    dateColor: "text-gray-500",
    contentColor: "text-gray-900",
    productColor: "text-orange-600",
    starBodyColor: "",
    starFillColor: "text-yellow-500",
    emptyStarColor: "text-gray-300",
    showCount: true,
    starsSize: "md",
  });

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
          onClick={() => setEdit((prev) => !prev)}
        >
          {edit ? "Guardar Cambios" : "Editar Widget"}
          {edit ? <Save /> : <Pencil />}
        </Button>
      </div>

      {/* Editor */}
      {edit && (
  <div className="w-full bg-muted/40 rounded-xl p-6 grid grid-cols-1 sm:grid-cols-3 gap-6">

    {/* Border */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Border radius</label>
      <select
        value={widgetConfig.border}
        onChange={(e) =>
          setWidgetConfig((prev) => ({
            ...prev,
            border: e.target.value as WidgetStyles["border"],
          }))
        }
        className="border rounded-md p-2 bg-background"
      >
        <option value="none">None</option>
        <option value="sm">Small</option>
        <option value="md">Medium</option>
        <option value="lg">Large</option>
      </select>
    </div>

    {/* Background */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Background class</label>
      <input
        type="text"
        value={widgetConfig.background}
        onChange={(e) =>
          setWidgetConfig((prev) => ({
            ...prev,
            background: e.target.value,
          }))
        }
        className="border rounded-md p-2"
        placeholder="bg-white / bg-zinc-900"
      />
    </div>

    {/* Avatar background */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Avatar Background</label>
      <input
        type="text"
        value={widgetConfig.avatarBackground}
        onChange={(e) =>
          setWidgetConfig((prev) => ({
            ...prev,
            avatarBackground: e.target.value,
          }))
        }
        className="border rounded-md p-2"
        placeholder="bg-orange-500"
      />
    </div>

    {/* Title Color */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Title Color</label>
      <input
        type="text"
        value={widgetConfig.titleColor}
        onChange={(e) =>
          setWidgetConfig((prev) => ({
            ...prev,
            titleColor: e.target.value,
          }))
        }
        className="border rounded-md p-2"
        placeholder="text-gray-900"
      />
    </div>

    {/* Date Color */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Date Color</label>
      <input
        type="text"
        value={widgetConfig.dateColor}
        onChange={(e) =>
          setWidgetConfig((prev) => ({
            ...prev,
            dateColor: e.target.value,
          }))
        }
        className="border rounded-md p-2"
        placeholder="text-gray-500"
      />
    </div>

    {/* Content Color */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Content Color</label>
      <input
        type="text"
        value={widgetConfig.contentColor}
        onChange={(e) =>
          setWidgetConfig((prev) => ({
            ...prev,
            contentColor: e.target.value,
          }))
        }
        className="border rounded-md p-2"
        placeholder="text-gray-900"
      />
    </div>

    {/* Product Color */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Product Color</label>
      <input
        type="text"
        value={widgetConfig.productColor}
        onChange={(e) =>
          setWidgetConfig((prev) => ({
            ...prev,
            productColor: e.target.value,
          }))
        }
        className="border rounded-md p-2"
        placeholder="text-orange-600"
      />
    </div>

    {/* Star Fill Color */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Star Fill Color</label>
      <input
        type="text"
        value={widgetConfig.starFillColor}
        onChange={(e) =>
          setWidgetConfig((prev) => ({
            ...prev,
            starFillColor: e.target.value,
          }))
        }
        className="border rounded-md p-2"
        placeholder="text-yellow-500"
      />
    </div>

    {/* Empty Star Color */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Empty Star Color</label>
      <input
        type="text"
        value={widgetConfig.emptyStarColor}
        onChange={(e) =>
          setWidgetConfig((prev) => ({
            ...prev,
            emptyStarColor: e.target.value,
          }))
        }
        className="border rounded-md p-2"
        placeholder="text-gray-300"
      />
    </div>

    {/* Stars Size */}
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium">Stars Size</label>
      <select
        value={widgetConfig.starsSize}
        onChange={(e) =>
          setWidgetConfig((prev) => ({
            ...prev,
            starsSize: e.target.value as WidgetStyles["starsSize"],
          }))
        }
        className="border rounded-md p-2"
      >
        <option value="sm">Small</option>
        <option value="md">Medium</option>
        <option value="lg">Large</option>
      </select>
    </div>

    {/* Show Count */}
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        checked={widgetConfig.showCount}
        onChange={(e) =>
          setWidgetConfig((prev) => ({
            ...prev,
            showCount: e.target.checked,
          }))
        }
      />
      <label className="text-sm font-medium">
        Mostrar valor numérico
      </label>
    </div>

  </div>
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
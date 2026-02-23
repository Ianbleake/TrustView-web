import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { Bold, Italic, Pencil, Save, Underline } from "lucide-react";
import { ColorPicker } from "./ColorPicker";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ReviewCardWidget } from "./ReviewCardWidget";
import useLastReviews from "@/hooks/reviews/useLastReviews";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { merge } from "@/utils/mergeStyles";
import { getTextStyleClasses } from "@/utils/getTextStyleClasses";

export const Widget = (): React.ReactElement => {

  const [edit, setEdit] = useState(false);
  const { lastReviews } = useLastReviews();

  const { register, handleSubmit, setValue, watch } =
  useForm<WidgetStyles>({
    defaultValues: {
      sectionTitle: "Reseñas de nuestros clientes",
      sectionTitleStyle: {
        bold: true,
        italic: false,
        underline: false,
      },

      border: "lg",
      background: "#ffffff",

      avatarGradient: false,
      avatarBackground: "#f97316",
      avatarTextColor: "#ffffff",
      avatarContrastColor: "#fbbf24",

      titleColor: "#111827",
      titleStyle: {
        bold: true,
        italic: false,
        underline: false,
      },

      dateColor: "#6b7280",

      contentColor: "#111827",
      contentStyle: {
        bold: false,
        italic: false,
        underline: false,
      },

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

      {edit && (
        <Card className="p-6">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="flex flex-row items-center justify-between gap-2">

              <div className="flex flex-col gap-2">
                <Label>
                  Título de Widget
                </Label>
                <Input
                  className="w-80"
                  placeholder="Título de Widget"
                  {...register("sectionTitle")}
                />
              </div>

              <ToggleGroup
                type="multiple"
                variant="outline"
                className="mt-5"
                value={[
                  widgetConfig.sectionTitleStyle.bold && "bold",
                  widgetConfig.sectionTitleStyle.italic && "italic",
                  widgetConfig.sectionTitleStyle.underline && "underline",
                ].filter(Boolean) as string[]}
                onValueChange={(values) => {
                  setValue("sectionTitleStyle", {
                    bold: values.includes("bold"),
                    italic: values.includes("italic"),
                    underline: values.includes("underline"),
                  });
                }}
              >
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                  <Bold />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                  <Italic />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Toggle underline">
                  <Underline />
                </ToggleGroupItem>
              </ToggleGroup>

            </div>

            <div className="flex flex-row items-center gap-4">

              <div className="flex flex-col gap-3">
                <Label>Redondeado de las tarjetas</Label>
                <Select
                  value={widgetConfig.border}
                  onValueChange={(value) =>
                    setValue("border", value as WidgetStyles["border"])
                  }
                >
                  <SelectTrigger className="w-60">
                    <SelectValue placeholder="Redondeado de las tarjetas" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="none">None</SelectItem>
                    <SelectItem value="sm">Small</SelectItem>
                    <SelectItem value="md">Medium</SelectItem>
                    <SelectItem value="lg">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <Label>Color de fondo</Label>
                <ColorPicker
                  value={widgetConfig.background}
                  onChange={(color) => setValue("background", color)}
                />
              </div>
            </div>

            <div className="flex flex-1 col-span-2">
              <h2 className="text-xl font-semibold text-gray-900">Estilos de estrellas de calificacion</h2>
            </div>

            <div className="flex flex-row items-center gap-4">

              <div className="flex flex-col gap-3">
                <Label>Tamaño de las estrellas</Label>
                <Select
                  value={widgetConfig.starsSize}
                  onValueChange={(value) =>
                    setValue("starsSize", value as WidgetStyles["starsSize"])
                  }
                >

                  <SelectTrigger className="w-60">
                    <SelectValue placeholder="Tamaño de las estrellas" />
                  </SelectTrigger>

                  <SelectContent position="popper">
        
                    <SelectItem className='cursor-pointer' value="sm">Small</SelectItem>
                    <SelectItem className='cursor-pointer' value="md">Medium</SelectItem>
                    <SelectItem className='cursor-pointer' value="lg">Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-1 flex-row mt-5 items-center justify-between">
                <Label>Mostrar conteo de estrellas</Label>
                <Switch
                  size="lg"
                  checked={widgetConfig.showCount}
                  onCheckedChange={(checked) =>
                    setValue("showCount", checked)
                  }
                />
              </div>

            </div>

            <div>
              <Label className="block mb-2">Interior de estrella</Label>
              <ColorPicker
                value={widgetConfig.starFillColor}
                onChange={(color) => setValue("starFillColor", color)}
              />
            </div>


            <div>
              <Label className="block mb-2">Borde de estrella</Label>
              <ColorPicker
                value={widgetConfig.starBodyColor}
                onChange={(color) => setValue("starBodyColor", color)}
              />
            </div>

            
            <div>
              <Label className="block mb-2">Estrella vacia</Label>
              <ColorPicker
                value={widgetConfig.emptyStarColor}
                onChange={(color) => setValue("emptyStarColor", color)}
              />
            </div>

            <div className="flex flex-1 col-span-2">
              <h2 className="text-xl font-semibold text-gray-900">Estilos de la tarjeta de reseña</h2>
            </div>

            <div className="flex flex-row flex-wrap items-center gap-6">

              <div className="flex flex-col justify-center flex-1">
                <Label className="block mb-2">Color de fondo de avatar</Label>
                <ColorPicker
                  value={widgetConfig.avatarBackground}
                  onChange={(color) => setValue("avatarBackground", color)}
                />
              </div>

              <div className="flex flex-row gap-4 items-center justify-center mt-4">
                <Label>¿Degradado en avatar?</Label>
                <Switch
                  size="lg"
                  onCheckedChange={(checked) =>
                    setValue("avatarGradient", checked)
                  }
                  checked={widgetConfig.avatarGradient}
                />
              </div>

              {
                widgetConfig.avatarGradient && (
                  <div className="flex flex-col justify-center flex-1">
                    <Label className="block mb-2">Color de contraste de avatar</Label>
                    <ColorPicker
                      value={widgetConfig.avatarContrastColor}
                      onChange={(color) => setValue("avatarContrastColor", color)}
                    />
                  </div>
                )
              }
            </div>

            <div>
              <Label className="block mb-2">Color de letra interior del avatar</Label>
              <ColorPicker
                value={widgetConfig.avatarTextColor}
                onChange={(color) => setValue("avatarTextColor", color)}
              />
            </div>

            <div className="flex flex-row items-center justify-between gap-3">

              <div className="flex flex-col flex-1">
                <Label className="block mb-2">Color del titulo</Label>
                <ColorPicker
                  value={widgetConfig.titleColor}
                  onChange={(color) => setValue("titleColor", color)}
                />
              </div>

              <ToggleGroup
                type="multiple"
                className="mt-5"
                variant="outline"
                value={[
                  widgetConfig.titleStyle.bold && "bold",
                  widgetConfig.titleStyle.italic && "italic",
                  widgetConfig.titleStyle.underline && "underline",
                ].filter(Boolean) as string[]}
                onValueChange={(values) => {
                  setValue("titleStyle", {
                    bold: values.includes("bold"),
                    italic: values.includes("italic"),
                    underline: values.includes("underline"),
                  });
                }}
              >
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                  <Bold />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                  <Italic />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Toggle underline">
                  <Underline />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            <div>
              <Label className="block mb-2">Color de fecha</Label>
              <ColorPicker
                value={widgetConfig.dateColor}
                onChange={(color) => setValue("dateColor", color)}
              />
            </div>
            
            <div className="flex flex-row items-center justify-between gap-3">
              <div className="flex flex-col flex-1">
                <Label className="block mb-2">Color de contenido</Label>
                <ColorPicker
                  value={widgetConfig.contentColor}
                  onChange={(color) => setValue("contentColor", color)}
                />
              </div>

              <ToggleGroup
                type="multiple"
                className="mt-5"
                variant="outline"
                value={[
                  widgetConfig.contentStyle.bold && "bold",
                  widgetConfig.contentStyle.italic && "italic",
                  widgetConfig.contentStyle.underline && "underline",
                ].filter(Boolean) as string[]}
                onValueChange={(values) => {
                  setValue("contentStyle", {
                    bold: values.includes("bold"),
                    italic: values.includes("italic"),
                    underline: values.includes("underline"),
                  });
                }}
              >
                <ToggleGroupItem value="bold" aria-label="Toggle bold">
                  <Bold />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Toggle italic">
                  <Italic />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Toggle underline">
                  <Underline />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>



            <div>
              <Label className="block mb-2">Color de nombre de producto</Label>
              <ColorPicker
                value={widgetConfig.productColor}
                onChange={(color) => setValue("productColor", color)}
              />
            </div>



          </form>
        </Card>
      )}

      <div className="flex flex-col gap-8">

        <div className="">
        <h1
          className={merge(
            "text-2xl",
            getTextStyleClasses(widgetConfig.sectionTitleStyle)
          )}
        >
            { widgetConfig.sectionTitle }
          </h1>
        </div>

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
    </div>
  );
};
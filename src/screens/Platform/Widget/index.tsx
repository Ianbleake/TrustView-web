import { Widgets } from "./Widgets";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { ColorPicker } from "./ColorPicker";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DisabledSave } from "./DisabledSave";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { useSessionStorage } from "@/storage/authStorage";
import useUpdateWidget from "@/hooks/widget/useUpdateWidget";
import { ArrowLeft, ArrowRight, Ban, Bold, Italic, Pencil, Save, Sidebar, Underline } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { merge } from "@/utils/mergeStyles";

export const Widget = (): React.ReactElement => {

  const [edit, setEdit] = useState(false);
  const [ popup, setPopup ] = useState(false);
  const [ popPosition, setPopPosition] = useState(false)

  const { store, profile } = useSessionStorage();

  const { register, handleSubmit, setValue, watch } = useForm<WidgetStyles>({
    defaultValues: {
      sectionTitle: store?.widget_config.sectionTitle,
      sectionTitleStyle: {
        bold: store?.widget_config.sectionTitleStyle.bold,
        italic: store?.widget_config.sectionTitleStyle.italic,
        underline: store?.widget_config.sectionTitleStyle.underline,
      },

      border: store?.widget_config.border || "md",
      background: store?.widget_config.background || "#ffffff",

      avatarGradient: store?.widget_config.avatarGradient || false,
      avatarBackground: store?.widget_config.avatarBackground || "#fbbf24",
      avatarTextColor: store?.widget_config.avatarTextColor || "#111827",
      avatarContrastColor: store?.widget_config.avatarContrastColor || "#f59e0b",

      titleColor: store?.widget_config.titleColor || "#111827",
      titleStyle: {
        bold: store?.widget_config.titleStyle.bold || false,
        italic: store?.widget_config.titleStyle.italic || false,
        underline: store?.widget_config.titleStyle.underline || false,
      },

      dateColor: store?.widget_config.dateColor || "#6b7280",

      contentColor: store?.widget_config.contentColor || "#374151",
      contentStyle: {
        bold: store?.widget_config.contentStyle.bold || false,
        italic: store?.widget_config.contentStyle.italic || false,
        underline: store?.widget_config.contentStyle.underline || false,
      },

      productColor: store?.widget_config.productColor || "#1f2937",

      starBodyColor: store?.widget_config.starBodyColor || "#fbbf24",
      starFillColor: store?.widget_config.starFillColor || "#f59e0b",
      emptyStarColor: store?.widget_config.emptyStarColor || "#e5e7eb",

      showCount: store?.widget_config.showCount || false,
      starsSize: store?.widget_config.starsSize || "md",
    },
  });

  const widgetConfig = watch();

  const { mutate:UpdateWidgetConfig, isPending } = useUpdateWidget();

  const onSubmit = (data: WidgetStyles):void => {
    UpdateWidgetConfig({
      store_id: store?.id || "",
      widget_config: data,
    },{
      onSuccess: () => {
        setEdit(false);
      }
    })
  };

  const isPro = profile?.billing === "pro";
  const isEditing = edit;

  return (
    <div className={merge("flex flex-col gap-6 w-full animate-fade-in", popup ? "relative" : "")}>
      
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <div>
          <h1 className="text-2xl font-bold text-foreground">
            Configuración Widget
          </h1>
          <p className="text-muted-foreground">
            Personaliza la apariencia en tiempo real
          </p>
        </div>

        <div className="flex flex-row-reverse gap-4">

          {!isEditing && (
            <Button
              variant="gradient"
              size="sm"
              className="flex items-center gap-3 min-w-45"
              onClick={() => setEdit(true)}
            >
              Editar Widget
              <Pencil />
            </Button>
          )}

          {isEditing && (
            isPro ? (
              <Button
                variant="gradient"
                size="sm"
                className="flex items-center gap-3 min-w-45"
                onClick={handleSubmit(onSubmit)}
                disabled={isPending}
              >
                {isPending ? (
                  <Spinner />
                ) : (
                  <>
                    Guardar Cambios
                    <Save />
                  </>
                )}
              </Button>
            ) : (
              <DisabledSave />
            )
          )}

          
          {isEditing && (
            <Button
              variant="secondary"
              size="sm"
              onClick={() => setEdit(false)}
            >
              Cancelar
              <Ban />
            </Button>
          )}

        </div>
      </div>

      {edit && (

        <Card
          className={merge(
            "p-6 animate-fade-in transition-all duration-300",
            popup
              ? "sticky top-3 right-0 w-120 h-180 z-50 shadow-2xl pt-20 -mt-180"
              : ""
          )}
        >

          <div className={merge("", popup ? "flex w-full items-center justify-between pr-12 py-3 fixed top-2" : "")}> 
            <button
              onClick={() => setPopup(!popup)}
              className={merge("h-10 w-10 border border-gray-200 flex items-center justify-center rounded-lg shadow-amber-600", popup ? "shadow-inner" : "shadow")}
            >
              <Sidebar className="text-orange-600 cursor-pointer"/>
            </button>

            {
              popup ? ( 
                <></>
              ) : (
                <button
                  onClick={() => setPopPosition(!popPosition)}
                  className={merge("h-10 w-10 border border-gray-200 flex items-center justify-center rounded-lg shadow-amber-600", popup ? "shadow-inner" : "shadow")}
                >
                  {
                    popPosition ? (
                      <ArrowLeft className="text-orange-600 cursor-pointer"/>
                    ) : (
                      <ArrowRight className="text-orange-600 cursor-pointer"/>
                    )
                  }
                </button>
              )
            }
          </div>

          <form className={merge("", popup ? "flex flex-col gap-6 overflow-y-auto" : "grid grid-cols-1  gap-6 md:grid-cols-2")}>

            <div className={"flex flex-row items-center justify-between gap-2"}>

              <div className="flex flex-col gap-2">
                <Label>
                  Título de Widget
                </Label>
                <Input
                  className={ popup ? "w-70" : "w-80"}
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

            <div className={merge("flex  gap-4", popup ? "flex-col" : "flex-row items-center")}>

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


      <Widgets widgetConfig={widgetConfig}/>

    </div>
  );
};
import { toast } from "sonner";

const TEMPLATE_HEADERS = [
  "product_id",
  "product_name",
  "product_url",
  "author_name",
  "rating",
  "content",
  "approved",
];

export const handleDownloadTemplate = ():void => {
  const csvContent = [
    TEMPLATE_HEADERS.join(","),
    "123,Producto ejemplo,https//:wwww.mitienda.com/productos/producto-ejemplo,Juan Perez,5,Excelente producto,true"
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = "reviews_template.csv";
  link.click();

  toast.info("Plantilla descargada. Puedes usarla para importar tus reseñas.");
};

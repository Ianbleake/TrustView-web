import React from 'react'
import { merge } from "@/utils/mergeStyles";
import { toast } from "sonner";
import { Dock, Hash, Store } from 'lucide-react'
import { useSessionStorage } from "@/storage/authStorage";

export const StoreInfo = ():React.ReactElement => {

  const { store } = useSessionStorage()

  return (
  <div className="min-h-15 w-full grid grid-cols-2 gap-6 pt-6 px-8 ">

    <div className="w-full h-fit flex flex-row items-center justify-start gap-2">

      <div className="flex items-center justify-center">
        <Store className="h-6 w-6 text-orange-600"/>
      </div>

      <div className="flex flex-row items-center gap-2">
        <h3 className="font-heading font-semibold text-lg text-orange-600">Tienda:</h3>
        <p className="font-normal text-gray-500 text-lg">{ store?.store_name ?? "-"}</p>
      </div>

    </div>

    <div className="w-full h-fit flex flex-row items-center justify-start gap-2">

      <div className="flex items-center justify-center">
        <Hash className="h-6 w-6 text-orange-600"/>
      </div>

      <div className="flex flex-row items-center gap-2">
        <h3 className="font-heading font-semibold text-lg text-orange-600">ID de tienda nube:</h3>
        <p
          className={merge("font-normal text-gray-500 text-lg hover:text-gray-700 transition-colors", store?.tienda_nube_user_id ? "cursor-pointer" : "")}
          onClick={() => {
            if (!store?.tienda_nube_user_id) return;

            navigator.clipboard.writeText(store.tienda_nube_user_id);
            toast.info("ID copiado al portapapeles");
          }}
        >
          {store?.tienda_nube_user_id ?? "-"}
        </p>
      </div>
    </div>

    <div className="w-full h-fit flex flex-row items-center justify-start gap-2">

      <div className="flex items-center justify-center">
        <Dock className="h-6 w-6 text-orange-600"/>
      </div>

      <div className="flex flex-row items-center gap-2">
        <h3 className="font-heading font-semibold text-lg text-orange-600">Permisos:</h3>
        <p className="font-normal text-gray-500 text-lg">{ store?.scope ?? "-"}</p>
      </div>

    </div>

  </div>
  )
}
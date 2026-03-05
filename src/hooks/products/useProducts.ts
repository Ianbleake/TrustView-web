import { getProducts } from "@/services/products/getProducts";
import { useSessionStorage } from "@/storage/authStorage";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

export default function useProducts(): { isLoading: boolean, products: Product[] } {

  const { store } = useSessionStorage();

  const productsQuery = useQuery({
    queryKey: ["getProducts", store?.id ],
    queryFn: ({ queryKey }) => getProducts(queryKey[1] as string),
    enabled: !!store?.id,
    staleTime: 1000 * 60 * 5, // 5 minutos
    refetchOnWindowFocus: true,
  })

  useEffect(() => {
    if(productsQuery.isError){
      toast.error(productsQuery.error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[productsQuery.isError])

  return {
    isLoading: productsQuery.isLoading,
    products: productsQuery.data?.data as Product[],
  }

}
import { getProduct } from "@/services/products/getProduct"
import { useQuery } from "@tanstack/react-query"
import { useEffect } from "react";
import { toast } from "sonner";

export default function useProduct (productId: string): { isLoading: boolean, product: Product } {

  const productQuery = useQuery({
    queryKey: ["getProduct", productId ],
    queryFn: ({ queryKey }) => getProduct(queryKey[1]),
    enabled: !!productId,
    staleTime: 1000 * 60 * 5, // 5 minutos
    refetchOnWindowFocus: true,
  })

  useEffect(() => {
    if(productQuery.isError){
      toast.error(productQuery.error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[productQuery.isError])

  return {
    isLoading: productQuery.isLoading,
    product: productQuery.data?.data as Product,
  }
}
import { getStoreAnalytics } from "@/services/analytics/getStoreAnalytics";
import { useSessionStorage } from "@/storage/authStorage";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

export default function useStoreAnalytics(): { isLoading: boolean } {

  const { store } = useSessionStorage();
  
  const storeAnalyticsQuery = useQuery({
    queryKey: ["store-analytics", store?.id],
    queryFn: ({ queryKey }) => getStoreAnalytics(queryKey[1] as string),
    enabled: !!store?.id,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 30,
  });

  useEffect(() => {
    if(storeAnalyticsQuery.isError){
      toast.error(storeAnalyticsQuery.error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[storeAnalyticsQuery.isError]);

  useEffect(() => {
    if(storeAnalyticsQuery.data){
      toast.success("Store analytics loaded successfully");
    }    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[storeAnalyticsQuery.data]);

  return {
    isLoading: storeAnalyticsQuery.isLoading
  };
}

//TODO: Create a storage for the store analytics and set the data on the useEffect
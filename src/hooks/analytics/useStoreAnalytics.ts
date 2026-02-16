import { toast } from "sonner";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSessionStorage } from "@/storage/authStorage";
import { useAnalyticsStorage } from "@/storage/analyticsStorage";
import { getStoreAnalytics } from "@/services/analytics/getStoreAnalytics";

export default function useStoreAnalytics(): { isLoading: boolean } {

  const { store } = useSessionStorage();
  const { setAnalytics } = useAnalyticsStorage();

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
      setAnalytics(storeAnalyticsQuery.data.data)
    }    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[storeAnalyticsQuery.data]);

  return {
    isLoading: storeAnalyticsQuery.isLoading
  };
}
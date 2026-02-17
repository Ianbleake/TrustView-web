import { getLastReviews } from "@/services/reviews/getLastReviews";
import { useSessionStorage } from "@/storage/authStorage";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

export default function useLastReviews (): { isLoading: boolean, lastReviews: Review[] } {

  const { store } = useSessionStorage();

  const getReviewsQuery = useQuery<GetReviewsResponse>({
    queryKey: ["reviews","all", store?.id],
    queryFn: ({ queryKey }) => getLastReviews(queryKey[2] as string),
    enabled: !!store?.id,
    staleTime: 1000 * 60 * 5, // 5 minutos
    refetchOnWindowFocus: true,
  })

  useEffect(() => {
    if(getReviewsQuery.isError){
      toast.error(getReviewsQuery.error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[getReviewsQuery.isError])

  return {
    isLoading: getReviewsQuery.isLoading,
    lastReviews: getReviewsQuery.data?.data as Review[],
  };
}
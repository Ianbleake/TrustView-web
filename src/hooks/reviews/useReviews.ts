import { getReviews } from "@/services/reviews/getReviews";
import { useSessionStorage } from "@/storage/authStorage";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

export default function useReviews (): { isLoading: boolean, reviews: Review[] } {

  const { store } = useSessionStorage();

  const getReviewsQuery = useQuery<GetReviewsResponse>({
    queryKey: ["reviews","all", store?.id],
    queryFn: ({ queryKey }) => getReviews(queryKey[2] as string),
    staleTime: 1000 * 60 * 5, // 5 minutos
    refetchOnWindowFocus: true,
    enabled: !!store?.id 
  })

  useEffect(() => {
    if(getReviewsQuery.isError){
      toast.error(getReviewsQuery.error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[getReviewsQuery.isError])

  return {
    isLoading: getReviewsQuery.isLoading,
    reviews: getReviewsQuery.data?.data as Review[],
  };
}
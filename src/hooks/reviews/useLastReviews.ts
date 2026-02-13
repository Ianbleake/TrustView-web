import { getLastReviews } from "@/services/reviews/getLastReviews";
import { useSessionStorage } from "@/storage/authStorage";
import { useReviewStorage } from "@/storage/reviewStorage";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

export default function useLastReviews (): { isLoading: boolean } {

  const { store } = useSessionStorage();
  const { setLastReviews } = useReviewStorage();

  const getReviewsQuery = useQuery<GetReviewsResponse>({
    queryKey: ["reviews","all", store?.id],
    queryFn: ({ queryKey }) => getLastReviews(queryKey[2] as string),
    enabled: !!store?.id,
    staleTime: 1000 * 60 * 30,
    gcTime: 1000 * 60 * 30,
  })

  useEffect(() => {
    if(getReviewsQuery.isError){
      toast.error(getReviewsQuery.error.message);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[getReviewsQuery.isError])

  useEffect(() => {
    if(getReviewsQuery.data){
      setLastReviews(getReviewsQuery.data.data)
    }    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[getReviewsQuery.data])

  return {
    isLoading: getReviewsQuery.isLoading
  };
}
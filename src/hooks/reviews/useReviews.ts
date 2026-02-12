import { getReviews } from "@/services/reviews/getReviews";
import { useSessionStorage } from "@/storage/authStorage";
import { useReviewStorage } from "@/storage/reviewStorage";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner";

export default function useReviews (): { isLoading: boolean } {

  const { store } = useSessionStorage();
  const { setReviews } = useReviewStorage();

  const getReviewsQuery = useQuery<GetReviewsResponse>({
    queryKey: ["reviews","all", store?.id],
    queryFn: ({ queryKey }) => getReviews(queryKey[2] as string),
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
      setReviews(getReviewsQuery.data.data)
    }    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[getReviewsQuery.data])

  return {
    isLoading: getReviewsQuery.isLoading
  };
}
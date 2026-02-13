import { requester } from "../requester";

export async function getLastReviews (storeId: string): Promise<GetLastReviewsResponse> {
  return requester({
    method: "get",
    endpoint: `/reviews/${storeId}/last`
  })
}
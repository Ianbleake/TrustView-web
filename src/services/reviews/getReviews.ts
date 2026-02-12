import { requester } from "../requester";

export async function getReviews (storeId:string): Promise<GetReviewsResponse> {
  return requester({
    method: "get",
    endpoint: `/reviews/${storeId}`
  })
}
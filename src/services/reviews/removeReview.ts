import { requester } from "../requester";

export async function removeReview(reviewId: string): Promise<RemoveReviewResponse>{

  return requester({
    method: "delete",
    endpoint: `/reviews/remove/${reviewId}`,
  })
}
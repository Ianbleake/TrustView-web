import { requester } from "../requester";

export async function hideReview(payload: hideReviewPayload): Promise<hideReviewResponse>{
  return requester({
    method: "post",
    endpoint: "/reviews/rejectReview",
    payload
  })
}
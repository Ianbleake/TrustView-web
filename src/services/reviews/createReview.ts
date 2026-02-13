import { requester } from "../requester";

export async function createReview(payload: NewReviewPayload): Promise<NewReviewResponse>{
  return requester({
    method: "post",
    endpoint: "/reviews/newReview",
    payload,
  })
}
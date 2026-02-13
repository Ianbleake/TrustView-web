import { requester } from "../requester";

export async function approbeReview(payload: approbeReviewPayload): Promise<approbeReviewResponse>{
  return requester({
    method: "post",
    endpoint: "/reviews/approveReview",
    payload
  })
}
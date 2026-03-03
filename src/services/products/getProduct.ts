import { requester } from "../requester";

export async function getProduct (productId: string): Promise<GetProductResponse> {
  return requester({
    method: "get",
    endpoint: `/products/${productId}`
  })
}
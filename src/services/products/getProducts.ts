import { requester } from "../requester";

export async function getProducts(storeId: string): Promise<GetProductsResponse> {
  return requester({
    method: "get",
    endpoint: `/products/all/${storeId}`,
  })
}
import { requester } from "../requester";

export async function getStoreAnalytics(storeId: string): Promise<StoreAnalyticsResponse>{
  return requester({
    method: "get",
    endpoint: `/analytics/${storeId}`,
  })
};
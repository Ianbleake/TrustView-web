import { requester } from "../requester";

export async function updateWidget (payload:updateWidgetPayload): Promise<UpdateWidgetResponse> {
  return requester({
    method: "patch",
    endpoint: "/store/updateWidget",
    payload: payload,
  })
}
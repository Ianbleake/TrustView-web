import { requester } from "../requester";

export async function updateSettings (payload:UpdateSettingsPayload): Promise<UpdateSettingsResponse> {
  return requester({
    method: "post",
    endpoint: "/settings",
    payload,
  })
}
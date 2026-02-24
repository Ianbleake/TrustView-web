import { requester } from "../requester";

export async function updateBanner(payload: UpdateBannerPayload ): Promise<UpdateBannerResponde> {

  return requester({
    method: "post",
    endpoint: "/profile/updateBanner",
    payload,
  })
}
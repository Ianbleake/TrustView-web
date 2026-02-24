import { requester } from "../requester";

export async function updateAvatar(payload: UpdateAvatarPayload): Promise<UpdateAvatarResponde> {
  return requester({
    method: "post",
    endpoint: "/profile/updateAvatar",
    payload,
  })
}
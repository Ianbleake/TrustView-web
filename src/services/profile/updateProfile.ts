import { requester } from "../requester";

export async function updateProfile(payload: UpdateProfileInfoPayload): Promise<UpdateProfileInfoResponde> {

  return requester({
    method: "post",
    endpoint: "/profile/update",
    payload,
  })
}
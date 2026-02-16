import { requester } from "../requester";

export async function importReviews(
  payload: ImportPayload
): Promise<ImportResponse> {

  const formData = new FormData();
  formData.append("file", payload.file);
  formData.append("store_id", payload.store_id);

  return requester({
    method: "post",
    endpoint: "/reviews/importReviews",
    payload: formData,
  });
}

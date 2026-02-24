
type UpdateAvatarPayload = {
  user_id: string;
  color: string;
  accent_color: string | null;
}

type UpdateAvatarResponde = {
  success: boolean;
  data: {
    id: string;
    color: string;
    accent_color: string | null;
  },
  meta: undefined;
}
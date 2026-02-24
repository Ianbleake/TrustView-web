
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

type UpdateBannerPayload = {
  user_id: string;
  banner: string;
  banner_accent_color: string | null;
}

type UpdateBannerResponde = {
  success: boolean;
  data: {
    id: string;
    banner: string;
    banner_accent_color: string | null;
  },
  meta: undefined;
}

type UpdateProfileInfoPayload = {
  user_id: string;
  first_name: string;
  last_name: string;
}

type UpdateProfileInfoResponde = {
  success: boolean;
  data: {
    id: string;
    first_name: string;
    last_name: string;
  },
  meta: undefined;
}
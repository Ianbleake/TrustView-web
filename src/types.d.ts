type Billing = "free" | "base" | "Pro"

type Profile = {
  id: string;
  auth_id: string;
  first_name: string;
  last_name: string;
  email: string;
  billing: Billing;
  avatar_url: string | null;
  banner_url: string | null;
  created_at: Date;
  updated_at: Date;
  color: string | null;
}

type Store = {
  id: string;
  profile_id: string;
  tienda_nube_user_id: string;
  access_token: string;
  scope: string;
  store_name: string;
  status: string;
  created_at: Date;
  installed_at: Date;
}
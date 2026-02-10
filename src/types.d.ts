type Billing = "free" | "base" | "Pro"

type Profile = {
  id: string;
  authId: string;
  firstName: string;
  lastName: string;
  email: string;
  billing: Billing;
  avatarUrl: string;
  bannerUrl: string;
  createdAt: Date;
  updatedAt: Date;
}

type Store = {
  id: string;
  profileId: string;
  tiendaNubeId: string;
  storeAccessToken: string;
  scope: string;
  storeName: string;
  status: string;
  createdAt: Date;
  installedAt: Date;
}
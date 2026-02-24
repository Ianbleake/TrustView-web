type Billing = "free" | "base" | "pro"
type UserRole = "admin" | "user"

type Settings = {
  notifications: {
    newReviews: boolean;
    badReviews: boolean;
    weeklySummary: boolean;
  }
}

type Profile = {
  id: string;
  role: UserRole;
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
  accent_color: string | null;
  banner: string | null;
  banner_accent_color: string | null;
  settings: Settings;
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
  widget_config: WidgetStyles;
}

type StarRating = {
  stars: number;
  count: number;
  percentage: number;
}

type StoreAnalytics = {
  rating: {
    average: number;
    trend: number;
  },
  totalReviews: {
    count: number;
    trend: number;
  },
  monthlyReviews: {
    count: number;
    trend: number;
  },
  positives: {
    count: number;
    percentage: number;
    trend: number;
  },
  starsRatings: StarRating[];
}
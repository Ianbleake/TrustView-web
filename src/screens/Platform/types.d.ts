type AnalyticValue = {
    title: string;
    value: string | number;
    percentage: string;
    icon: LucideIcon;
    growth: 'positive' | 'negative';
}

type Review = {
    id: string;
    author: string;
    rating: number;
    content: string;
    productId: string;
    product: string;
    date: Date;
    status: ReviewState;
    productUrl: string;
}

type ReviewState = "approved" | "pending" | "rejected"

type TextStyle = {
    bold: boolean;
    italic: boolean;
    underline: boolean;
  };
  
type WidgetStyles = {
  sectionTitle: string;
  sectionTitleStyle: TextStyle;

  border: "sm" | "md" | "lg" | "none";
  background: string;

  avatarGradient: boolean;
  avatarBackground: string;
  avatarContrastColor: string;
  avatarTextColor: string;

  titleColor: string;
  titleStyle: TextStyle;

  dateColor: string;

  contentColor: string;
  contentStyle: TextStyle;

  productColor: string;

  starBodyColor: string;
  starFillColor: string;
  emptyStarColor: string;

  showCount: boolean;
  starsSize: "sm" | "md" | "lg";
};

type Product = {
  id: string; // DB
  productName: string; // DB
  rating: number; // DB
  product_external_id: string; // DB
  productImg?: string; // DB
  productUrl?: string; // DB
  reviews: ProductReviewsData; // Back
}

type ProductReviewsData = {
  reviews: Review[]; // Back
  total: number; // Back
  trend: number; // Back
  growth: 'positive' | 'negative'; // Back
  reviewsRatings: StarRating[]; // Back
}
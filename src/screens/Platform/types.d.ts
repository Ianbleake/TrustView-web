type AnalyticValue = {
    title: string;
    value: string | number;
    percentage: string;
    icon: LucideIcon;
    growth: 'positive' | 'negative';
}

type Review = {
    id: string, 
    author: string,
    rating: number,
    content: string,
    productId: string,
    product: string,
    date: Date,
    status: ReviewState
}

type ReviewState = "approved" | "pending" | "rejected"

type WidgetStyles = {
    border: "sm" | "md" | "lg" | "none",
    background: string,
    avatarGradient: boolean;
    avatarBackground: string;
    titleColor: string;
    dateColor: string;
    contentColor: string;
    productColor: string;
    starBodyColor: string;
    starFillColor: string;
    emptyStarColor: string;
    showCount: boolean;
    starsSize: 'sm' | 'md' | 'lg';
  }
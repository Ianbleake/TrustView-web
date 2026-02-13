type AnalyticValue = {
    title: string;
    value: number;
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

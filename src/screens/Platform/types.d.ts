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
    product: string,
    date: string,
    status: "approved" | "pending" | "rejected"
}
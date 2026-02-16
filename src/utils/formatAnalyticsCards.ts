import { Calendar, MessageSquare, Star, ThumbsUp } from 'lucide-react';

export const formatAnalyticsCards = (analytics: StoreAnalytics): AnalyticValue[] => {
  
  return [
    {
      title: 'Total Reseñas',
      value: analytics.totalReviews.count,
      percentage: analytics.totalReviews.trend > 0 ? `+${analytics.totalReviews.trend}%` : `${analytics.totalReviews.trend}%`,
      icon: MessageSquare,
      growth: analytics.totalReviews.trend >= 0 ? 'positive' : 'negative',
    },
    {
      title: 'Rating Promedio',
      value: analytics.rating.average,
      percentage: analytics.rating.trend > 0 ? `+${analytics.rating.trend}%` : `${analytics.rating.trend}%`,
      icon: Star,
      growth: analytics.rating.trend >= 0 ? 'positive' : 'negative',
    },
    {
      title: 'Reseñas del mes',
      value: analytics.monthlyReviews.count,
      percentage: `${analytics.monthlyReviews.trend > 0 ? '+' : ''}${analytics.monthlyReviews.trend}%`,
      icon: Calendar,
      growth: analytics.monthlyReviews.trend >= 0 ? 'positive' : 'negative',
    },
    {
      title: 'Positivas',
      value: `${(analytics.positives.percentage)}%`,
      percentage: `${analytics.positives.trend > 0 ? '+' : ''}${analytics.positives.trend}%`,
      icon: ThumbsUp,
      growth: analytics.positives.trend >= 0 ? 'positive' : 'negative',
    },
  ];
};
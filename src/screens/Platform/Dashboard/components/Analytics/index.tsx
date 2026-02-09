import React from 'react';
import { AnalyticCard } from './AnalyticCard';
import { Calendar, MessageSquare, Star, ThumbsUp } from 'lucide-react';
import { analyticsBase } from '@/content/Analytics';

//TODO: Refactor move this formating to the hook where fetch the data, and save it on a storage formatted for UI.
const formatAnalyticsCards = (): AnalyticValue[] => {
  return [
    {
      title: 'Total Reseñas',
      value: analyticsBase.totalReviews.count,
      percentage: analyticsBase.totalReviews.trend > 0 ? `+${analyticsBase.totalReviews.trend}%` : `${analyticsBase.totalReviews.trend}%`,
      icon: MessageSquare,
      growth: analyticsBase.totalReviews.trend >= 0 ? 'positive' : 'negative',
    },
    {
      title: 'Rating Promedio',
      value: analyticsBase.rating.average,
      percentage: analyticsBase.rating.trend > 0 ? `+${analyticsBase.rating.trend}%` : `${analyticsBase.rating.trend}%`,
      icon: Star,
      growth: analyticsBase.rating.trend >= 0 ? 'positive' : 'negative',
    },
    {
      title: 'Reseñas del mes',
      value: analyticsBase.monthlyReviews.count,
      percentage: `${analyticsBase.monthlyReviews.trend > 0 ? '+' : ''}${analyticsBase.monthlyReviews.trend}%`,
      icon: Calendar,
      growth: analyticsBase.monthlyReviews.trend >= 0 ? 'positive' : 'negative',
    },
    {
      title: 'Positivas',
      value: analyticsBase.positives.percentage,
      percentage: `${analyticsBase.positives.trend > 0 ? '+' : ''}${analyticsBase.positives.trend}%`,
      icon: ThumbsUp,
      growth: analyticsBase.positives.trend >= 0 ? 'positive' : 'negative',
    },
  ];
};

export const Analytics = (): React.ReactElement => {
  const analyticsValues = formatAnalyticsCards();

  return (
    <div className="w-full flex flex-row gap-2 items-center animate-fade-in">
      {analyticsValues.map((analytic) => (
        <AnalyticCard key={analytic.title} analytic={analytic} />
      ))}
    </div>
  );
};

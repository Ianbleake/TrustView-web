import React from 'react';
import { analyticsBase } from '@/content/Analytics';
import { ChartNoAxesCombined, DollarSign, MessageSquare, Store } from 'lucide-react';
import { AnalyticCard } from '@/screens/Platform/Dashboard/components/Analytics/AnalyticCard';

//TODO: Create the Admin data, Refactor move this formating to the hook where fetch the data, and save it on a storage formatted for UI.
const formatAnalyticsCards = (): AnalyticValue[] => {
  return [
    {
      title: 'Tiendas Activas',
      value: analyticsBase.totalReviews.count,
      percentage: analyticsBase.totalReviews.trend > 0 ? `+${analyticsBase.totalReviews.trend}%` : `${analyticsBase.totalReviews.trend}%`,
      icon: Store,
      growth: analyticsBase.totalReviews.trend >= 0 ? 'positive' : 'negative',
    },
    {
      title: 'Reseñas',
      value: analyticsBase.rating.average,
      percentage: analyticsBase.rating.trend > 0 ? `+${analyticsBase.rating.trend}%` : `${analyticsBase.rating.trend}%`,
      icon: MessageSquare,
      growth: analyticsBase.rating.trend >= 0 ? 'positive' : 'negative',
    },
    {
      title: 'Crecimiento',
      value: analyticsBase.positives.percentage,
      percentage: `${analyticsBase.positives.trend > 0 ? '+' : ''}${analyticsBase.positives.trend}%`,
      icon: ChartNoAxesCombined,
      growth: analyticsBase.positives.trend >= 0 ? 'positive' : 'negative',
    },
    {
      title: 'Facturacion (Mensual)',
      value: analyticsBase.monthlyReviews.count,
      percentage: `${analyticsBase.monthlyReviews.trend > 0 ? '+' : ''}${analyticsBase.monthlyReviews.trend}%`,
      icon: DollarSign,
      growth: analyticsBase.monthlyReviews.trend >= 0 ? 'positive' : 'negative',
    },
  ];
};

export const Analytics = ():React.ReactElement => {
  
  const analyticsValues = formatAnalyticsCards();

  return (
    <div className="w-full flex flex-row gap-2 items-center animate-fade-in" style={{ animationDelay: '200ms' }}>
      {analyticsValues.map((analytic) => (
        <AnalyticCard key={analytic.title} analytic={analytic} />
      ))}
    </div>
  )
}
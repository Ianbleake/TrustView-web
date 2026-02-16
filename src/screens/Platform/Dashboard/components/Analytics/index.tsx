import React from 'react';
import { AnalyticCard } from './AnalyticCard';
import { useAnalyticsStorage } from '@/storage/analyticsStorage';
import { formatAnalyticsCards } from '@/utils/formatAnalyticsCards';

export const Analytics = (): React.ReactElement => {

  const { analytics } = useAnalyticsStorage();

  const analyticsValues = analytics ? formatAnalyticsCards(analytics) : null;

  return (
    <div className="w-full flex flex-row gap-2 items-center animate-fade-in">
      { analyticsValues && analyticsValues.map((analytic) => (
        <AnalyticCard key={analytic.title} analytic={analytic} />
      ))}
    </div>
  );
};

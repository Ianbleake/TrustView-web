import { Badge } from '@/components/ui/badge';
import { ArrowDown, ArrowUp } from 'lucide-react';
import React from 'react'

export type Stat = {
  title: string;
  value: number;
  trend: number;
  growth: "positive" | "negative"
}

type StatCardProps = {
  stat: Stat
};

export const StatCard = ({
  stat,
}:StatCardProps ):React.ReactElement => {
  return (
    <div className='flex flex-col gap-2 border border-amber-600/ 50 rounded-lg bg-gray-100/30 shadow-md p-4'>
      <p className='text-sm text-muted-foreground font-medium'>
        {stat.title}
      </p>
      <div className='flex flex-row items-center justify-start gap-4'>
        <p className='text-2xl font-bold font-heading'>
          {stat.value}
        </p>
        <Badge variant={stat.growth === 'negative' ? 'error' : 'success'} className=''>
          {stat.growth === 'positive' ? <ArrowUp /> : <ArrowDown />}
          {stat.trend}%
        </Badge>
      </div>
    </div>
  )
}
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { ArrowDown, ArrowUp } from 'lucide-react';
import React from 'react'

type AnalyticCardProps = {
    analytic: AnalyticValue;
}

export const AnalyticCard = ({
    analytic
}:AnalyticCardProps ):React.ReactElement => {

    const Icon = analytic.icon;

  return (
        <Card className="relative flex flex-row gap-2 min-h-40 items-stretch px-4 py-4 w-1/4 overflow-hidden transition-all duration-300 shadow-glow-hover">

            <div
            className={`
                pointer-events-none
                absolute top-15 -right-15
                w-48 h-48
                bg-orange-400/20
                rounded-full
                blur-3xl
                opacity-100
            `}
            />


            <div className="flex flex-1 flex-col">

                <div className="flex flex-col gap-1">
                    <h3 className="font-heading text-lg text-gray-500">{analytic.title}</h3>
                    <span className="font-bold text-gray-900 text-2xl">{analytic.value}</span>
                </div>

                <Badge
                    className="mt-auto"
                    variant={analytic.growth === 'negative' ? 'error' : 'success'}
                >
                    {analytic.growth === 'positive' ? <ArrowUp /> : <ArrowDown />}
                    {analytic.percentage}
                </Badge>
            </div>

            <div className="h-12 w-12 gradient-bg flex items-center justify-center rounded-lg">
                <Icon className="h-6 w-6 text-white" />
            </div>
        </Card>

  )
}
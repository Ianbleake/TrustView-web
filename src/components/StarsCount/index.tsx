import { merge } from '@/utils/mergeStyles';
import { Star } from 'lucide-react';
import React from 'react'

type StarsCountProps = {
    count: number;
    maxStars?: number;
    size?: 'sm' | 'md' | 'lg';
    showCount?: boolean;
}

export const StarsCount = ({
    count,
    maxStars = 5,
    size = 'md',
    showCount = false,
}:StarsCountProps):React.ReactElement => {

    const sizes = { sm: "h-3.5 w-3.5", md: "h-5 w-5", lg: "h-6 w-6" };

    return (
        <div className="flex items-center gap-1">
            {Array.from({ length: maxStars }, (_, i) => (
                <Star
                key={i}
                className={merge(
                    sizes[size],
                    i < Math.floor(count)
                    ? "fill-yellow-300 text-yellow-500"
                    : i < count
                    ? "fill-yellow-300/50 text-yellow-500"
                    : "fill-transparent text-gray-300"

                )}
                />
            ))}
            {showCount && (
                <span className="ml-1 text-sm font-medium text-muted-foreground">{count.toFixed(1)}</span>
            )}
        </div>
    )
}
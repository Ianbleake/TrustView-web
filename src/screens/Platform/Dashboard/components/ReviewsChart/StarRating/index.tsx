import { Star } from 'lucide-react';
import React from 'react'


type reviewsRatings = {
    stars: number;
    percentage: number;
    count: number;
};

type StarRatingProps = {
    ratings: reviewsRatings[];
}

export const StarRating = ({
    ratings,
}:StarRatingProps):React.ReactElement => {

    return (
            <div className="space-y-3">
                {ratings.map(rating => {

                        return (
                        <div key={rating.stars} className="flex items-center gap-3 group">

                            <span className="text-sm font-semibold text-gray-900 w-3">{rating.stars}</span>

                            <Star className="h-3.5 w-3.5 fill-yellow-300 text-yellow-500" />

                            <div className="flex-1 h-3 rounded-full bg-gray-200/50 overflow-hidden">
                                <div
                                    className="h-full rounded-full gradient-bg transition-all duration-700"
                                    style={{ width: `${rating.percentage}%` }}
                                />
                            </div>

                            <span className="text-sm font-bold text-gray-900 w-12 text-right">{rating.percentage}%</span>

                        </div>
                    );
                })}
            </div>
    )
}

export const analyticsBase = {
  rating: {
    average: 4.5, // Total average rating
    trend: 3, // last month trend
  },
  totalReviews: {
    count: 234, // Total number of reviews
    trend: 3, // last month trend
  },

  monthlyReviews: {
    count: 20,  // Total number of reviews of the month
    trend: -12, // last month trend
  },

  positives: {
    count: 215, // Total number of positive reviews (4 and 5 stars)
    percentage: 92, // Percentage of positive reviews out of total reviews
    trend: 2, // last month trend
  },

  starsRatings: [
    { stars: 5, count: 150, percentage: 64 },
    { stars: 4, count: 50, percentage: 21 },
    { stars: 3, count: 20, percentage: 9 },
    { stars: 2, count: 10, percentage: 4 },
    { stars: 1, count: 4, percentage: 2 },
  ],
};

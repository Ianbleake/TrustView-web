
export const analyticsBase = {
  rating: {
    average: 4.5, // Total average rating (ALL TIME)
    trend: 3, // last month trend (LAST 30 DAYS)
  },
  totalReviews: {
    count: 234, // Total number of reviews (ALL TIME)
    trend: 3, // last month trend (LAST 30 DAYS)
  },

  monthlyReviews: {
    count: 20,  // Total number of reviews of the month (ALL TIME)
    trend: -12, // last month trend (LAST 30 DAYS)
  },

  positives: {
    count: 215, // Total number of positive reviews (4 and 5 stars) (ALL TIME)
    percentage: 92, // Percentage of positive reviews out of total reviews (ALL TIME)
    trend: 2, // last month trend (LAST 30 DAYS)
  },

  starsRatings: [
    { stars: 5, count: 150, percentage: 64 }, // (ALL TIME)
    { stars: 4, count: 50, percentage: 21 }, // (ALL TIME)
    { stars: 3, count: 20, percentage: 9 }, // (ALL TIME)
    { stars: 2, count: 10, percentage: 4 }, // (ALL TIME)
    { stars: 1, count: 4, percentage: 2 }, // (ALL TIME)
  ],
};

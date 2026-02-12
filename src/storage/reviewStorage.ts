import { create } from "zustand";
import { persist } from "zustand/middleware";

type ReviewStorage = {
  reviews: Review[] | null;
  lastReviews: Review[] | null;

  setReviews: (reviews: Review[]) => void;
  setLastReviews: (reviews: Review[]) => void;
  updateReview: (updatedReview: Partial<Review> & { id: string }) => void;
  clearReviews: () => void;
};

export const useReviewStorage = create<ReviewStorage>()(
  persist(
    (set) => ({
      
      reviews: null,
      lastReviews: null,

      setReviews: (reviews: Review[]): void => {
        set({ reviews });
      },

      setLastReviews: (lastReviews: Review[]): void => {
        set({ lastReviews });
      },

      updateReview: (updatedReview: Partial<Review> & { id: string }): void => {
        set((state): Pick<ReviewStorage, "reviews" | "lastReviews"> => {
          const updateList = (list: Review[] | null): Review[] | null => {
            if (!list) return list;

            return list.map((review) =>
              review.id === updatedReview.id
                ? { ...review, ...updatedReview }
                : review
            );
          };

          return {
            reviews: updateList(state.reviews),
            lastReviews: updateList(state.lastReviews),
          };
        });
      },

      clearReviews: (): void => {
        set({
          reviews: null,
          lastReviews: null,
        });
      },
    }),
    {
      name: "reviews-storage",
    }
  )
);

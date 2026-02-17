import { create } from "zustand";
import { persist } from "zustand/middleware";

type ReviewStorage = {
  reviews: Review[] | null;
  lastReviews: Review[] | null;

  setReviews: (reviews: Review[]) => void;
  setLastReviews: (reviews: Review[]) => void;
  updateReview: (updatedReview: Partial<Review> & { id: string }) => void;
  clearReviews: () => void;
  addReview: (newReview: Review) => void;
  addReviews: (reviews: Review[]) => void;
  deleteReview: (reviewId: string) => void;
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

      addReview: (newReview: Review): void => {
        set((state): Pick<ReviewStorage, "reviews" | "lastReviews"> => {
          const updatedReviews = state.reviews ? [newReview, ...state.reviews] : [newReview];
          const updatedLastReviews = state.lastReviews ? [newReview, ...state.lastReviews] : [newReview];

          return {
            reviews: updatedReviews,
            lastReviews: updatedLastReviews,
          };
        });
      },

      addReviews: (newReviews: Review[]): void => {
        set((state) => {

          const current = state.reviews ?? [];
          const map = new Map<string, Review>();
          current.forEach((r) => map.set(r.id, r));
          newReviews.forEach((r) => map.set(r.id, r));
          const merged = Array.from(map.values());
          return {
            reviews: merged,
            lastReviews: merged,
          };
        });
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

      //TODO: revisar tambien
      deleteReview: (reviewId: string): void => {
        set((state): Pick<ReviewStorage, "reviews" | "lastReviews"> => {
          const filterList = (list: Review[] | null): Review[] | null => {
            if (!list) return list;

            return list.filter((review) => review.id !== reviewId);
          };

          return {
            reviews: filterList(state.reviews),
            lastReviews: filterList(state.lastReviews),
          };
        });
      },

      
    }),
    {
      name: "reviews-storage",
    }
  )
);

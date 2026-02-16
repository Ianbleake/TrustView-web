import { create } from "zustand";
import { persist } from "zustand/middleware";

type AnalyticsStorage = {
  analytics: StoreAnalytics | null;

  setAnalytics: (analytics: StoreAnalytics) => void;
  clearAnalytics: () => void;
};

export const useAnalyticsStorage = create<AnalyticsStorage>()(
  persist(
    (set) => ({
      analytics: null,

      setAnalytics: (analytics: StoreAnalytics) => {
        set({ analytics });
      },

      clearAnalytics: () => {
        set({ analytics: null });
      },
    }),
    {
      name: "analytics-storage",
    }
  )
);

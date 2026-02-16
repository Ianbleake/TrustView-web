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

      setAnalytics: (analytics: StoreAnalytics):void => {
        set({ analytics });
      },

      clearAnalytics: ():void => {
        set({ analytics: null });
      },
    }),
    {
      name: "analytics-storage",
    }
  )
);

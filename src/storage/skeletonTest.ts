import { create } from "zustand";

type SkeletonTest = {
  isTesting: boolean;

  setTesting: (testState: boolean) => void;
}

export const useSkeleton = create<SkeletonTest>()(
  (set) => ({
    isTesting: false,
    setTesting: ( testState ):void => set({ isTesting: testState})
  })
)
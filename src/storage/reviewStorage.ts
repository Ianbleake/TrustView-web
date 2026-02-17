import { create } from "zustand";

type SortState =
  | "newest"
  | "oldest"
  | "rating_high"
  | "rating_low"
  | "author_az";

type ReviewUIStore = {
  filter: "all" | ReviewState;
  sortBy: SortState;
  search: string;

  setFilter: (value: "all" | ReviewState) => void;
  setSortBy: (value: SortState) => void;
  setSearch: (value: string) => void;

  reset: () => void;
};

export const useReviewStore = create<ReviewUIStore>((set) => ({
  filter: "all",
  sortBy: "newest",
  search: "",

  setFilter: (filter): void => set({ filter }),
  setSortBy: (sortBy): void => set({ sortBy }),
  setSearch: (search): void => set({ search }),

  reset: ():void =>
    set({
      filter: "all",
      sortBy: "newest",
      search: "",
    }),
}));

import { create } from "zustand";
import type LoadingStore from "@/interfaces/LoadingStore";

export const useLoadingStore = create<LoadingStore>((set) => ({
  isLoading: false,
  actions: {
    setLoading: (isLoading) => set({ isLoading }),
  },
}));

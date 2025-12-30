import { create } from "zustand";
import type FileStore from "@/interfaces/FileStore";

export const useFileStore = create<FileStore>((set) => ({
  files: [],
  actions: {
    addFile: (file) =>
      set((state) => ({
        files: [...state.files, file],
      })),
    removeFile: (id) =>
      set((state) => ({
        files: state.files.filter((file) => file.id !== id),
      })),
    resetFile: () => set({ files: [] }),
  },
}));

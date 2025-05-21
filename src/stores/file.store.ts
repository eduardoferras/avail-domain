import FileStore from '@/interfaces/FileStore'
import { create } from 'zustand'

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
}))

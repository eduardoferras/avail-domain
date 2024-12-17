import { FileStore } from '@/types'
import { create } from 'zustand'

export const useFileStore = create<FileStore>((set) => ({
	files: [],
	addFile: (file) =>
		set((state) => ({
			files: [...state.files, file],
		})),
	removeFile: (id) =>
		set((state) => ({
			files: state.files.filter((file) => file.id !== id),
		})),
}))

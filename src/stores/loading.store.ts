import { LoadingStore } from '@/types'
import { create } from 'zustand'

export const useLoadingStore = create<LoadingStore>((set) => ({
	isLoading: false,
	actions: {
		setLoading: (isLoading) => set({ isLoading }),
	},
}))

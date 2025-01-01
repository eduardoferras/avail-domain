import { useLoadingStore } from '@/stores/loading.store'

const useIsLoading = () => {
	return useLoadingStore((state) => state.isLoading)
}

export default useIsLoading

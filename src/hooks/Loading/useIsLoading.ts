import { useLoadingStore } from '@/store/loading.store'

const useIsLoading = () => {
	return useLoadingStore((state) => state.isLoading)
}

export default useIsLoading

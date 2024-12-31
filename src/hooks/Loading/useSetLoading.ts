import { useLoadingStore } from '@/store/loading.store'

const useSetLoading = () => {
	return useLoadingStore((state) => state.actions.setLoading)
}

export default useSetLoading

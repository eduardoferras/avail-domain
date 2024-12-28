import { useFileStore } from '@/store/useFileStore'

const useResetFile = () => {
	return useFileStore((state) => state.actions.resetFile)
}

export default useResetFile

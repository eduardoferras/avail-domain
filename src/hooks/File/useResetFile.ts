import { useFileStore } from '@/stores/file.store'

const useResetFile = () => {
	return useFileStore((state) => state.actions.resetFile)
}

export default useResetFile

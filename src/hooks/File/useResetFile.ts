import { useFileStore } from '@/store/file.store'

const useResetFile = () => {
	return useFileStore((state) => state.actions.resetFile)
}

export default useResetFile

import { useFileStore } from '@/store/useFileStore'

const useRemoveFile = () => {
	return useFileStore((state) => state.actions.removeFile)
}

export default useRemoveFile

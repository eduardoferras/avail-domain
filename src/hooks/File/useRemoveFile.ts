import { useFileStore } from '@/store/useFileStore'

const useRemoveFile = () => {
	return useFileStore((state) => state.removeFile)
}

export default useRemoveFile

import { useFileStore } from '@/store/file.store'

const useRemoveFile = () => {
	return useFileStore((state) => state.actions.removeFile)
}

export default useRemoveFile

import { useFileStore } from '@/store/useFileStore'

const useAddFile = () => {
	return useFileStore((state) => state.addFile)
}

export default useAddFile

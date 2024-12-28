import { useFileStore } from '@/store/useFileStore'

const useAddFile = () => {
	return useFileStore((state) => state.actions.addFile)
}

export default useAddFile

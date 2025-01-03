import { useFileStore } from '@/store/file.store'

const useAddFile = () => {
	return useFileStore((state) => state.actions.addFile)
}

export default useAddFile

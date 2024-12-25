import { useFileStore } from '@/store/useFileStore'

const useListFile = () => {
	return useFileStore((state) => state.files)
}

export default useListFile

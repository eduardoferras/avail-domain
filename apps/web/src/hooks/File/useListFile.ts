import { useFileStore } from '@/stores/file.store'

const useListFile = () => {
	return useFileStore((state) => state.files)
}

export default useListFile

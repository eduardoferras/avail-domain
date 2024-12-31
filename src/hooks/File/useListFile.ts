import { useFileStore } from '@/store/file.store'

const useListFile = () => {
	return useFileStore((state) => state.files)
}

export default useListFile

import { useFileStore } from '@/stores/file.store'
import { nanoid } from 'nanoid'

const useAddFile = () => {
	const addFile = useFileStore((state) => state.actions.addFile)

	return (fileList: FileList) => {
		Array.from(fileList).forEach((file) => {
			return addFile({
				id: nanoid(),
				file,
			})
		})
	}
}

export default useAddFile

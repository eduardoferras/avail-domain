import { FileItem, FileItems } from '@/types'
import Icon from '../UI/Icon'
import { Dispatch, SetStateAction } from 'react'
import S from './styles.module.scss'

export default function UploadItem({
	files,
	setFiles,
}: {
	files: FileItems
	setFiles: Dispatch<SetStateAction<FileItems>>
}) {
	function handleRemoveFile(
		id: FileItem['id'],
		files: FileItems,
		setFiles: Dispatch<SetStateAction<FileItems>>,
	): void {
		if (!files) return

		setFiles(files.filter((item) => item.id !== id))
	}

	return (
		<>
			{/* <span className={S.Message} role="log" aria-live="assertive" aria-atomic="true">
				{message ? message : 'teste'}
			</span> */}
			{files.length > 0 && (
				<ul className={S.Upload__list} aria-label="Lista arquivos adicionados">
					{files.map((file: FileItem) => (
						<li key={file.id} className={S.Upload__list__item}>
							<Icon ariahidden alt="" name="excel" width="32" height="32" />
							<span className={S.Upload__list__item__name}>{file.name}</span>
							<button
								className={S.Upload__list__item__btn}
								aria-label="Remover arquivo"
								onClick={() => handleRemoveFile(file.id, files, setFiles)}
							>
								<Icon
									className={S.Upload__list__item__btn__remove}
									alt=""
									name="remove"
									ariahidden
								/>
							</button>
						</li>
					))}
				</ul>
			)}
		</>
	)
}

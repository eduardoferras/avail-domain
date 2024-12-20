import { FileItem } from '@/types'
import Icon from '../UI/Icon'
import S from './styles.module.scss'
import { useFileStore } from '@/store/File'

export default function UploadItem() {
	const { files, removeFile } = useFileStore()

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
								onClick={() => removeFile(file.id)}
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

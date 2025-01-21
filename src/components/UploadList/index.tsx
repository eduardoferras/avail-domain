'use client'
import Icon from '../UI/Icon'
import S from './styles.module.scss'
import useRemoveFile from '@/hooks/File/useRemoveFile'
import useListFile from '@/hooks/File/useListFile'

export default function UploadList() {
	const removeFile = useRemoveFile()
	const files = useListFile()

	return (
		<>
			{/* <span className={S.Message} role="log" aria-live="assertive" aria-atomic="true">
				{message ? message : 'teste'}
			</span> */}
			{files.length > 0 && (
				<ul className={S.Upload__list} aria-label="Lista arquivos adicionados">
					{files.map(({ file, id }) => (
						<li key={id} className={S.Upload__list__item}>
							<Icon ariahidden alt="" name="excel" width="32" height="32" />
							<span className={S.Upload__list__item__name}>{file.name}</span>
							<button
								className={S.Upload__list__item__btn}
								aria-label="Remover arquivo"
								onClick={() => removeFile(id)}
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

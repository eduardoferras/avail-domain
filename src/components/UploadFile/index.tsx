import S from './style.module.scss'
import Icon from '../UI/Icon'

export default function UploadFile({ files }: { files: FileList }) {
	return (
		<ul className={S.Upload}>
			{Array.from(files).map((file: File, index: number) => (
				<li key={index} className={S.File}>
					<Icon name="excel" width="32" height="32" />
					<span className={S.name}>{file.name}</span>
					<Icon name="close" width="24" height="24" fill="#47474F" />
				</li>
			))}
		</ul>
	)
}

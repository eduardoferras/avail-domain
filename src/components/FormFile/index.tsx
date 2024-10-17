'use client'
import { ChangeEvent, useState } from 'react'
import S from './style.module.scss'
import Icon from '../UI/Icon'
import { nanoid } from 'nanoid'

interface fileProps {
	id: string
	name: string
	file: File
}

export default function FormFile() {
	const [filesSelected, setFilesSelected] = useState<fileProps[]>([])

	function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
		const fileList = e.target.files

		if (!fileList) return

		const arrayFiles: fileProps[] = Array.from(fileList).map((file) => ({
			file,
			name: file.name,
			id: nanoid(),
		}))

		setFilesSelected(filesSelected.concat(arrayFiles))
	}

	function handleRemoveFile(id: fileProps['id']): void {
		if (!filesSelected) return

		const newFiles = filesSelected.filter((item) => item.id !== id)

		setFilesSelected(newFiles)
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
		e.preventDefault()
		const formMethod = e.currentTarget.method
		const formURL = e.currentTarget.action

		// if (!files) return

		try {
			console.log('foi')
			// const datas = new FormData()
			// datas.set('files', files)

			// const rest = await fetch(formURL, {
			// 	method: formMethod,
			// 	body: datas,
			// })

			// const data = await rest.json()
			// console.log(data)
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<div className={S.section}>
			{filesSelected && (
				<ul className={S.Upload}>
					{filesSelected.map((file: fileProps) => (
						<li key={file.id} className={S.File}>
							<Icon name="excel" width="32" height="32" />
							<span className={S.name}>{file.name}</span>
							<Icon className={S.close} name="close" width="24" height="24" fill="#47474F" onClick={() => handleRemoveFile(file.id)} />
						</li>
					))}
				</ul>
			)}
			<form onSubmit={handleSubmit} className={S.form} method="POST" action="/api/uploads">
				{filesSelected.length > 0 ? (
					<button type="submit" className={S.submit}>
						Consultar
					</button>
				) : (
					<label htmlFor="uploadFile" className={S.label}>
						Selecionar arquivo EXCEL
						<input
							type="file"
							id="uploadFile"
							multiple
							tabIndex={1}
							autoFocus
							onChange={handleFileChange}
							accept="
						.xlsx,
						.xls,
						application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
						application/vnd.ms-excel"
							aria-required="true"
							required
						/>
					</label>
				)}
			</form>
		</div>
	)
}

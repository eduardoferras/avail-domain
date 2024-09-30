'use client'
import { useState } from 'react'
import S from './style.module.scss'
import UploadFile from '../UploadFile'

export default function FormFile() {
	const [files, setFiles] = useState<FileList>()

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
		e.preventDefault()
		const formMethod = e.currentTarget.method
		const formURL = e.currentTarget.action

		if (!files) return

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
			{files && <UploadFile files={files} />}
			<form onSubmit={handleSubmit} className={S.form} method="POST" action="/api/uploads">
				<label htmlFor="uploadFile" className={S.label}>
					{files ? 'Consultar Nomes' : 'Selecionar arquivo EXCEL'}
					<input
						type="file"
						id="uploadFile"
						multiple
						tabIndex={1}
						autoFocus
						onChange={(e) => setFiles(e.target.files as FileList)}
						accept=".xlsx, .xls"
						aria-required="true"
						required
					/>
				</label>
			</form>
		</div>
	)
}

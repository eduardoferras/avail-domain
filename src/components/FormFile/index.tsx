'use client'
import { useState } from 'react'
import S from './style.module.scss'
import Button from '../UI/Button'

export default function FormFile() {
	const [files, setFiles] = useState<File>()

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
		e.preventDefault()
		const formMethod = e.currentTarget.method
		const formURL = e.currentTarget.action

		if (!files) return

		try {
			const datas = new FormData()
			datas.set('file', files)

			const rest = await fetch(formURL, {
				method: formMethod,
				body: datas,
			})

			const data = await rest.json()
			console.log(data)
		} catch (error) {
			console.error(error)
		}
	}
	return (
		<div className={S.section}>
			<form onSubmit={handleSubmit} className={S.form} method="POST" action="/api/uploads">
				<label htmlFor="uploadFile" className={S.label}>
					<input type="file" id="uploadFile" tabIndex={1} autoFocus onChange={(e) => setFiles(e.target.files?.[0])} />
					{files ? <Button>Consultar Nomes</Button> : 'Selecionar arquivo EXCEL'}
				</label>
			</form>
			<ul>{files ? <li>{files.name}</li> : ''}</ul>
		</div>
	)
}

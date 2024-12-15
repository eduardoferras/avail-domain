import { ChangeEvent, Dispatch, SetStateAction, useRef, useState } from 'react'
import S from './styles.module.scss'
import { FileItems } from '@/types'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/navigation'

export default function FormUpload({
	files,
	setFiles,
	setLoading,
}: {
	files: FileItems
	setLoading: Dispatch<SetStateAction<boolean>>
	setFiles: Dispatch<SetStateAction<FileItems>>
}) {
	const hiddenInputFile = useRef<HTMLInputElement>(null)
	const [message, setMessage] = useState('')
	const router = useRouter()

	function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
		const fileList = e.target.files

		if (!fileList) return

		// validar extensao arquivos.

		const arrayFiles: FileItems = Array.from(fileList).map((file) => ({
			file,
			name: file.name,
			id: nanoid(),
		}))

		setMessage('Arquivo adicionado')
		setFiles(files.concat(arrayFiles))
	}

	async function handleSubmit(
		e: React.FormEvent<HTMLFormElement>,
	): Promise<void> {
		setLoading(true)
		e.preventDefault()

		const { method, action: urlReq } = e.currentTarget

		if (!files.length) return

		try {
			const dataForm = new FormData()

			files.forEach((file) => {
				dataForm.append('files', file.file)
			})

			await fetch(urlReq, {
				method,
				body: dataForm,
			})
				.then((res) => {
					if (!res.ok) {
						throw new Error()
					}

					return res.blob()
				})
				.then((fileBlob) => {
					// const urlFile = URL.createObjectURL(new Blob([fileBlob]))
					// router.push(`/download/${urlFile.split('/').slice(3)}`)
					router.push(`/download/file-example-download`)
				})
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<form
			onSubmit={handleSubmit}
			className={S.Upload__form}
			method="POST"
			action="/api/upload"
			encType="multiplart/form-data"
		>
			{files.length > 0 ? (
				<button type="submit" className={S.Upload__form__btn}>
					Consultar Nomes
				</button>
			) : (
				<>
					<button
						className={S.Upload__form__btn}
						onClick={() => hiddenInputFile.current?.click()}
						type="button"
					>
						Selecionar Arquivo Excel
					</button>
					<input
						ref={hiddenInputFile}
						className={S.Upload__form__btn__file}
						type="file"
						id="uploadFile"
						multiple
						onChange={handleFileChange}
						accept="
									.xlsx,
									.xls,
									application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
									application/vnd.ms-excel"
						required
						aria-hidden="true"
					/>
				</>
			)}
		</form>
	)
}

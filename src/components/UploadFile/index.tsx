'use client'
import { ChangeEvent, useRef, useState } from 'react'
import S from './styles.module.scss'
import { useRouter } from 'next/navigation'
import useAddFile from '@/hooks/File/useAddFile'
import useListFile from '@/hooks/File/useListFile'
import { fetchDomain } from '@/lib/fetchDomain'
import useSetLoading from '@/hooks/Loading/useSetLoading'

export default function UploadFile() {
	const hiddenInputFile = useRef<HTMLInputElement>(null)
	const [message, setMessage] = useState('')
	const router = useRouter()
	const addFile = useAddFile()
	const setLoading = useSetLoading()

	const files = useListFile()

	function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
		const fileList = e.target.files

		if (!fileList) return

		Array.from(fileList).forEach((file) => {
			if (file.size === 0) return

			addFile({
				file,
				name: file.name,
				size: file.size,
			})
		})

		setMessage('Arquivo adicionado')
		if (hiddenInputFile.current) hiddenInputFile.current.value = ''
	}

	async function handleSubmit(
		e: React.FormEvent<HTMLFormElement>,
	): Promise<void> {
		e.preventDefault()
		setLoading(true)

		const { method, action: urlReq } = e.currentTarget

		if (!files.length) return

		//https://stackoverflow.com/questions/34993292/how-to-save-xlsx-data-to-file-as-a-blob

		await fetchDomain(files, method, urlReq)
			.then((res) => {
				router.push(`/download/${res}`)
			})
			.finally(() => {
				setLoading(false)
			})
	}

	return (
		<form
			className={S.Upload__form}
			onSubmit={handleSubmit}
			method="POST"
			action="/api/upload"
			encType="multipart/form-data"
		>
			<button
				className={S.Upload__form__btn}
				onClick={() => hiddenInputFile.current?.click()}
				type="button"
			>
				{files.length > 0
					? 'Adicionar Arquivo Excel'
					: 'Selecionar Arquivo Excel'}
			</button>
			{files.length > 0 && (
				<button type="submit" className={S.Upload__form__btn}>
					Consultar Nomes
				</button>
			)}
			<input
				ref={hiddenInputFile}
				className={S.Upload__form__btn__file}
				type="file"
				id="uploadFile"
				data-testid="uploadFile"
				multiple
				accept=".xlsx,
									.xls,
									application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
									application/vnd.ms-excel"
				aria-hidden
				onChange={handleFileChange}
			/>
		</form>
	)
}

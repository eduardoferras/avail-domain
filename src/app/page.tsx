'use client'
import S from './page.module.scss'
import { ChangeEvent, useRef, useState } from 'react'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/navigation'
import { FileItem, FileItems } from '@/types'
import Loading from '@/components/UI/Loading'
import UploadList from '@/components/UploadList'

export default function Home() {
	const [filesSelected, setFilesSelected] = useState<FileItems>([])
	const [isLoading, setIsLoading] = useState(false)
	const [message, setMessage] = useState('')
	const router = useRouter()
	const hiddenInputFile = useRef<HTMLInputElement>(null)

	function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
		const fileList = e.target.files

		if (!fileList) return

		const arrayFiles: FileItems = Array.from(fileList).map((file) => ({
			file,
			name: file.name,
			id: nanoid(),
		}))

		setMessage('Arquivo adicionado')
		setFilesSelected(filesSelected.concat(arrayFiles))
	}

	async function handleSubmit(
		e: React.FormEvent<HTMLFormElement>,
	): Promise<void> {
		setIsLoading(true)
		e.preventDefault()

		const { method, action: urlReq } = e.currentTarget

		if (!filesSelected.length) return

		try {
			const dataForm = new FormData()

			filesSelected.forEach((file) => {
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
		<main className={S.container}>
			{isLoading ? (
				<Loading />
			) : (
				<section className={S.Upload}>
					<h1 className={S.Upload__title}>
						Verificar disponibilidade domínio no Registro.br
					</h1>
					<p className={S.Upload__description}>
						Importe uma lista de nomes em Excel para verificar se já possuem
						domínios registrados.
					</p>
					{filesSelected.length > 0 && (
						<UploadList files={filesSelected} setFiles={setFilesSelected} />
					)}
					<form
						onSubmit={handleSubmit}
						className={S.Upload__form}
						method="POST"
						action="/api/upload"
						encType="multiplart/form-data"
					>
						{filesSelected.length > 0 ? (
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
				</section>
			)}
		</main>
	)
}

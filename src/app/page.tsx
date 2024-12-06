'use client'
import S from './page.module.scss'
import { ChangeEvent, useState } from 'react'
import Icon from '@/components/UI/Icon'
import { nanoid } from 'nanoid'
import { useRouter } from 'next/navigation'
import { FileItem, FileItems } from '@/types'
import Loading from '@/components/UI/Loading'

export default function Home() {
	const [filesSelected, setFilesSelected] = useState<FileItems>([])
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

	function handleFileChange(e: ChangeEvent<HTMLInputElement>) {
		const fileList = e.target.files

		if (!fileList) return

		const arrayFiles: FileItems = Array.from(fileList).map((file) => ({
			file,
			name: file.name,
			id: nanoid(),
		}))

		setFilesSelected(filesSelected.concat(arrayFiles))
	}

	function handleRemoveFile(id: FileItem['id']): void {
		if (!filesSelected) return

		const newFiles = filesSelected.filter((item) => item.id !== id)

		setFilesSelected(newFiles)
	}

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
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
					<h1 className={S.Upload__title}>Verificar disponibilidade domínio no Registro.br</h1>
					<p className={S.Upload__description}>Importe uma lista de nomes em Excel para verificar se já possuem domínios registrados.</p>
					{filesSelected.length > 0 && (
						<ul className={S.Upload__list} aria-live={'polite'}>
							{filesSelected.map((file: FileItem) => (
								<li key={file.id} className={S.Upload__list__item}>
									<Icon ariahidden alt="Ícone excel" name="excel" width="32" height="32" />
									<span className={S.Upload__list__item__name}>{file.name}</span>
									<button className={S.Upload__list__item__btn} aria-label="Remover arquivo">
										<Icon
											className={S.Upload__list__item__btn__remove}
											alt="Ícone remover item"
											name="remove"
											onClick={() => handleRemoveFile(file.id)}
											ariahidden
										/>
									</button>
								</li>
							))}
						</ul>
					)}
					<form onSubmit={handleSubmit} className={S.Upload__form} method="POST" action="/api/upload" encType="multiplart/form-data">
						{filesSelected.length > 0 ? (
							<button type="submit" className={S.Upload__form__btn}>
								Consultar Nomes
							</button>
						) : (
							<label htmlFor="uploadFile" className={S.Upload__form__btn} tabIndex={0}>
								Selecionar arquivo EXCEL
								<input
									className={S.Upload__form__btn__file}
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
									required
								/>
							</label>
						)}
					</form>
				</section>
			)}
		</main>
	)
}

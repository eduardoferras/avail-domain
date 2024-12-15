'use client'
import S from './page.module.scss'
import { useState } from 'react'
import { FileItems } from '@/types'
import Loading from '@/components/UI/Loading'
import UploadList from '@/components/UploadList'
import FormUpload from '@/components/FormUpload'

export default function Home() {
	const [filesSelected, setFilesSelected] = useState<FileItems>([])
	const [isLoading, setIsLoading] = useState(false)

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
					<FormUpload
						files={filesSelected}
						setLoading={setIsLoading}
						setFiles={setFilesSelected}
					/>
				</section>
			)}
		</main>
	)
}

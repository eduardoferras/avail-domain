'use client'
import S from './page.module.scss'
import { useState } from 'react'
import Loading from '@/components/UI/Loading'
import UploadList from '@/components/UploadList'

export default function Home() {
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
					<UploadList setLoading={setIsLoading} />
				</section>
			)}
		</main>
	)
}

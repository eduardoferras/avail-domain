'use client'
import { useEffect, useRef } from 'react'
import S from './page.module.scss'
import { useParams } from 'next/navigation'

export default function Download() {
	const btnDownload = useRef<HTMLAnchorElement>(null)
	const { urlFile } = useParams<{ urlFile: string }>()

	useEffect(() => {
		setTimeout(() => {
			if (btnDownload.current) {
				// btnDownload.current.click()
			}
		}, 1000)
	}, [])
	return (
		<main className={S.container}>
			<section className={S.Download}>
				<h1 className={S.Download__title}>Domínios consultados no RegistroBR</h1>
				<a href={`/${urlFile}`} className={S.Download__btn} ref={btnDownload} download={true}>
					Baixar nomes consultados
				</a>
			</section>
		</main>
	)
}

{
	/*
	Navegador Bloqueia popup
	<a href="/path-file" ref="btnDownload" target="_blank">Baixar nomes consultados</a>

	Navegador libera tudo
	<button onClick={() => (window.location.href = '/Teste.xlsx')} className={S.submit} ref={btnDownload}>
		Baixar nomes consultados
	</button>
	*/
}

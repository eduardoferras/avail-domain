'use client'
import useIsLoading from '@/hooks/Loading/useIsLoading'
import S from './styles.module.scss'

export default function Loading({ children }: { children: React.ReactNode }) {
	const isLoading = useIsLoading()

	return isLoading ? (
		<main className={S.container}>
			<section className={S.Loading}>
				<h1 className={S.Loading__title}>Consultando nomes no RegistroBR</h1>
				<span className={S.Loading__loader}></span>
			</section>
		</main>
	) : (
		children
	)
}

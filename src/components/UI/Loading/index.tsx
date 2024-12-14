import S from './styles.module.scss'

export default function Loading() {
	return (
		<section className={S.Loading}>
			<h1 className={S.Loading__title}>Consultando nomes no RegistroBR</h1>
			<span className={S.Loading__loader}></span>
		</section>
	)
}

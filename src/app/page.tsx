import FormFile from '@/components/FormFile'
import S from './page.module.scss'

export default function Home() {
	return (
		<main className={S.container}>
			<section className={S.section}>
				<h1 className={S.title}>Verificar disponibilidade domínio no Registro.br</h1>
				<p className={S.paragraph}>Importe uma lista de nomes em Excel para verificar se já possuem domínios registrados.</p>
				<FormFile />
			</section>
		</main>
	)
}

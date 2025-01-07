import S from './page.module.scss'
import UploadFile from '@/components/UploadFile'
import UploadList from '@/components/UploadList'

export default function Home() {
	return (
		<main className={S.container}>
			<section className={S.Upload}>
				<h1 className={S.Upload__title}>
					Verificar disponibilidade domínio no Registro.br
				</h1>
				<p className={S.Upload__description}>
					Importe uma lista de nomes em Excel para verificar se já possuem
					domínios registrados.
				</p>
				<UploadList />
				<UploadFile />
			</section>
		</main>
	)
}

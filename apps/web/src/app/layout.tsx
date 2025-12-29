import type { Metadata } from 'next'
import '@/styles/globals.scss'
import { openSans } from '@/fonts'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Loading from '@/components/UI/Loading'

export const metadata: Metadata = {
	title: 'Avail Domain - Verificar disponibilidade domínio no Registro.br',
	description:
		'Importe uma lista de nomes em Excel para verificar se já possuem domínios registrados.',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR" className={openSans.className}>
			<body>
				<Header />
				<Loading>{children}</Loading>
				<Footer />
			</body>
		</html>
	)
}

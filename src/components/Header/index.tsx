import Link from 'next/link'
import S from './styles.module.scss'
import Icon from '../UI/Icon'

export default function Header() {
	return (
		<header className={S.header}>
			<Link href="/">
				<Icon name="logo-avail-domain" alt="Página Inicial Avail Domain" width="182" height="25" />
			</Link>
		</header>
	)
}

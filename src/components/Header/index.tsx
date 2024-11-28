import Link from 'next/link'
import S from './styles.module.scss'
import Icon from '../UI/Icon'

export default function Header() {
	return (
		<header className={S.header}>
			<nav aria-label="Main">
				<ul className={S.header__nav__list}>
					<li>
						<Link href="/" aria-label="Página Inicial Avail Domain">
							<Icon name="logo-avail-domain" alt="logo da Avail Domain" width="182" height="25" />
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

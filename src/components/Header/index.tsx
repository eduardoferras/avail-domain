import Link from 'next/link'
import S from './styles.module.scss'
import Icon from '../UI/Icon'

export default function Header() {
	return (
		<header className={S.header}>
			<nav aria-label="Main">
				<ul className={S.header__nav__list}>
					<li>
						<Link href="/">
							<Icon name="logo-avail-domain" width="182" height="25" />
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

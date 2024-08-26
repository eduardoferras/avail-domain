import Image from 'next/image'
import Link from 'next/link'
import logo from '@/images/logo-avail-domain.svg'
import S from './styles.module.scss'

export default function Header() {
	return (
		<header className={S.header}>
			<nav aria-label="Main">
				<ul>
					<li>
						<Link href="/">
							<Image src={logo} alt="logo avail domain" />
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

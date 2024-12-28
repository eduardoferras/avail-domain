'use client'
import Link from 'next/link'
import S from './styles.module.scss'
import Icon from '../UI/Icon'
import useResetFile from '@/hooks/File/useResetFile'

export default function Header() {
	return (
		<header className={S.header}>
			<Link href="/" onClick={useResetFile()}>
				<Icon
					name="logo-avail-domain"
					alt="Página Inicial Avail Domain"
					width="182"
					height="25"
				/>
			</Link>
		</header>
	)
}

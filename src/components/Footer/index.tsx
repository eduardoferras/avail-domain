import Image from 'next/image'
import Link from 'next/link'
import logo from '@/images/logo-avail-domain.svg'
import S from './styles.module.scss'

export default function Footer() {
	return (
		<footer className={S.footer}>
			<p className={S.content}>Copyright AvailDomain 2024 - Seu consultor de Domínios</p>
		</footer>
	)
}

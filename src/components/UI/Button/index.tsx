import { ButtonHTMLAttributes } from 'react'
import S from './styles.module.scss'

export default function Button({ children, ...props }: React.HTMLAttributes<HTMLButtonElement>) {
	return (
		<button className={S.button} {...props}>
			{children}
		</button>
	)
}

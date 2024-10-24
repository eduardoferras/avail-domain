import { SVGProps } from 'react'

export default function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: string }) {
	return (
		<svg {...props}>
			<use href={`/images/svg/sprite.svg#${name}`} />
		</svg>
	)
}

import { IconElement } from '@/types'

export default function Icon({
	name,
	alt,
	ariahidden = false,
	...props
}: IconElement) {
	return (
		<svg {...props} role="img" aria-hidden={ariahidden}>
			<title>{alt}</title>
			<use href={`/images/svg/sprite.svg#${name}`} />
		</svg>
	)
}

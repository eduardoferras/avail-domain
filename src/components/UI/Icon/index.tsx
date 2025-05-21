import IconElement from "@/interfaces/IconElement";

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
	);
}

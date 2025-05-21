import { SVGProps } from "react";

export default interface IconElement extends SVGProps<SVGSVGElement> {
	name: string;
	alt: string;
	ariahidden?: boolean;
}

export interface FileItem {
	id: string
	name: string
	file: File
}

export interface FileItems extends Array<FileItem> {}

import { SVGProps } from 'react'

export interface IconElement extends SVGProps<SVGSVGElement> {
	name: string
	alt: string
	ariahidden?: boolean
}

import { SVGProps } from 'react'

export interface IconElement extends SVGProps<SVGSVGElement> {
	name: string
	alt: string
	ariahidden?: boolean
}

export interface FileItem {
	id: string
	name: string
	file: File
}

export interface FileStore {
	files: FileItem[]
	addFile: (file: FileItem) => void
	removeFile: (id: FileItem['id']) => void
}

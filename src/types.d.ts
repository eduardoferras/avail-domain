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
	actions: {
		addFile: (file: FileItem) => void
		removeFile: (id: FileItem['id']) => void
		resetFile: () => void
	}
}

export interface LoadingStore {
	isLoading: boolean
	actions: {
		setLoading: (isLoading: boolean) => void
	}
}

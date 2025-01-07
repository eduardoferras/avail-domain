import { SVGProps } from 'react'

export interface IconElement extends SVGProps<SVGSVGElement> {
	name: string
	alt: string
	ariahidden?: boolean
}

export interface FileItem {
	name: string
	file: File
	size: number
}

export interface FileStore {
	files: FileItem[]
	actions: {
		addFile: (file: FileItem) => void
		removeFile: (name: FileItem['name']) => void
		resetFile: () => void
	}
}

export interface LoadingStore {
	isLoading: boolean
	actions: {
		setLoading: (isLoading: boolean) => void
	}
}

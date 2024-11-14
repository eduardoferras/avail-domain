export interface FileItem {
	id: string
	name: string
	file: File
}

export interface FileItems extends Array<FileItem> {}

import FileItem from "./FileItem";

export default interface FileStore {
	files: FileItem[];
	actions: {
		addFile: (file: FileItem) => void;
		removeFile: (id: FileItem["id"]) => void;
		resetFile: () => void;
	};
}

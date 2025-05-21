import FileItem from "@/interfaces/FileItem";

export async function fetchDomain(
	files: FileItem[],
	method: string,
	urlReq: string,
) {
	try {
		const dataForm = new FormData();

		files.forEach((file) => {
			dataForm.append("files", file.file);
		});

		// await fetch(urlReq, {
		// 	method,
		// 	body: dataForm,
		// })
		// 	.then((res) => {
		// 		if (!res.ok) {
		// 			throw new Error()
		// 		}

		// 		return res.blob()
		// 	})
		// 	.then((fileBlob) => {
		// 		const urlFile = URL.createObjectURL(new Blob([fileBlob]))
		// 			.split('/')
		// 			.slice(3)
		// 		return 'file-example-download'
		// 	})

		return "file-example-download";
	} catch (error) {
		console.error(error);
	}
}

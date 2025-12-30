import type FileItem from "@/interfaces/FileItem";

export async function fetchDomain(_files: FileItem[]) {
  try {
    return "file-example-download";
  } catch (error) {
    console.error(error);
  }
}

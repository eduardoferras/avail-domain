import { nanoid } from "nanoid";
import { useFileStore } from "@/stores/file.store";

const useAddFile = () => {
  const addFile = useFileStore((state) => state.actions.addFile);

  return (fileList: FileList) => {
    Array.from(fileList).map((file) => {
      return addFile({
        id: nanoid(),
        file,
      });
    });
  };
};

export default useAddFile;

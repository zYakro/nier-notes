import { reactive } from "vue";
import { getFileContent, saveTextInFile, getFileBasename } from "../services/file.service";

export const useFileTextEditor = () => {
  const files = reactive({})

  const addFile = async (path) => {
    if (files.hasOwnProperty(path)) {
      return;
    }

    const content = await getFileContent(path);

    files[path] = {
      path: path,
      name: getFileBasename(path),
      content: content,
      isSaved: true,
    }
  }

  const removeFileInList = (path) => {
    if (files.hasOwnProperty(path)) {
      delete files[path]
    }
  }

  const updateText = (path, content) => {
    files[path].content = content
    files[path].isSaved = false
  }

  const saveFile = async (path) => {
    console.log(path, files)
    await saveTextInFile(path, files[path].content)

    files[path].isSaved = true
  }

  return {
    files,
    addFile,
    removeFileInList,
    saveFile,
    updateText
  }
}
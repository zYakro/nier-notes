import { onMounted, ref } from 'vue'

import * as FileOperations from '../services/file-operations.service'
import { getFilesAndFolders } from '../services/file.service'

export const useFiles = (currentPath) => {
  const files = ref([])
  const errorMessage = ref('')

  const moveFile = async (destinationPath, sourcePath) => {
    const res = await FileOperations.moveFile(destinationPath, sourcePath)

    if (res.success) {
      await updateFiles()
    } else {
      errorMessage.value = res.error
    }
  };

  const renameFile = async (name, lastItem) => {
    const res = await FileOperations.renameFile(name, lastItem, currentPath.value)

    if(res.success){
      await updateFiles()
    }

    return res
  }

  const createFile = async (fileName) => {
    const res = await FileOperations.createFile(fileName, currentPath.value)

    if (res.success) {
      updateFiles()
    }

    return res
  };

  const deleteFolder = async (fileName) => {
    const res = await FileOperations.deleteFolder(fileName, currentPath.value)

    if (res.success) {
      await updateFiles()
    }

    return res
  }

  const deleteFile = async (fileName) => {
    const res = await FileOperations.deleteFile(fileName, currentPath.value)

    if (res.success) {
      await updateFiles()
    }

    return res
  }

  const createFolder = async (folderName) => {
    const res = await FileOperations.createFolder(folderName, currentPath.value)

    if (res.success) {
      updateFiles()
    }

    return res
  };

  const updateFiles = async () => {
    files.value = await getFilesAndFolders(currentPath.value)
  };
  
  onMounted(() => {
    updateFiles()
  })

  return {
    files,
    errorMessage,
    deleteFile,
    deleteFolder,
    updateFiles,
    createFile,
    createFolder,
    renameFile,
    moveFile,
  }
}
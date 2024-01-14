import { ref, onMounted } from 'vue'

export const useRecentFiles = () => {
  const maxRecentFiles = 4
  const recentFiles = ref([])

  const renameRecentFile = async (name, oldName, path) => {
    const pathModule = require('path')

    const newPath = pathModule.join(path, name)
    const oldPath = pathModule.join(path, oldName)

    recentFiles.value[recentFiles.value.indexOf(oldPath)] = newPath

    localStorage.recentFiles = JSON.stringify(recentFiles.value)
  }

  const isFileAlreadyInList = (path) => {
    if (recentFiles.value.includes(path)) {
      return true;
    }
    return false;
  }

  const addRecentFile = (path) => {
    if (isFileAlreadyInList(path)) {
      // Brings it to the top
      recentFiles.value.splice(recentFiles.value.indexOf(path), 1);
      recentFiles.value.unshift(path)
    }

    if (recentFiles.value.length >= maxRecentFiles) {
      recentFiles.value.pop()
    }

    recentFiles.value.unshift(path)
    localStorage.recentFiles = JSON.stringify(recentFiles.value)
  }

  const deleteRecentFile = (path) => {
    if (recentFiles.value.includes(path)) {
      recentFiles.value.splice(recentFiles.value.indexOf(path), 1);

      localStorage.recentFiles = JSON.stringify(recentFiles.value)
    }
  }

  onMounted(() => {
    if(localStorage.recentFiles){
      recentFiles.value = JSON.parse(localStorage.recentFiles)
    }
  })

  return { recentFiles, renameRecentFile, addRecentFile, deleteRecentFile }
}
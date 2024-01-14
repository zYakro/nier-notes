import { onMounted, ref } from "vue"
import { getHomePath } from "../services/file.service"

export const usePath = () => {
  const path = ref('')

  const updatePath = (path) => {
    path.value = path
    savePath()
  }

  const savePath = () => {
    localStorage.path = path.value
  }

  onMounted(() => {
    if(localStorage.path){
      path.value = localStorage.path
      return;
    }
    path.value = getHomePath()
  })

  return {
    path,
    updatePath,
    savePath
  }
}
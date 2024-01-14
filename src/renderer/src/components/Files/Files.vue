<template lang="">
    <div class="navegator-container">
        <Menu 
          @createFile="onNewFileOption"
          @createFolder="onNewFolderOption"
        />
        <div class="files-container">
            <div class="top-section">
                <RecentFiles :recentFiles="recentFiles" @openEditor="openEditor"/>
                <Path :path="currentPath" @moveFile="moveFile" @updatePath="updatePath" class="section"/>
            </div>
            <div class="bottom-section">
              <FileNavigator 
                :path="currentPath" 
                :files="files" 
                @updatePath="updatePath" 
                @moveFile="moveFile" 
                @openEditor="openEditor"
                @renameFile="onRenameOption"
                @createFolder="onNewFolderOption"
                @createFile="onNewFileOption"
                @deleteFile="onDeleteOption"
              />
            </div>
        </div>
    </div>
    <SystemMessageYesNo ref="systemMessageYesNoRef" />
    <SystemMessageOk ref="SystemMessageComponent" :message="errorMessage" />
    <Entry ref="entryRef" /> 
</template>
<script setup>

import { ref, watch } from 'vue';

import SystemMessageYesNo from '../SystemMessage/SystemMessageYesNo.vue';
import SystemMessageOk from '../SystemMessage/SystemMessageOk.vue';
import Entry from '../Entry/Entry.vue';
import RecentFiles from './RecentFiles/RecentFiles.vue'
import FileNavigator from './FileNavigator/FileNavigator.vue';
import BottomPanel from '../Panels/BottomPanel.vue';
import Path from './Path/Path.vue'
import Menu from './Menu/Menu.vue';

import { useRecentFiles } from '../../composables/useRecentFiles';
import { useRouter } from 'vue-router'
import { usePath } from '../../composables/usePath';
import { useFiles } from '../../composables/useFiles'

const { recentFiles, addRecentFile, deleteRecentFile, renameRecentFile } = useRecentFiles()
const { path: currentPath, savePath: saveCurrentPath } = usePath()
const { files, errorMessage, moveFile, renameFile, updateFiles, deleteFile, deleteFolder, createFile, createFolder }= useFiles(currentPath);
const router = useRouter()

const systemMessageYesNoRef = ref(null)
const entryRef = ref(null)
const fileToRename = ref('')
const fileToDelete = ref('')
const showSystemMessage = ref(false)
const systemMessageText = ref('')
const SystemMessageComponent = ref(null)

const updateErrorMessage = (errorMessage) => {
  SystemMessageComponent.value.displayOn(errorMessage)
};

const updatePath = async (newPath) => {
  currentPath.value = newPath
};

const openEditor = (path) => {
  addRecentFile(path)
  router.push({
    path: '/editor',
    query: {
      path
    }
  })
}

const onDeleteOption = (fileName, isDirectory) => {
  systemMessageYesNoRef.value.updateFunctions(
    (isDirectory) ? onDeleteFolder : onDeleteFile, 
    systemMessageYesNoRef.value.displayOff
  )

  fileToDelete.value = fileName

  systemMessageYesNoRef.value.displayOn(`Are you sure you want to delete ${fileName}? You can't undo this action.`)
}

const onDeleteFile = async () => {
  const res = await deleteFile(fileToDelete.value)

  if(!res.success){
    errorMessage.value = res.error
  } 

  systemMessageYesNoRef.value.displayOff()
}

const onDeleteFolder = async () => {
  const res = await deleteFolder(fileToDelete.value)

  if(!res.success){
    errorMessage.value = res.error
  } 

  systemMessageYesNoRef.value.displayOff()
}

const onRenameOption = (fileName) => {
  entryRef.value.showEntry(`Rename the following file: ${fileName}`, onRenameFile)
  fileToRename.value = fileName
}

const onRenameFile = async (newFileName) => {
  const res = await renameFile(newFileName, fileToRename.value)

  if(!res.success){
    entryRef.value.showErrorMessage(res.error)
    return false;
  }

  await renameRecentFile(newFileName, fileToRename.value, currentPath.value)
  return true
}

const onNewFileOption = () => {
  entryRef.value.showEntry(`Create a new file!`, onNewFile)
}

const onNewFile = async (fileName) => {
  const res = await createFile(fileName)

  if(!res.success){
    entryRef.value.showErrorMessage(res.error)
    return false;
  }

  return true
}

const onNewFolderOption = () => {
  entryRef.value.showEntry(`Create a new folder!`, onNewFolder)
}

const onNewFolder = async (folderName) => {
  const res = await createFolder(folderName)

  if(!res.success){
    entryRef.value.showErrorMessage(res.error)
    return false;
  }

  return true
}

watch(currentPath, async () => {
  saveCurrentPath()
  updateFiles()
})

watch(errorMessage, () => {
  updateErrorMessage(errorMessage.value)
})

</script>
<style scoped lang="sass">
    .navegator-container
        width: 95%
        height: 90%
        display: flex
        align-items: flex-start
        justify-content: flex-start
        flex-direction: row

    .files-container
        width: 100%
        height: 100%
        overflow-y: auto
        white-space: nowrap
        display: flex
        justify-content: center
        align-items: center
        flex-direction: column

    
    .bottom-section
        display: flex
        justify-content: space-evenly
        align-items: center
        flex-direction: row
        width: 100%
        height: 70%

        & > *
            width: 40%
            height: 90%
        

    .top-section
        display: flex
        align-items: center
        justify-content: center
        flex-direction: column
        width: 90%
        height: 30%

</style>

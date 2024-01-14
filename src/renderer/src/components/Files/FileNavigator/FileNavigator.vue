<template>
  <FileList 
    :files="props.files" 
    :path="props.path" 
    :hoveredFile="hoveredFile"
    @onFileClick="openFileOnClick"
    @moveFile="moveFile" 
    @changeHoveredFile="changeHoveredFile"
    @onFileAction="onFileAction"
  />
  <FileInfo 
    :hoveredFileName="hoveredFile.name" 
    :path="props.path" 
  />
</template>

<script setup>
import FileList from '../FileList/FileList.vue';
import FileInfo from '../FileInfo/FileInfo.vue'
import { ref } from 'vue';

const props = defineProps(['files', 'path']);
const emit = defineEmits(["updatePath", "moveFile", 'openEditor', 'renameFile', 'createFile', 'createFolder', 'deleteFile']);

const hoveredFile = ref(Array());

const changeHoveredFile = (item) => {
  hoveredFile.value = item;
}

const moveFile = (destinationPath, sourcePath) => emit('moveFile', destinationPath, sourcePath)

function onFileAction(action) {
  if (action === 'open') {
    return openFileOnClick(hoveredFile.value.name);
  }
  if(action === 'rename'){
    return emit('renameFile', hoveredFile.value.name)
  }
  if(action === 'delete'){
    return emit('deleteFile', hoveredFile.value.name, hoveredFile.value.isDirectory)
  }
  if(action === 'new-file'){
    return emit('createFile')
  }
  if(action === 'new-folder'){
    return emit('createFolder')
  }
}

function openFileOnClick(item) {
  const pathModule = require('path');
  const newPath = pathModule.join(props.path, item.name);

  if (!item.isDirectory) {
    emit('openEditor', newPath)
    return;
  }

  emit('updatePath', newPath)
}

</script>

<style scoped lang="sass">
    @import '@/styles/colors.sass'

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

    .folders-container
        width: 40%
        height: 90%
        background: transparent
        display: flex
        align-items: center
        justify-content: flex-start 
        flex-direction: column

        &
            align-items: space-around
            justify-content: space-around
    .left-box-section-bottom
        width: 18px
        height: 100%
        border-left: 8px solid $light-lines-color
        border-right: 2px solid $light-lines-color
        margin-right: 18px

</style>
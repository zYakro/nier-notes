<template lang="">
  <TitledListPanel title="Folders & Files">
    <div class="folders" @contextmenu.prevent="showMenu">
      <ListButton 
        @contextmenu.prevent="showContextMenuFileOptions" 
        icon="icon-folder" 
        v-for="(item, index) in getDirectories"
        @mouseover="changeHoveredFile(item)" 
        @click="onFileClick(item)" 
        :key="index" 
        :name="item.name" 
        draggable="true"
        @dragstart="setDragData(item.name, $event)" 
        @dragend="clearDataOnDragEnd" 
        @drop="getDataFromDrop(item.name, $event)"
        @dragover.prevent />
      <ListButton 
        @contextmenu.prevent="showContextMenuFileOptions" 
        icon="icon-file" 
        v-for="(item, index) in getFiles"
        @mouseover="changeHoveredFile(item)" 
        @click="onFileClick(item)" 
        :key="index" 
        :name="item.name" 
        draggable="true"
        @dragstart="setDragData(item.name, $event)" 
        @dragend="clearDataOnDragEnd" />
      <ContextMenu ref="contextMenuRef" :items="currentContextMenuItems" @item-selected="handleContextMenuAction" />
    </div>
  </TitledListPanel>
</template>
<script setup>
import ListButton from '../../Buttons/ListButton/ListButton.vue';
import ContextMenu from '../../ContextMenu/ContextMenu.vue';
import TitledListPanel from '../../Panels/TitledListPanel.vue';
import { ref, computed } from 'vue';
import { getPath } from '../../../services/file.service';
import { useDrag } from '../../../composables/useDrag';

const props = defineProps(['files', 'path', 'hoveredFile'])
const { handleDragStart, clearDataOnDragEnd, handleDrop } = useDrag() 
const emit = defineEmits(["moveFile", "changeHoveredFile", 'onFileAction', 'onFileClick'])
const contextMenuRef = ref(null)
const showFileOptions = ref(false)

const currentContextMenuItems = ref([])

const getDirectories = computed(() => props.files.filter(item => item.isDirectory === true));
const getFiles = computed(() => props.files.filter(item => item.isDirectory === false));

const nonFileOptions = [
  { label: 'New File', action: 'new-file' },
  { label: 'New Folder', action: 'new-folder' }
];

const fileOptions = [
  { label: 'Open', action: 'open' },
  { label: 'Rename', action: 'rename' },
  { label: 'Delete', action: 'delete' }
];

function showMenu(e) {
  e.preventDefault();
  
  currentContextMenuItems.value = showFileOptions.value ? fileOptions : nonFileOptions

  contextMenuRef.value.showMenu(e.layerX, e.layerY);
  showFileOptions.value = false;
  e.stopPropagation();
}

function showContextMenuFileOptions() {
  showFileOptions.value = true;
}

function handleContextMenuAction(item) {
  emit('onFileAction', item.action)  
}

const onFileClick = (item) => {
  emit('onFileClick', item)
}

const changeHoveredFile = (item) => {
  emit('changeHoveredFile', item)
}

function setDragData(fileName, event) {
  handleDragStart({
    path: getPath(props.path, fileName), 
    name: fileName
  }, event)
}

function getDataFromDrop(fileName, event) {
  const data = handleDrop(event)
  const destinationPath = getPath(props.path, fileName, data.name);
  emit('moveFile', destinationPath, data.path);
}

</script>
<style lang="sass" scoped>

  .folders
    width: 100%
    height: 100%
    flex: 1
</style>
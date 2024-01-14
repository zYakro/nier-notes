<template lang="">
    <div tabindex="0" @keydown="executeKeyCombinations" class="editor-container">
      <div class="editor-files">
        <EditorTabs 
          :tabs="tabs"
          @changeTab="changeEditorTab"
          @closeTab="closeEditorTab"
        />
        <EditorTextArea 
          :fileName="currentFile ? currentFile.name : ''"
          :textInFile="currentFile ? currentFile.content : ''"
          :isSaved="currentFile ? currentFile.isSaved : true"
          @updateText="updateCurrentText"
        />
      </div>
    <EditorBottomPanel 
      @onSave="onSave"
    />
    </div>
</template>
<script setup>
import { watch, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useTabs } from '../../composables/useTabs'
import { useFileTextEditor } from '../../composables/useFileTextEditor'
import EditorTextArea from './EditorTextArea/EditorTextArea.vue'
import EditorTabs from './EditorTabs/EditorTabs.vue'
import EditorBottomPanel from './EditorBottomPanel/EditorBottomPanel.vue'

const { tabs, currentTab, addTabAndNavigate, deleteTab, changeTab } = useTabs()
const { files, addFile, removeFileInList, saveFile, updateText } = useFileTextEditor()

const router = useRoute()

const currentFile = computed(() => {
  return files[currentTab.value]
})

const updateCurrentText = (content) => {
  updateText(currentTab.value, content)
}

const changeEditorTab = async (path) => {
  changeTab(path)
};

const closeEditorTab = (path) => {
  deleteTab(path)
  removeFileInList(path)
};

const onSave = () => {
  saveFile(currentTab.value)
}

const executeKeyCombinations = (e) => {
  if (e.ctrlKey && e.key.toLowerCase() === 's') {
    onSave()
  }
};

const addNewTabOnQueryParams = () => {
  if (router.query.path) {
    addFile(router.query.path)
    addTabAndNavigate(router.query.path)
  }
}

watch(() => router.query, () => {
  addNewTabOnQueryParams()
})

// If is redirected to /editor by a button, the component mounts but won't update router.query
// This adds a tab if there are query params
onMounted(() => {
  addNewTabOnQueryParams()
})

</script>
<style scoped lang="sass">
    @import '@/styles/colors.sass'

    .editor-container 
        display: flex
        align-items: center
        justify-content: center
        flex-direction: column
        width: 100%
        height: 100%

    .editor-files
        display: flex
        align-items: center
        justify-content: space-evenly
        flex-direction: row
        width: 100%
        height: 100%

</style>

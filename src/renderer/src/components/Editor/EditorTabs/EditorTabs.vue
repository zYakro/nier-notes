<template lang="">
    <div class="editor-tabs">
      <ListPanel>
        <div class="editor-tab-list">
          <ListBasicButton v-for="(item, index) in tabs" :name="getFileBasename(item)" @click="changeTab(item)">
            <i class="icon-x tab-icon" @click="closeTab(item)"></i>
          </ListBasicButton>
        </div>
      </ListPanel>
    </div>
</template>
<script setup>
import ListPanel from '../../Panels/ListPanel.vue'
import ListBasicButton from '../../Buttons/ListBasicButton/ListBasicButton.vue'
import { getFileBasename } from '../../../services/file.service'

const { tabs } = defineProps(['tabs'])
const emit = defineEmits(['changeTab', 'closeTab'])

const changeTab = (path) => emit('changeTab', path)
const closeTab = (path) => emit('closeTab', path)

</script>
<style lang="sass" scoped>
@import '@/styles/colors.sass'

.editor-tabs
  width: 30%
  height: 90%
  display: flex
  align-items: center
  justify-content: center 
 
.left-box
  width: 18px
  height: 100%
  border-left: 8px solid $light-lines-color
  border-right: 2px solid $light-lines-color
  margin-right: 25px           
  flex-direction: row

.editor-tab-list
  width: 100%
  height: 100%
  overflow-y: auto
  display: flex
  justify-content: flex-start
  align-items: flex-start 
  flex-direction: column
  gap: 5px

.line
    width: calc(95%)
    border-top: 1.8px solid $light-lines-color
    margin: 2px 0 5px 0

.line-bottom
    margin-top: auto

.tab-icon
  height: 12px
  width: 20px
  margin-left: auto

</style>
<script setup>

import TextInput from '../../TextInput/TextInput.vue'
import BasicButton from '../../Buttons/BasicButton/BasicButton.vue'
const { platform } = require('node:process')

import { ref } from 'vue';
import { useDrag } from '../../../composables/useDrag';

const pathSeparator = platform === 'win32' ? '\\' : '/'

const { handleDrop } = useDrag()
const props = defineProps(['path'])
const emit = defineEmits(['updatePath', 'moveFile'])

const inputValue = ref(props.path)
const showInput = ref(false)

const getPathFromIndex = (index) => {
  return props.path.split(pathSeparator).slice(0, index + 1).join(pathSeparator)
}

const changePath = (index, e) => {
  e.stopPropagation();
  emit("updatePath", getPathFromIndex(index))
}

const updateInputValue = (value) => {
  inputValue.value = value
}

const updatePathFromInput = () => {
  emit("updatePath", inputValue.value)
  showInput.value = false
}

const displayInput = (e) => {
  e.stopPropagation();
  showInput.value = true
}

const moveFileOnFileDrop = (index, event) => {
  const pathModule = require('path')

  const data = handleDrop(event)

  const destinationPath = pathModule.join(getPathFromIndex(index), data.name)

  emit('moveFile', destinationPath, data.path)
};

</script>

<template lang="">
    <div class="path">
        <div class="path-items" v-if="!showInput" @click="displayInput">
            <div class="tab-button-line"
                v-for="(item, index) in path.split(pathSeparator).slice(-7)" 
                :key="index" 
                @click="changePath(index, $event)"
                @drop="moveFileOnFileDrop(index, $event)"
                @dragover.prevent    
            >
                <BasicButton :name="item" icon="icon-back-slash" />
            </div>
        </div>
        <TextInput v-if="showInput" :inputValue="inputValue" @updateInputValue="updateInputValue" tabindex="0" @keydown.enter="updatePathFromInput"/>
    </div>
</template>

<style scoped lang="sass">
    @import '@/styles/colors.sass'

    .path
        width: 90%
        display: flex
        justify-content: space-evenly
        align-items: center
        flex-direction: row
        padding: 5px 0
        overflow-x: auto
        overflow-y: hidden

        .path-items
            width: 100%
            display: flex
            justify-content: space-evenly
            align-items: center
            flex-direction: row

        .tab-button-line
            &::before
                display: none
 
</style>

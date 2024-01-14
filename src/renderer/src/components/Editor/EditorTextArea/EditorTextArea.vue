<template lang="">
  <div class="container">
    <SimplePanel :title="fileName" :icon="!isSaved ? 'icon-circle' : ''">
        <textarea 
          class="text-area" 
          :value="textInFile"
          @input="handleInput"  
          spellcheck="false"
        />
    </SimplePanel>
  </div>
</template>
<script setup>
import SimplePanel from '../../Panels/SimplePanel.vue';
import { ref, watch, onMounted, computed } from 'vue';

const { fileName, textInFile, isSaved } = defineProps(['fileName', 'textInFile', 'isSaved'])
const emit = defineEmits(['updateText'])

const handleInput = (event) => {
  const newText = event.target.value;
  emit('updateText', newText);
};
</script>
<style lang="sass" scoped>
@import '@/styles/colors.sass'

.container
  width: 60%
  height: 80%

.text-area
  width: 92%
  height: 90%
  outline: none
  border: none
  background-color: inherit
  resize: none
</style>
<template lang="">
  <div class="bottom-panel">
    <BottomPanel>
      <p class="panel-title">
        Options:
      </p>
      <div class="actions-container">
        <div class="action" @click="onSave">SAVE</div>
      </div>
    </BottomPanel> 
  </div>
</template>
<script setup>
import BottomPanel from '../../Panels/BottomPanel.vue'

const emit = defineEmits(['onSave'])

const onSave = () => {
  emit('onSave')
}
</script>
<style lang="sass" scoped>
  .bottom-panel
    width: 94%
    height: 45px
    margin: 15px 0

  .actions-container
    width: 100%
    display: flex
    align-items: center
    justify-content: flex-end
    flex-direction: row
    padding-right: 25px

  .action
    cursor: pointer
</style>
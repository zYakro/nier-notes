<template lang="">
  <div class="list-panel-container">
    <PanelTitle :title="title" />
    <!-- This adds a gap between the two, styling couldn't do it -->
    <i class="margin-div" />
    <ListPanel>
      <slot></slot>
    </ListPanel>
  </div>
</template>
<script setup>
import PanelTitle from './PanelTitle.vue';
import ListPanel from './ListPanel.vue'

const { title } = defineProps(['title'])
</script>
<style lang="sass">
  .margin-div
    display: flex
    margin-top: 15px

</style>
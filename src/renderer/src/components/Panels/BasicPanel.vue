<template lang="">
  <div class="basic-panel-container">
    <PanelTitle :title="title" />
    <div class="content">
      <slot></slot>
    </div>
  </div>   
</template>
<script setup>
  import PanelTitle from './PanelTitle.vue';

  const { title } = defineProps(['title'])
</script>
<style scoped lang="sass">
    @import '@/styles/colors.sass'

    $max-width: 280px
    .content
      width: 100%
      height: calc(100% - 30px)
      background-color: $light-section-color
      overflow-y: auto
      display: flex
      align-items: center
      justify-content: flex-start 
      flex-direction: column
      padding: 10px 0 0 0
</style>
<template lang="">
  <div class="title-container">
    <div class="left-square"></div>
    <p class="title">
    {{title}}
    </p>
  </div>
</template>
<script setup>
const { title } = defineProps(['title'])
</script>
<style lang="sass" scoped>
  @import '@/styles/colors.sass'
  .title-container
      background: $brown-section-color
      width: 100%
      display: flex
      justify-content: flex-start
      align-items: center
      flex-direction: row
      max-height: 25px

  .title
      text-align: start
      color: $light-color
      padding-left: 0px

  .left-square
    display: flex
    justify-content: center
    align-items: center
    width: 12px
    height: 12px
    background-color: $light-color
    margin: 0 10px


</style>
<template lang="">
  <div class="section-panel"> 
    <div class="content">
      <div class="left-box"></div>
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="sass" scoped>
  @import '@/styles/colors.sass'

  .section-panel
    width: 100%
    display: flex
    align-items: center
    justify-content: space-evenly
    flex-direction: row
    background: $light-section-color
    height: 100%
    box-shadow: 2px 2px 0 $text-brown-shadow
    overflow-x: auto

  .left-box
    width: 15px
    height: 100%
    margin-right: 12px
    border-left: 8px solid $brown-color
    border-right: 2px solid $brown-color

  .content
    display: flex
    flex-direction: row
    justify-content: flex-start
    align-items: center
    width: 100%
    height: 100%

</style>
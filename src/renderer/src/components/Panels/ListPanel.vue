<template lang="">
  <div class="section">
    <div class="left-lines"></div>
    <div class="content">
      <i class="line"></i>
      <slot></slot>
      <i class="line"></i>
    </div>
  </div>
</template>
<script setup>
</script>
<style lang="sass" scoped>
    @import '@/styles/colors.sass'

    .line
        width: calc(95%)
        border-top: 1.8px solid $light-lines-color
        margin: 5px 5px

    .line-bottom
        margin-top: auto

    .section
        width: 100%
        height: calc(100% - 50px)
        display: flex
        align-items: center
        justify-content: center 
        flex-direction: row

    .left-lines
        width: 18px
        height: 100%
        border-left: 8px solid $light-lines-color
        border-right: 2px solid $light-lines-color
        margin-right: 18px

    .content
      width: 100%
      height: 100%
      display: flex
      background: $light-section-color
      overflow-y: auto
      display: flex
      justify-content: flex-start
      align-items: center
      flex-direction: column
      box-shadow: 2px 2px 0 $text-brown-shadow

</style>
<template lang="">
  <div class="simple-panel">
    <p class="simple-panel-title">
      <div class="left-square">
        <i :class="props.icon" class="left-square-icon"></i>
      </div>
      {{props.title}}
    </p>
    <div class="content">
      <i class="line"></i>
      <slot></slot>
      <i class="line"></i>
    </div>
  </div>
</template>
<script setup>
const props = defineProps(['title', 'icon']) 
</script>
<style lang="sass" scoped>
@import '@/styles/colors.sass'

.simple-panel
  width: 100%
  height: 100%
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column

.simple-panel-title
  width: 100%
  height: 38px
  background-color: $light-color
  display: flex
  justify-content: flex-start
  align-items: center

.left-square
  display: flex
  justify-content: center
  align-items: center
  width: 15px
  height: 15px
  background-color: $brown-color
  margin: 0 5px 0 10px 

.left-square-icon
  display: flex
  justify-content: center
  align-items: center
  width: 8px
  height: 8px

.content
  width: 100%
  height: calc(100% - 40px)
  background-color: $light-section-color
  display: flex
  justify-content: space-evenly
  align-items: center
  flex-direction: column


</style>
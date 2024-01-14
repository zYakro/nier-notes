<template lang="">
    <div class="list-button">
        <i class="list-button-icon" :class="icon"></i>
        {{ name }}
    </div>
</template>
<script setup>
const props = defineProps(['name', 'icon'])
</script>
<style scoped lang="sass">
    @import '@/styles/colors.sass'
    .list-button
      $padding: 2px
    
      width: calc(100% - $padding)
      height: 25px
      margin-bottom: 5px
      background: linear-gradient(to right, rgba(72,69,60,1) 50%, rgba(72,69,60,0) 50%)
      background-position: right bottom
      background-size: 200% 100%
      transition: background .3s ease-out, color .3s ease-out
      display: flex
      justify-content: flex-start
      align-items: center
      color: $brown-color
      cursor: pointer
      padding: 0 $padding

      &:hover
          background-position: left bottom
          color: $light-color

      &:hover > .list-button-icon
          filter: var(--icon-light-color)

      &::before
          content: ''
          display: block
          position: absolute
          margin-left: -40px
          width: 40px
          height: 15px
          opacity: 0
          transition: background .3s, opacity .3s ease-in-out

      &:hover::before
          background: url("@/assets/pointer.svg") no-repeat
          background-size: contain
          opacity: 1

    .list-button-icon
        width: 15px
        height: 15px
        margin-right: 5px
        margin-left: 5px
        filter: var(--icon-brown-color)


</style>
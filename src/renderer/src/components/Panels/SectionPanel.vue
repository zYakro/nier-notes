<template lang="">
<div class="section-panel"> 
  <slot></slot>
</div>
</template>
<script>
export default {
  
}
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
        height: 45px
        box-shadow: 2px 2px 0 $text-brown-shadow
        overflow-x: auto
    

</style>
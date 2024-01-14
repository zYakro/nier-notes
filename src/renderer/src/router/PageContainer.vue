<template lang="">
  <div class="tabs">
    <slot></slot>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="sass" scoped>
  .tabs
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    width: 100%
    height: 100%
    background-image: url('../assets/background.png')
    background-repeat: no-repeat
    background-size: cover

</style>
<template lang="">
  <div class="tabs-container">
    <div class="left-box"></div>
    <div class="tab-list">
      <TabButton v-for="item in tabs" :name="item.name" :to="item.to" :icon="item.icon" />
    </div>
  </div>
</template>
<script>
import TabButton from '../components/Buttons/TabButton/TabButton.vue';

export default {
  components: {
    TabButton
  },
  setup() {
    const tabs = [
      {
        name: 'Files',
        to: '/',
        icon: 'icon-location-arrow'
      },
      {
        name: 'Editor',
        to: '/editor',
        icon: 'icon-pencil'
      }
    ]

    return { tabs }
  }
}
</script>
<style lang="sass" scoped>
  .tabs-container
    display: flex
    align-items: center
    justify-content: flex-start
    flex-direction: row    
    width: 95%
    min-height: 60px

  .tab-list
    width: 100%
    height: 100%
    display: flex
    align-items: center
    justify-content: flex-start
    gap: 50px

  .left-box
    width: 20px
    height: 30px
    margin-right: 20px
    border-left: 12px solid #95917F
    border-right: 3px solid #95917F

</style>
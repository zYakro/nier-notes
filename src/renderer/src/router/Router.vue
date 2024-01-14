<template lang="">
  <PageContainer> 
    <Tabs />
    <Border />
    <div class="current-tab-container">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <Border />
  </PageContainer>
</template>
<script>
import Tabs from './Tabs.vue';
import Border from '../components/Border/Border.vue'
import PageContainer from './PageContainer.vue';

export default {
  components: {
    Tabs,
    Border,
    PageContainer
  }
}
</script>
<style lang="sass" scoped>
  .current-tab-container
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    width: 100%
    height: 85%

</style>
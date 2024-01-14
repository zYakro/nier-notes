<template>
  <div v-if="visible" :style="{ top: y + 'px', left: x + 'px' }" class="context-menu">
    <div class="context-menu-items-container">
      <i class="line"></i>
      <BasicButton v-for="(item, index) in items" :key="index" @click="selectItem(item)" :name="item.label" icon="icon-file"/>
      <i class="line"></i>
    </div>
  </div>
</template>

<script>
import BasicButton from '../Buttons/BasicButton/BasicButton.vue';

export default {
  props: {
    items: Array,
  },
  components: {
    BasicButton
  },
  data() {
    return {
      visible: false,
      x: 0,
      y: 0
    };
  },
  mounted() {
    window.addEventListener('click', this.hideMenu);
  },
  methods: {
    showMenu(x = 0, y = 0) {
      this.visible = true;
      this.x = x
      this.y = y
    },
    hideMenu() {
      this.visible = false;
    },
    selectItem(item) {
      this.$emit('item-selected', item);
      this.hideMenu();
    },
  },
  beforeDestroy() {
    window.removeEventListener('click', this.hideMenu);
  },
};
</script>

<style scoped lang="sass">
  @import '@/styles/colors.sass'

  .context-menu 
    position: absolute
    background-color: $light-section-color
    padding: 5px
    z-index: 1
    height: auto

    &-item-container
      display: flex
      justify-content: flex-start
      align-items: flex-start

  .line
    display: flex
    width: 100%
    border-top: 1.8px solid $light-lines-color
    margin: 2px 0 5px 0

</style>
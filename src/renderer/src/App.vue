<script setup>
import Router from './router/Router.vue';
</script>

<template>
  <div class="app-container">
    <Router />
  </div>
</template>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }

  .app-container{
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
  }
</style>

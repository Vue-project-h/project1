<template>
  <div id="app">
    <router-view name='head'/>
    <transition
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
      mode="out-in"
      appear
    >
      <router-view name="main" />
    </transition>
    <router-view name='footer'/>
  </div>
</template>
<script>
// import './assets/js/map.js'
</script>
<style >
@import './assets/css/reset.css';
@import './assets/css/deIndex.css';
@import 'http://at.alicdn.com/t/font_1448953_qju8sdigp6.css';


</style>

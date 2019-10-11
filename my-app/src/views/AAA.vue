<template>
  <div>
    <van-cell is-link @click="showPopup" position="bottom">展示弹出层</van-cell>

    <van-popup v-model="show" position="bottom" :style="{ height: '75%' }" closeable round>123456789</van-popup>
  </div>
</template>

<script>
  import Vue from "vue";
  import { Popup } from "vant";

  Vue.use(Popup);
  export default {
    data() {
      return {
        show: false
      };
    },

    methods: {
      showPopup() {
        this.show = true;
      }
    }
  };
</script>

<style>
</style>
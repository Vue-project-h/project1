<template>
  <div class="top">
    <!-- {{mag}} -->
    <filter-house v-for="(item,index) in mag" :key="index" :itemlist="item"></filter-house>
    <!-- <div v-for="(item,index) in mag" :key="index">{{item}}</div> -->
  </div>
</template>

<script>
  import Houselist from "../components/Houselist";

  export default {
    data() {
      return {
        housearray: []
      };
    },
    components: {
      "filter-house": Houselist
    },
    computed: {
      mag() {
        return this.$store.state.filterhouse;
      }
    },
  };
</script>

<style>
  .top {
    padding-top: 45px;
  }
</style>
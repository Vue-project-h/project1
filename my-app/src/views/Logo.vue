<template>
  <header>
    <div class="header">
      <a></a>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style>
header {
  background: #ff8001;
  height: 45px;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9997;
  overflow: hidden;
  width: 100%;
}

header .header {
  width: 90px;
  height: 13px;
  margin:15px 0 0 13px;
  position: absolute;
  background: url(../assets/img/logo.png) no-repeat;
  background-size: contain;
}

</style>
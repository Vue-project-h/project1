<template>
  <div class="home">
    
    <router-link :to="'/roomdetail/'+roomNum" >detial</router-link>
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  data(){
    return{
      roomNum:'159'
    }
  }
}
</script>

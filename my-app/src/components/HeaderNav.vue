<template>
  <div class="header">
      <router-link :to="linkto">
      <a  class="iconfont icon-youjiantou yjt"></a>
      <span>{{routername}}</span>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'HeaderNav',
   props:{
    routername:String,
    
  },
  computed: {
    linkto(){
      if(this.routername=="独栋房源"){
        return "/";
      }else if(this.routername=="登录"){
        return "/";
      }
      else if(this.routername=="用户"){
        return "/";
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
 @import 'http://at.alicdn.com/t/font_1448953_s0g9k5u5t0e.css';

.header {
  line-height: 44px;
  background: #ff8001;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.header span {
  font-size: 16px;
  color: #fff;
}
.yjt {
  font-size: 18px;
  padding-left: 10px;
  padding-right: 2px;
  color: #fff;
}






</style>

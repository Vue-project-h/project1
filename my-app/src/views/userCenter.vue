<template>
  <div class="usercenter">
    <HeaderNav :routername="routername"></HeaderNav>
    
    <div class="infoli">
      <div  class="top_inner">
      <div  class="timsg df">
        <span  class="tiname">{{userinfo.userName}}</span>
         <span class="df grtel">
           <img class="tiimg" src="@/assets/img/tel.png" alt="">
           <span class="person_ico">{{userinfo.userName}}</span>
        </span>
      </div>
    </div>
    <div class="infolist">
      <van-row type="flex" justify="space-around">
      <van-col span="6">
        <div class="il-item df">
          <img src="@/assets/img/money.png" alt="">
          <span>我的账户</span>
        </div>
      </van-col>
      <van-col span="6">
        <div class="il-item df">
          <img src="@/assets/img/zhangdan.png" alt="">
          <span>费用账单</span>
        </div>
      </van-col>
      <van-col span="6">
        <div class="il-item df">
          <img src="@/assets/img/card.png" alt="">
          <span>门禁管理</span>
        </div>
      </van-col>
    </van-row>
    </div>
    <div class="toollist">
     <van-cell title="我的订单" icon="orders-o" is-link url="/login">
      <van-icon slot="arrow"/>
     </van-cell>
     <van-cell title="我的合约" icon="newspaper-o" is-link url="/login">
      <van-icon slot="arrow"/>
     </van-cell>
     <van-cell title="我的收藏" icon="star-o" is-link url="/login">
      <van-icon slot="arrow"/>
     </van-cell>
     <van-cell title="维修" icon="setting-o" is-link url="/login">
      <van-icon slot="arrow"/>
     </van-cell>
     <van-cell title="保洁" icon="contact" is-link url="/login">
      <van-icon slot="arrow"/>
     </van-cell>
     
     <div class="out">
       <van-cell title="退出" icon="down" is-link url="/login">
      <van-icon slot="arrow"/>
     </van-cell>
     </div>
     
    </div>
    </div>
    



  </div>
</template>
<script>
import HeaderNav from "@/components/HeaderNav.vue";
import Vue from 'vue';
import { Row, Col } from 'vant';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell).use(CellGroup);
Vue.use(Row).use(Col);
  export default{
     components:{
      HeaderNav
    },
    data(){
      return{
        routername:'用户',
       
      }
    },computed: {
      userinfo(){
        return this.$store.state.userinfo;
      }
    },
    created() {
      // this.userinfo=this.$route.params.user;
      console.log("用户");
      
      // console.log(this.userinfo);
    },
  }
</script>
<style>
.infoli {
  margin-top: 44px;
  /* background-color: #fff; */
  
}
.infolist {
height: 61px;
  margin-bottom: 10px;
  border-top: 1px solid #f1f1f1;
  background-color: #fff;
}
.il-item {
  margin-top: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.il-item >img {
  width: 24px;
  height: 24px;
}
.il-item >span {
  margin-top: 5px;
  font-size: 12px;
  color: #999;
}
.top_inner {
  background-color: #fff;
  height: 70px;
  display: flex;
  align-items: center;
}
.timsg {
  flex-direction: column;
   margin-left: 32px;
}
.tiname {
  font-size: 16px;
  color: #444;
  font-weight: 700;
}
.grtel {
  align-items: center;
  margin-top: 5px;
 
}
.tiimg {
  width: 16px;
  height: 16px;
}
.out {
  margin-top: 10px;
  margin-bottom: 180px;
}
</style>
<template>
<div class="dd">
  <HeaderNav></HeaderNav>
  <div class="detail">
    
    <DetailInfo :roomdata="roomData"></DetailInfo>
    <div class="roomtype">
      <div class="roomtype-title df">
        <h2>本栋全部房型</h2>
        <div class="rt-num">
          {{roomTypeInfoVosNum}}种可选户型
        </div>
      </div>
      <div class="roomtype-list">
        <div class="roomtype-item df" v-for="(item,index) in roomTypeInfoVos" :key="index">
            <div class="rent_info">
              <h3 >{{item.typeBed}}房{{item.typeRoom}}厅
                <span class="surplus">有房可租</span>
              </h3> 
              <p>
                <span class="mark">￥</span>
                <span class="price">{{item.fee}}</span>
                <span class="unit">元起</span>
              </p>
            </div>
            
            <router-link to="/roomdetailinfo" class="look">去看看</router-link>
            
        </div>
        <div class="look-more">
          <span @click="lookmore" v-if="roomTypeInfoVosNum>3">查看更多</span>
        </div>
      </div>
      
    </div>
    <div class="team df">
      <a href="">
          <img src="../assets/img/team.d014a9e.jpg" alt="">
      </a>
      
    </div>
    <div class="fygk">
      <div class="roomftitle">
          <div  class="left_moudule df">
            <span class="l_tit"></span> 
            <h2 >房源概况</h2> 
            <span  class="r_tit"></span>
          </div>
      </div>
      <p>{{roomData.description}}</p>
    </div>
    <div class="room-local">
      <div class="roomftitle">
          <div  class="left_moudule df">
            <span class="l_tit"></span> 
            <h2 >房源位置</h2> 
            <span  class="r_tit"></span>
          </div>
      </div>
      <div class="map">
        
        <span class="map-info">
          位置：
          <em >{{roomData.address}}</em>
        </span>
            <Map :roomdata="roomData"></Map>
      </div>
      
    </div>
    <div class="room-serve">
      <div class="roomftitle">
          <div  class="left_moudule df">
            <span class="l_tit"></span> 
            <h2 >服务配套</h2> 
            <span  class="r_tit"></span>
          </div>
      </div>
     <div class="serv-list">
       <div  class="service_item df">
         <img  src="../assets/img/下载.png" alt=""> 
         <div class="service_right_box">
           <h2 >保洁服务</h2> 
           <span>定期保洁服务 为您营造一个舒适的 居家环境 </span>
          </div>
        </div>
       <div  class="service_item df">
         <img  src="../assets/img/sdq.png" alt=""> 
         <div class="service_right_box">
           <h2 >水电燃气代管代缴服务</h2> 
           <span>智能水电表水电情况 自动读取精确无误 实现智能化代管代缴服务 </span>
          </div>
        </div>
       <div  class="service_item df">
         <img  src="../assets/img/维修.png" alt=""> 
         <div class="service_right_box">
           <h2 >维修服务</h2> 
           <span>提供专业维修管理人员维护巡检,零星维修等 社区服务</span>
          </div>
        </div>
     </div>
      
    </div>
  </div>
</div>
  
</template>

<script>

import axios from 'axios'
import HeaderNav from '@/components/HeaderNav.vue'
import DetailInfo from '@/components/detailInfo.vue'
import Map from '@/components/map.vue'

export default {
  name: 'Roomdetail',
  props:{
    // roomNum:String
  },
  components: {
    DetailInfo,
    Map,
    HeaderNav
  },
  data(){
    return{
      roomNum:'',
      roomUrl:'https://api.yizhulife.com/room/singleHouseInfo/',
      roomData:{},
      roomTypeInfoVos:[],
      roomTypeInfoVosNum:0,
      moreRoomNum:3
    }
  },
  methods:{
    lookmore(){
       this.moreRoomNum= this.moreRoomNum>3?3:this.roomTypeInfoVosNum;
      this.roomTypeInfoVos=[];
       for(var i=0;i<this.moreRoomNum;i++){
          this.roomTypeInfoVos.push(this.roomData.roomTypeInfoVos[i]);
        }
    },
  },
  created() {
    
    this.roomNum=this.$route.params.roomNum;
    this.roomUrl+=this.roomNum;
    console.log(this.roomUrl);
     axios({
              method:'get',
              url:this.roomUrl,
              headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"156922426216419659972948"}',
                'X-Host': 'mall.cfg.common-banner'
              }
            }).then((res)=>{
              this.roomData=res.data.data;
              this.roomTypeInfoVosNum=this.roomData.roomTypeInfoVos.length;
              if(this.roomTypeInfoVosNum>3){
                for(var i=0;i<this.moreRoomNum;i++){
                  this.roomTypeInfoVos.push(this.roomData.roomTypeInfoVos[i]);
                }
              }else{
                for(var i=0;i<this.roomTypeInfoVosNum;i++){
                  this.roomTypeInfoVos.push(this.roomData.roomTypeInfoVos[i]);
                }
              }
              this.room_date=this.roomData;
              console.log(this.roomData);
              console.log(this.room_date);
              // this.swplist = res.data.data;
            });
            
      
  },
}

</script>
<style>



.detail {
  margin-top: 0.44rem;
}


.roominfo img{
  width: 100%;
  height: 1.6rem;
}

.roominfotext {
  background-color: #fff;
  height: 0.74rem;
  margin: 0.05rem 0 0.07rem 0;
  padding-left:0.16rem;
  flex-direction: column;
  justify-content: center;

}
.roominfotext h2{
  font-size: 0.13rem;
  color: #333;
  font-weight: 700;
  margin-bottom: 0.1rem;
}

.rf-left {
  font-size: 0.13rem;
  color: #f54300;
  
}
.house_type {
  border: 1px solid #f54300;
  padding: 2px;
  font-size: 0.12rem;
  margin-left: 0.05rem;
}


/* 本栋全部房型 */
.roomtype {
  background-color: #fff;
}
/* 本栋房型标题 */
.roomtype-title {
  justify-content: space-between;
  line-height: 0.34rem;
  padding-top: 0.12rem;
}
.roomtype-title h2{
  width: 1.3rem;
  background-image: url(../assets/img/de-bg.png);
  background-repeat: no-repeat;
  background-size: contain;
  font-size: 0.14rem;
  color: #fff;
  text-align: center;
}
.rt-num {
  color: #666;
  font-size: 0.12rem;
  padding-right: 0.1rem;
}

/* 房型 */
.roomtype-list {
  padding: 0.2rem 0.1rem;
}
.roomtype-item {
  color: #242424;
  font-size: .28rem;
  align-items: center;
  padding: .2rem .1rem;
  border-radius: .08rem;
  justify-content: space-between;
  box-shadow: inset 0 0 2px 2px #f4f4f4;
  margin-bottom: 0.1rem;
}
.rent_info h3{
  font-size: 0.12rem;
  font-weight: 700;
}
.rent_info .surplus {
  font-size: 0.12rem;
  font-weight: normal;
}
.rent_info p{
  font-size: 0;
}
.rent_info p span {
  font-size: 0.12rem;
  color: #f54300;
}
.unit {
  margin-left: 0.03rem;
}
.look {
  font-size: 0.12rem;
  width: 0.7rem;
  line-height: 0.28rem;
  background-color: #ff8f19;
  color: #fff;
  text-align: center;
  border-radius: 0.14rem;
}
.look-more {
  color: #ff8f19;
  font-size: 0.12rem;
  text-align: center;
}

/* 团队优惠 */
.team {
  height: 0.83rem;
  background-color: #fff;
  margin: 0.1rem 0;
  justify-content: center;
  align-items: center;
  padding: 0 0.1rem;
}
.team img {
  width: 100%;
}




/* 房源概况 */
.fygk {
  background-color: #fff;
  
  
}
.roomftitle {
  border-bottom: 1px solid #f1f1f1;
  padding: 0.12rem 0.15rem;
}
.left_moudule {
  font-size: 0.13rem;
 
}
.left_moudule span {
  width: 0.16rem;
  height: 0.15rem;
  background-repeat: no-repeat;
  background-size: contain;
}
.left_moudule h2 {
  color: #444;
  margin-left: 0.05rem;
  margin-right: 0.05rem;
}
.l_tit {
  background-image: url(../assets/img/de-bg1.png);
}
.r_tit {
  background-image: url(../assets/img/de-bg2.png);
}
.fygk p{
  font-size: .12rem;
  color: #666;
  padding: .23rem .14rem;
}

.room-local {
  background-color: #fff;
  margin: 0.1rem 0;
}


/* 服务配套 */
.room-serve {
  background-color: #fff;
}
.service_item {
  height: 0.7rem;
  align-items: center;
  padding: 0 0.1rem;
  justify-content: space-between;
}
.service_item img{
  width: 0.38rem;
  height: 0.4rem;
}
.service_right_box {
  width: 2.48rem;
  border-bottom: 1px solid #f1f1f1;
  padding-bottom: 0.1rem;
}
.service_right_box h2{
  font-size: 0.13rem;
  color: #444;
  margin-bottom: 0.05rem;
}
.service_right_box span{
  font-size: 0.1rem;
  color: #666;
}

</style>

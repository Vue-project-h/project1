<template>
<div class="roominfo">
  <div class="header df">
      <a  class="iconfont icon-right1 yjt1 yjt2"></a>
      <a href="" class="yjt1 df yjt4">
        <span class="iconfont icon-fenxiang yjt3"></span>
        <span>分享</span>
      </a>
      
  </div>
  <div class="detail">
    <div class="roominfo">
      <img src="@/assets/img/20190819111352863_40.jpg" alt="">
      <div class="roominfotext df">
        <h2>深圳市龙华区民治樟坑一区135栋</h2>
        <div class="aboutroom df">
          <span>整租</span>
          <span>精装房</span>
          <span>带电梯</span>
          <span>地铁</span>
        </div>
        <div  class="rf-left df">
          <div class="rff">
            <span  class="p-title">租金:</span> 
            <span  class="price">2000 元/月</span> 
            <span  class="p-title">已有0人预约</span>
          </div>
           <div class="p-title">2押1付</div>
          
        </div>
      </div>
    </div>
    <div class="roomtype">
      <div class="roomtype-title1 df">
        <h2 class="df">
          <span></span>
          房源概况
          <p>Housing profile</p>
          </h2>
        <div class="rt-num">
          发布于2019-04-08
        </div>
        
      </div>
      <div class="housing-text">
       <div class="situation_info">
         <dl ><dt >租金：</dt> <dd >1500元/月</dd></dl> 
         <dl ><dt >房型：</dt> <dd >1房1厅</dd></dl> 
         <dl ><dt >面积：</dt> <dd >38m²</dd></dl> 
         <dl ><dt >楼层：</dt> <dd >4楼/总共15层</dd></dl> 
         <dl ><dt >类型：</dt> <dd >精装公寓</dd> </dl> 
         <dl ><dt >装修：</dt> <dd >精装修</dd></dl> 
         <dl ><dt >朝向：</dt> <dd >朝东</dd></dl>
       </div>
      </div>
      
    </div>
    <div class="roomtype">
      <div class="roomtype-title1 df">

        <h2 class="df">
          <span></span>
          房屋配套
          <p>Housing support</p>
          </h2>
        <div class="rt-num">
          
        </div>
      </div>
      <div  class="facilities__box">
        <ul class="df">
          <li  class="fbli">
            <i  class="iconfont icon-shafa ico" ></i> 
            <span >沙发</span>
          </li>
          <li  class="fbli">
            <i  class="iconfont icon-shafa ico" ></i> 
            <span >沙发</span>
          </li>
          <li  class="fbli">
            <i  class="iconfont icon-shafa ico" ></i> 
            <span >沙发</span>
          </li>
          <li  class="fbli">
            <i  class="iconfont icon-shafa ico" ></i> 
            <span >沙发</span>
          </li>
          <li  class="fbli">
            <i  class="iconfont icon-shafa ico" ></i> 
            <span >沙发</span>
          </li>
          <li  class="fbli">
            <i  class="iconfont icon-shafa ico" ></i> 
            <span >沙发</span>
          </li>
          <li  class="fbli">
            <i  class="iconfont icon-shafa ico" ></i> 
            <span >沙发</span>
          </li>
          <li  class="fbli">
            <i  class="iconfont icon-shafa ico" ></i> 
            <span >沙发</span>
          </li>
          <li  class="fbli">
            <i  class="iconfont icon-shafa ico" ></i> 
            <span >沙发</span>
          </li>
          <li  class="fbli">
            <i  class="iconfont icon-shafa ico" ></i> 
            <span >沙发</span>
          </li>
          <li  class="fbli">
            <i  class="iconfont icon-shafa ico" ></i> 
            <span >沙发</span>
          </li>
        </ul>
      </div>
      <div class="room-clean">
        <p >1、一室一厅，随时看房，拎包入驻，24小时达人管理，南北通透，空气流通，阳光充足。<br>2、配有基础的家居、全新空调、全新热水器等等，简约舒适，扫描入住。<br>3、配有厨房，可以做饭！精致装修，温馨周到。<br>4、智能系统，二维码门锁一键缴费轻松便捷，每天有阿姨打扫公共区域卫生，让你无后顾之忧，给你一个五星级的家！<br>5、周边配套：地铁11号线松岗站D出口600米，松岗实验学校874米，海港城购物广场，华润万家，沃尔玛，花果山公园等。</p>
      </div>
      
    
    </div>
  </div>
  <div  class="detail_footer df">
    <a  href="javascript:;" id="keep_btn" class="a1">
      <i  class="iconfont icon-shoucang"></i><br>
       <span >收藏</span>
    </a> 
    <a  href="tel:13728621505" class="a1">
      <i  class="iconfont icon-servant"></i><br>
       <span >联系管家</span>
    </a> 
    <a  href="javascript:void(0);" class="btn"><span >预约看房</span></a> 
    <a  href="javascript:void(0);" class="btn order_btn"><span >立即下单</span></a> 
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
@import '../assets/css/detailinfo.css';
</style>

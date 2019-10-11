<template>
  <div>
    <div class="roominfo">
      <div class="header df">
        <a class="iconfont icon-right1 yjt1 yjt2"></a>
        <a href class="yjt1 df yjt4">
          <span class="iconfont icon-fenxiang yjt3"></span>
          <span>分享</span>
        </a>
      </div>
      <div class="detail">
        <div class="roominfo">
          <img src="@/assets/img/20190819111352863_40.jpg" alt />

          <!-- <div class="swip">
      <van-swipe :autoplay="1000" indicator-color="white" >
        <van-swipe-item>
          <img src="@/assets/img/20190819111352863_40.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/img/20190819111352863_40.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/img/20190819111352863_40.jpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="@/assets/img/20190819111352863_40.jpg" alt="">
        </van-swipe-item>
          </van-swipe>-->
          <!-- <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
          </van-swipe>-->
        </div>

        <div class="roominfotext df">
          <h2>{{roomData.title}}</h2>
          <div class="aboutroom df">
            <span v-for="(item,index) of roomData.features" :key="index">{{item.name}}</span>
          </div>
          <div class="rf-left df">
            <div class="rff">
              <span class="p-title">租金:</span>
              <span class="price">{{roomData.fee}} 元/月</span>
              <span class="p-title">已有0人预约</span>
            </div>
            <div class="p-title">{{roomData.feeTypeYa}}押{{roomData.feeTypeFu}}付</div>
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
          <div class="rt-num">发布于{{roomData.releaseTime}}</div>
        </div>
        <div class="housing-text">
          <div class="situation_info">
            <dl>
              <dt>租金：</dt>
              <dd>{{roomData.fee}}元/月</dd>
            </dl>
            <dl>
              <dt>房型：</dt>
              <dd>{{roomData.typeBed}}房{{roomData.typeRoom}}厅</dd>
            </dl>
            <dl>
              <dt>面积：</dt>
              <dd>{{roomData.area}}m²</dd>
            </dl>
            <dl>
              <dt>楼层：</dt>
              <dd>{{roomData.floor}}楼/总共{{roomData.totalFloor}}层</dd>
            </dl>
            <dl>
              <dt>类型：</dt>
              <dd>精装公寓</dd>
            </dl>
            <dl>
              <dt>装修：</dt>
              <dd>{{roomData.decorationDegree}}</dd>
            </dl>
            <dl>
              <dt>朝向：</dt>
              <dd>{{roomData.orientation}}</dd>
            </dl>
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
          <div class="rt-num"></div>
        </div>
        <div class="facilities__box">
          <ul class="df">
            <li class="fbli" v-for="(item,index) of support" :key="index">
              <i
                class="ico"
                :style="'background-image: url(&quot;'+item.ico+'&quot;); background-size: cover; background-position: 50% center; background-repeat: no-repeat;'"
              ></i>
              <span>{{item.name}}</span>
            </li>
          </ul>
        </div>
        <div class="room-clean">
          <p v-html="roomData.remark"></p>
        </div>
      </div>
    </div>
    <div class="detail_footer df">
      <a href="javascript:;" id="keep_btn" class="a1">
        <i class="iconfont icon-shoucang"></i>
        <br />
        <span>收藏</span>
      </a>
      
      <a href="tel:13728621505" class="a1">
        <i class="iconfont icon-servant"></i>
        <br />
        <span>联系管家
          
        </span>
      </a>
      <a href="javascript:void(0);" class="btn">
        <span>预约看房</span>
      </a>
      <a href="javascript:void(0);" class="btn order_btn">
        <span>立即下单</span>
      </a>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import HeaderNav from "@/components/HeaderNav.vue";
  import DetailInfo from "@/components/detailInfo.vue";
  import Map from "@/components/map.vue";
  import Vue from "vue";
  import { Swipe, SwipeItem } from "vant";

  Vue.use(Swipe).use(SwipeItem);
  export default {
    name: "Roomdetail",
    props: {
      // roomNum:String
    },
    components: {
      DetailInfo,
      Map,
      HeaderNav
    },
    data() {
      return {
        roomInfoStr: "",
        roomUrl: "https://api.yizhulife.com/room/",
        roomData: {},
        support: {},
        images: ["/img/20190819111352863_40.jpg", "/img/20190819111352863_40.jpg"]
      };
    },
    methods: {
      lookmore() {
        this.moreRoomNum = this.moreRoomNum > 3 ? 3 : this.roomTypeInfoVosNum;
        this.roomTypeInfoVos = [];
        for (var i = 0; i < this.moreRoomNum; i++) {
          this.roomTypeInfoVos.push(this.roomData.roomTypeInfoVos[i]);
        }
      }
    },
    created() {
      this.roomInfoStr = this.$route.params.roomInfoStr;
      // this.roomInfoStr=this.roomInfoStr.replace(/,/g,"/");

      this.roomUrl += this.roomInfoStr + "/fast";
      // console.log(this.roomInfoStr);
      axios({
        method: "get",
        url: this.roomUrl,
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"156922426216419659972948"}',
          "X-Host": "mall.cfg.common-banner"
        }
      }).then(res => {
        // console.log(res);
        this.roomData = res.data.data;
        this.roomData.remake=this.roomData.remark.replace(/。/g,'。<br>')
        this.roomData.releaseTime=this.roomData.releaseTime.split(' ')[0]
        
        console.log(this.roomData.releaseTime)
        // console.log(this.roomData.supports);
      });
      axios({
        method: "get",
        url: "https://api.yizhulife.com/data/SUPPORT",
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"156922426216419659972948"}',
          "X-Host": "mall.cfg.common-banner"
        }
      }).then(res => {
        // console.log(res);
        this.support = res.data;
        // console.log(123321);
        // console.log(this.support.length);
        // console.log(this.roomData);
      });
    }
  };
</script>
<style>
  @import "../assets/css/detailinfo.css";
</style>

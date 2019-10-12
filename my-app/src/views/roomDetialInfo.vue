<template>
  <div>
    <div class="roominfo">
      <div class="header df">
        <router-link class="iconfont icon-right1 yjt1 yjt2" :to="'/roomdetail/'+houseid"></router-link>
        <!-- <a  ></a> -->
        <a href class="yjt1 df yjt4">
          <span class="iconfont icon-fenxiang yjt3"></span>
          <span>分享</span>
        </a>
      </div>
      <div class="detail">
        <div class="roominfo">
          <img src="@/assets/img/20190819111352863_40.jpg" alt />

          
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
        <span>联系管家</span>
      </a>
      <a href="javascript:void(0);" class="btn">
        <span>预约看房</span>
      </a>
      <a href="javascript:void(0);" class="btn order_btn">
        <span>立即下单</span>
      </a>
    </div>

    <div class="bigboxs flearfix">
      <!-- <div class="same_type"> -->
      <div is-link @click="showPopup" position="bottom" class="same_type">
        <i class="iconfont icon-chazhaofangyuan"></i>
        <span>找同户型</span>
      </div>
      <!-- </div> -->
      <van-popup v-model="show" position="bottom" :style="{ height: '500px' }" closeable round>
        <div class="house-list-detail">
          <div class="house_all_header">
            <div class="header-cont">
              <div class="houseimgs">
                <img src="../assets/img/11.jpg" alt />
              </div>
              <div class="houseright">
                <p>
                  <span>{{whathouse.fee}}</span>
                  元/月
                </p>
                <h3>{{housetype.houseName}}</h3>
                <div class="info">
                  <span>
                    房间
                    <span class="s-left">{{whathouse.roomName}}</span>
                  </span>
                  <span>
                    面积
                    <span class="s-right">{{whathouse.area}}㎡</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="roomType clearfix" @click.stop="f2()">
            <span>其他户型</span>
            <div class="outher-list">
              <div class="listtitl">
                <span>{{whatting.typeBed}}</span>房间
                <span>{{whatting.typeRoom}}</span>厅
              </div>
              <i class="iconfont icon-xia1"></i>
            </div>
            <ul class="other-ul" v-if="ishide">
              <li
                v-for="(item,index) in housetype.roomTypeParams"
                :key="index"
                @click="f3(item,index)"
              >{{item.typeBed}}室{{item.typeRoom}}厅</li>
            </ul>
          </div>
          <div class="select_room">
            <span>选择房间</span>
            <div class="sel-r">
              <div class="can">
                <i class="iconfont icon-fangxing"></i>
                <span>可租</span>
              </div>
              <div class="not">
                <i class="iconfont icon-fangxing"></i>
                <span>已租</span>
              </div>
            </div>
          </div>
          <div class="room-ul-box">
            <ul>
              <li
                :class="[item.roomStatus==2?'orange':'gray',num==index?'housetype-click':'']"
                v-for="(item,index) in housetype.roomSimpleVos"
                :key="index"
                @click="f1(item,index)"
              >{{item.roomName}}</li>
            </ul>
          </div>
          <div class="conf">
            <!-- <router-link to="/roomdetailinfo"+></router-link> -->
            <div class="qd" @click="f4">确定</div>
          </div>
        </div>
      </van-popup>
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
  import { Popup } from "vant";

  Vue.use(Popup);
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
        show: false,
        housetype: [],
        num: 0,
        ishide: false,
        whathouse: {},
        whatting: {},
        support: {},
        houseid: 0,
        images: ["/img/20190819111352863_40.jpg", "/img/20190819111352863_40.jpg"]
      };
    },
    methods: {
      f1(a, b) {
        if (a.roomStatus == 2) {
          this.num = b;
          this.whathouse = a;
        }
      },
      f2() {
        this.ishide = !this.ishide;
      },
      f3(a, index) {
        this.whatting = a;
        let querys =
          "https://api.yizhulife.com/room/findIndexHouseFullInformationByType/" +
          this.housetype.houseId +
          "/" +
          a.typeBed +
          "/" +
          a.typeRoom;
        // console.log(querys)
        axios({
          method: "get",
          url: querys,
          headers: {
            "X-Client-Info":
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"156922426216419659972948"}',
            "X-Host": "mall.cfg.common-banner"
          }
        }).then(res => {
          this.housetype = res.data.data;
          // console.log(this.housetype);
          // console.log(res)
        });
      },
      f4(){
        this.$router.push({
          path: '/roomdetailinfo/'+this.whathouse.roomId
        });
        location.reload();
      },
      lookmore() {
        this.moreRoomNum = this.moreRoomNum > 3 ? 3 : this.roomTypeInfoVosNum;
        this.roomTypeInfoVos = [];
        for (var i = 0; i < this.moreRoomNum; i++) {
          this.roomTypeInfoVos.push(this.roomData.roomTypeInfoVos[i]);
        }
      },
      showPopup() {
        this.show = true;
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
        this.houseid = res.data.data.houseId;
        this.roomData.remake = this.roomData.remark.replace(/。/g, "。<br/>");
        this.roomData.releaseTime = this.roomData.releaseTime.split(" ")[0];
        // console.log(this.roomData.supports);
        let arr = [this.roomData.typeBed, this.roomData.typeRoom];
        this.whatting = {
          typeBed: this.roomData.typeBed,
          typeRoom: this.roomData.typeRoom
        };
        axios({
          method: "get",
          url:
            "https://api.yizhulife.com/room/findIndexHouseFullInformationByType/" +
            this.houseid +
            "/" +
            res.data.data.typeBed +
            "/" +
            res.data.data.typeRoom,
          headers: {
            "X-Client-Info":
              '{"a":"3000","ch":"1002","v":"5.0.4","e":"156922426216419659972948"}',
            "X-Host": "mall.cfg.common-banner"
          }
        }).then(res => {
          this.housetype = res.data.data;
          this.whathouse = res.data.data.roomSimpleVos[0];
        });
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
        this.support = res.data;
      });
    }
  };
</script>
<style>
  @import "../assets/css/detailinfo.css";
  .housetype-click {
    background-color: #f9e7d5;
  }
  .icon-xia1 {
    color: #ff8f19;
    background: transparent;
    font-size: 10px;
  }
  .same_type {
    position: fixed;
    right: -4%;
    top: 50%;
    z-index: 98;
    width: 90px;
    line-height: 22px;
    border-radius: 20px;
    padding: 5px 0;
    text-align: center;
    font-size: 0;
    -webkit-box-shadow: 0 0 2px 3px #ff8f19;
    box-shadow: 0 0 1px 3px #ff8f19;
    background-color: #ff8f19;
    color: white;
    font-size: 10px;
  }
  .same_type i {
    margin-right: 2px;
  }

  .house-list-detail .house_all_header {
    padding-bottom: 14px;
    margin: 14px 12px 0;
    border-bottom: 1px solid #ddd;
  }

  .house-list-detail .house_all_header .header-cont {
    overflow: hidden;
  }

  .house-list-detail .house_all_header .houseimgs {
    float: left;
    width: 95px;
    height: 73px;
  }

  .house-list-detail .house_all_header .houseimgs img {
    width: 100%;
  }

  .house-list-detail .house_all_header .houseright {
    float: left;
    margin-left: 5px;
  }

  .house-list-detail .house_all_header .houseright p {
    padding: 13px 0 2px;
    font-size: 10px;
    color: #f54300;
  }

  .house-list-detail .house_all_header .houseright p span {
    font-size: 12px;
  }

  .house-list-detail .house_all_header .houseright h3 {
    margin: 0 0 3px;
    font-size: 12px;
    color: #232323;
  }

  .house-list-detail .house_all_header .houseright .info span {
    font-size: 12px;
    color: #232323;
    margin-right: 20px;
  }

  .house-list-detail .house_all_header .houseright .info span .s-left {
    color: #fba44b;
  }

  .house-list-detail .house_all_header .houseright .info span .s-right {
    color: #999;
  }

  .house-list-detail .roomType {
    padding: 0 15px;
    line-height: 45px;
    border-bottom: 1px solid #ddd;
    position: relative;
  }

  .house-list-detail .roomType > span {
    font-size: 14px;
    color: #232323;
    float: left;
  }

  .house-list-detail .roomType .outher-list {
    float: right;
  }

  .house-list-detail .roomType .outher-list .listtitl {
    float: left;
    font-size: 14px;
    color: #666666;
    margin-right: 5px;
  }

  .house-list-detail .roomType .outher-list i {
    float: right;
  }

  .house-list-detail .select_room {
    overflow: hidden;
    padding: 15px 13px 5px;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  .house-list-detail .select_room > span {
    font-size: 14px;
    color: #232323;
  }

  .house-list-detail .select_room .sel-r {
    margin-top: 10px;
    display: inline-block;
    font-size: 12px;
    color: #666666;
    overflow: hidden;
  }

  .house-list-detail .select_room .sel-r .can {
    margin-right: 25px;
    float: left;
    line-height: 16px;
  }

  .house-list-detail .select_room .sel-r .can i {
    color: #fba44b;
  }

  .house-list-detail .select_room .sel-r .not {
    float: left;
    line-height: 16px;
  }

  .house-list-detail .select_room .sel-r .not i {
    color: #ccc;
  }

  .house-list-detail .room-ul-box {
    /* padding-bottom: 50px; */
    border-bottom: 1px solid #efeeee;
  }

  .house-list-detail .room-ul-box ul {
    padding: 0 15px;
    max-height: 170px;
    overflow: scroll;
    display: flex;
    justify-content: space-between;
    align-content: flex-start;
    flex-wrap: wrap;
  }

  .house-list-detail .room-ul-box ul li {
    margin-bottom: 12px;
    font-size: 12px;
    color: #333333;
    width: 60px;
    text-align: center;
    line-height: 30px;
    border-radius: 2px;
  }

  .house-list-detail .room-ul-box ul .orange {
    border: 1px solid #fba44b;
    color: #333333;
  }

  .house-list-detail .room-ul-box ul .gray {
    border: 1px solid #e1e1e1;
    color: #999;
  }

  .house-list-detail .conf {
    position: absolute;
    bottom: 10px;
    display: flex;
    justify-content: center;
  }

  .house-list-detail .conf .qd {
    margin: 10px 0;
    text-align: center;
    font-size: 14px;
    color: white;
    width: 304px;
    line-height: 34px;
    background-color: #fba44b;
    border-radius: 20px;
  }
  .other-ul {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    background: white;
  }
  .other-ul li {
    line-height: 42px;
    color: #232323;
    font-size: 14px;
    text-align: center;
    border-top: 1px solid #ddd;
  }
  .clearfix:after {
    content: " ";
    display: block;
    line-height: 0;
    height: 0;
    visibility: hidden;
    clear: both;
  }
</style>

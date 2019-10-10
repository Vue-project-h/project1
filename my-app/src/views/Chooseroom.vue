<template>
  <div class="property">
    <div v-if="!isShow">
      <div class="property-head">
        <span>您的租房需求</span>
      </div>
      <div class="price-range-choose">
        <span>选择租金范围</span>
        <div class="price-range">
          <p>￥0 -- ￥{{value}}</p>
          <van-slider
            v-model="value"
            bar-height="4px"
            active-color="#ff8001"
            :min="0"
            :max="10000"
          />
        </div>
      </div>
      <div class="nearby-position">
        <span>位置</span>
        <a>
          <span @click="ckcity">{{cityname}}</span>
        </a>
      </div>
      <div class="apartment-choose">
        <span>户型选择</span>
        <ul class="type-list">
          <li
            :class="isCheckd==index?'selectedClass':''"
            v-for="(item,index) in bednum"
            :key="index"
            @click="f2(index)"
          >{{item}}</li>
        </ul>
      </div>
      <div class="mult-choose apartment-choose">
        <span>特点（可多选）</span>
        <ul>
          <li :class="isCkeck?'selectedClass':''" @click="f4">不限</li>
          <li
            v-for="(item,index) in selectdata"
            :key="index"
            @click="f3(item,index)"
            :class="item.isC?'selectedClass':''"
          >
            {{item.name}}
            <i class="iconfont icon-duigou" v-if="item.isC"></i>
            <!-- <img :src="item.ico" alt /> -->
          </li>
        </ul>
      </div>
      <div class="confirm-or-reset">
        <div class="confirm-content">
          <a href class="co-reset">重置</a>
          <a
            href
            class="co-confirm"
            to="/filtehouse"
            @click.prevent="confirm(postmag)"
            @click="jump('/filtehouse')"
          >确定</a>
          <!-- <router-link class="co-confirm" to="/filtehouse" @click.prevent="confirm(postmag)">确定</router-link> -->
          <!-- <a  ></a> -->
        </div>
      </div>
    </div>
    <ul class="list-area" v-if="isShow">
      <li class="area-all" @click="f1(0)">不限</li>
      <li v-for="(item,index) in romnumber" :key="index" @click="f1(item)">
        {{item.name}}
        <span>（{{item.roomNum}}套）</span>
        <i class="iconfont icon-you-"></i>
      </li>
    </ul>
  </div>
</template>

<script>
  import Vue from "vue";
  import { Slider } from "vant";
  import axios from "axios";
  Vue.use(Slider);
  export default {
    data() {
      return {
        value: 10000,
        selectdata: [],
        romnumber: [],
        cityname: "选择区域",
        isShow: false,
        bednum: ["不限", "单间", "二房", "三房"],
        isCheckd: 0,
        isCkeck: true,
        postmag: {
          typeBed: 0,
          areaCode: null,
          minFee: 0,
          maxFee: 10000,
          list: [],
          x: [],
          houselist: {}
        }
      };
    },
    watch: {
      value(newval, oldval) {
        this.postmag.maxFee = newval;
      }
    },
    methods: {
      onChange(value) {
        this.$toast("当前值：" + value);
      },
      ckcity() {
        this.isShow = !this.isShow;
      },
      f1(a) {
        if (a == 0) {
          this.cityname = "不限";
        } else {
          this.cityname = a.name;
          this.postmag.areaCode = a.id;
        }
        this.isShow = !this.isShow;
      },
      f2(a) {
        this.isCheckd = a;
        this.postmag.typeBed = a;
      },
      f3(a, b) {
        this.postmag.list.push(a.id);
        this.postmag.list = Array.from(new Set(this.postmag.list));

        this.isCkeck = false;
        if (a.isC == true) {
          if (this.postmag.list.indexOf(a.id) != -1) {
            let x = this.postmag.list.indexOf(a.id);
            this.postmag.list.splice(x, 1);
          }
        }
        a.isC = !a.isC;
      },
      f4() {
        this.postmag.list = [];
        this.isCkeck = true;
        this.selectdata.forEach((val, i, arr) => {
          val.isC = false;
        });
      },
      confirm(a) {
        axios({
          method: "post",
          url: `https://api.yizhulife.com/room/fingRoomInofoListByFilter`,
          data: a
        }).then(res => {
          this.x = res.data.data;
          this.$store.commit("addHouse", this.x);
        });
        // setTimeout(() => {
        // }, 1000);
      },
      jump(a) {
        this.$router.push({
          path: a
        });
      }
    },
    created() {
      axios({
        method: "get",
        url: "https://api.yizhulife.com/data/SUPPORT"
      }).then(res => {
        this.selectdata = res.data;
        this.selectdata.forEach((val, i, arr) => {
          Vue.set(val, "isC", false);
        });
      });
      axios({
        method: "get",
        url: "https://api.yizhulife.com/room/findZipCodeNum/440300"
      }).then(res => {
        this.romnumber = res.data.data;
      });
    }
  };
</script>

<style>
  .property .property-head {
    font-size: 16px;
    color: #333;
    text-align: center;
  }

  .property .property-head span {
    display: inline-block;
    line-height: 125px;
    width: 98px;
  }

  .property .price-range-choose {
    font-size: 12px;
    color: #333;
    padding: 0 28px;
  }

  .property .price-range-choose .price-range {
    margin: 35px 0 50px;
  }

  .property .price-range-choose .price-range p {
    color: #666;
    text-align: center;
    margin-bottom: 15px;
  }

  .property .nearby-position {
    border-top: 1px solid #efeeee;
    border-bottom: 1px solid #efeeee;
    font-size: 12px;
    padding: 0 28px;
    line-height: 45px;
    overflow: hidden;
  }

  .property .nearby-position span {
    float: left;
    color: #333;
  }

  .property .nearby-position a {
    float: right;
  }

  .property .nearby-position a span {
    color: #999;
  }

  .property .apartment-choose {
    padding: 22px 28px 0;
  }

  .property .apartment-choose span {
    font-size: 12px;
    color: #333;
  }

  .property .apartment-choose ul {
    margin: 15px 0;
    overflow: hidden;
  }

  .property .apartment-choose ul .selectedClass {
    border: 1px solid #ffaa5d !important;
    color: #ffaa5d;
    background-color: #f9e7d5;
  }

  .property .apartment-choose ul li {
    float: left;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    width: 75px;
    line-height: 25px;
    font-size: 12px;
    margin: 0 10px 10px 0;
    color: #333;
    text-align: center;
  }
  .property .mult-choose li {
    text-align: center;
    position: relative;
  }
  .property .mult-choose li i {
    font-size: 10px;
    position: absolute;
    top: 50%;
    margin-top: -15px;
    right: 8px;
    /* background: #fba44b; */
    /* border-radius: 50%; */
    color: #fba44b;
  }
  .property .mult-choose .selectedClass {
    border: 1px solid #ffaa5d !important;
    color: #ffaa5d;
    background-color: #f9e7d5;
  }

  .property .confirm-or-reset {
    border-top: 1px solid #efeeee;
    text-align: center;
    padding: 30px 0 40px 0;
  }

  .property .confirm-or-reset .confirm-content a {
    width: 94px;
    line-height: 29px;
    border-radius: 6px;
    text-align: center;
    font-size: 14px;
    color: #000;
    display: inline-block;
    border: 1px solid #ddd;
  }

  .property .confirm-or-reset .confirm-content .co-confirm {
    background: #fba44b;
    border: 1px solid #fba44b;
    color: white;
    margin-left: 20px;
  }
  .list-area {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
  }
  .list-area li {
    font-size: 12px;
    color: #444;
    line-height: 45px;
    padding: 0 16px;
    box-shadow: 0 1px 0 0 #f0f0f0;
  }

  .list-area li i {
    float: right;
    color: #c1c1c1;
  }
  .list-area .area-all {
    font-size: 12px;
    color: #ffaa5d;
  }
</style>
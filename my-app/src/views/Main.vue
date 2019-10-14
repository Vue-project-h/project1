<template>
  <div>
    <router-link to="/test">
      <div class="banner">
        <div class="banner-box">
          <a href>
            <img src="../assets/img/banner.jpg" alt />
          </a>
        </div>
      </div>
    </router-link>
    <div class="screen_content">
      <ul>
        <li
          :class="index==num?'screen_content-active':''"
          v-for="(item,index) in arr"
          :key="index"
          @click="f1(index)"
        >
          <i :class="item.icon"></i>
          <span>{{item.title}}</span>
          <img :src="num==index?`${item.imgUrl}`:''" alt />
        </li>
      </ul>
    </div>
    <div class="tit_moudule">
      <div class="left-title">
        <h2>热门房源</h2>
        <span>Popular listings</span>
      </div>
      <div class="right-title">
        <i class="iconfont icon-shaixuan"></i>
        <router-link to="/chooseroom">房源筛选</router-link>
      </div>
    </div>
    <div class="houselist">
      <my-houselist v-for="(item,index) in housedata" :key="index" :itemlist="item"></my-houselist>
    </div>
  </div>
</template>

<script>
  import Houselist from "../components/Houselist";
  import axios from "axios";

  export default {
    data() {
      return {
        num: 0,
        isActive: true,
        arr: [
          {
            title: "全部房源",
            icon: "iconfont icon-house",
            imgUrl: "./img/border.jpg"
          },
          {
            title: "精装公寓",
            icon: "iconfont icon-dasha1",
            imgUrl: "./img/border.jpg"
          },
          {
            title: "经济房源",
            icon: "iconfont icon-jingji",
            imgUrl: "./img/border.jpg"
          }
        ],
        housedata: []
      };
    },
    components: {
      "my-houselist": Houselist
    },
    methods: {
      f1(a) {
        this.num = a;
        if (a == 0) {
          axios({
            method: "get",
            url: "https://api.yizhulife.com/room/indexRoomHouseInfo/whole"
          }).then(res => {
            let arrs = [];
            res.data.data.forEach((val, i, arr) => {
              if (i < 10) {
                arrs.push(arr[i]);
              }
              this.housedata = res.data.data;
            });
          });
        } else if (a == 1) {
          axios({
            method: "get",
            url: "https://api.yizhulife.com/room/indexRoomHouseInfo/hardcover"
          }).then(res => {
            let arrs = [];
            res.data.data.forEach((val, i, arr) => {
              if (i < 10) {
                arrs.push(arr[i]);
              }
              this.housedata = res.data.data;
            });
          });
        } else if (a == 2) {
          axios({
            method: "get",
            url: "https://api.yizhulife.com/room/indexRoomHouseInfo/economics"
          }).then(res => {
            let arrs = [];
            res.data.data.forEach((val, i, arr) => {
              if (i < 10) {
                arrs.push(arr[i]);
              }
              this.housedata = res.data.data;
            });
          });
        }
      }
    },
    created() {
      axios({
        method: "get",
        url: "https://api.yizhulife.com/room/indexRoomHouseInfo/whole"
      }).then(res => {
        let arrs = [];
        res.data.data.forEach((val, i, arr) => {
          if (i < 10) {
            arrs.push(arr[i]);
          }
          this.housedata = res.data.data;
        });
      });
    }
  };
</script>

<style>
  .banner {
    margin-top: 45px;
    height: 151px;
    width: 100%;
  }

  .banner a {
    width: 100%;
    display: inline-block;
    overflow: hidden;
    height: 151px;
  }

  .banner a img {
    width: 100%;
  }
  .screen_content {
    margin: 20px 0;
  }

  .screen_content ul {
    line-height: 20px;
    height: 20px;
    padding: 0 9px;
    font-size: 14px;
    color: #9c9c9c;
  }

  .screen_content ul li {
    float: left;
    width: 33.33%;
    text-align: center;
    position: relative;
  }

  .screen_content ul li i {
    font-weight: bold;
    margin-right: 2px;
  }

  .screen_content ul li img {
    width: 20px;
    height: 4px;
    position: absolute;
    bottom: -11px;
    left: 50%;
  }

  .screen_content ul .screen_content-active {
    font-size: 16px;
    color: #000000;
  }

  .screen_content ul .screen_content-active i {
    color: #ff8001;
  }
  .tit_moudule {
    padding: 0 9px;
    font-size: 12px;
    color: #999999;
    overflow: hidden;
    line-height: 35px;
  }

  .tit_moudule .left-title {
    float: left;
  }

  .tit_moudule .left-title h2 {
    font-size: 16px;
    color: #444444;
    display: inline-block;
    vertical-align: middle;
    margin-right: 2px;
  }

  .tit_moudule .left-title small {
    vertical-align: baseline;
  }

  .tit_moudule .right-title {
    float: right;
  }
</style>
<template>
  <div class="main-list" @click="f1(itemlist)">
    <router-link :to="'/roomdetail/'+itemlist.id">
      <div class="main-list-items">
        <div class="items-imgbox">
          <img :src="itemlist.imagePath" alt />
        </div>
        <div class="details">
          <p class="details-titles">{{itemlist.name}}</p>
          <div class="list-items-adress">
            <h3>{{itemlist.address}}</h3>
            <div class="list-items-choose" v-if="itemlist.roomTypeParams">
              <span class="highlight-color">{{itemlist.roomTypeParams.length}}</span>
              <span>种可选户型</span>
            </div>
          </div>
          <div class="list-details-price">
            <div class="details-price-left">
              <span class="items-price">¥{{itemlist.fee}}元/起</span>
              <span class="items-type">精装公寓</span>
            </div>
            <div class="details-price-rigjt">
              <i class="iconfont icon-dian"></i>
              <span>有房可租</span>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    props: {
      itemlist: Object
    },
    created() {
      // console.log(itemlist);
    },
    methods: {
      f1(a) {
        console.log("/roomdetail/" + a.id);
        // this.router.push({
        //   path:'/roomdetail/'+a.id
        // })
      }
    }
  };
</script>

<style>
  .main-list {
    padding: 0 10px;
    margin: 10px 0 0;
    border-bottom: 10px solid #f5f5f7;
  }

  .main-list-items {
    width: 100%;
  }

  .main-list-items .items-imgbox {
    overflow: hidden;
  }

  .main-list-items .items-imgbox img {
    width: 100%;
    background: red;
  }

  .main-list-items .details .details-titles {
    font-size: 13px;
    color: #002323;
    display: inline-block;
    font-weight: bold;
    line-height: 35px;
  }

  .main-list-items .details .list-items-adress {
    font-size: 11px;
    color: #999999;
    line-height: 15px;
    overflow: hidden;
  }

  .main-list-items .details .list-items-adress h3 {
    float: left;
  }

  .main-list-items .details .list-items-adress .list-items-choose {
    float: right;
  }

  .main-list-items
    .details
    .list-items-adress
    .list-items-choose
    .highlight-color {
    color: #fba44b;
  }

  .main-list-items .details .list-details-price {
    line-height: 30px;
    overflow: hidden;
    padding: 2px 0;
  }

  .main-list-items .details .list-details-price .details-price-left {
    float: left;
  }

  .main-list-items .details .list-details-price .details-price-left .items-price {
    color: #f54300;
    font-weight: 700;
    font-size: 14px;
  }

  .main-list-items .details .list-details-price .details-price-left .items-type {
    padding: 2px 4px;
    font-size: 10px;
    border: 1px solid #fba44b;
    color: #fba44b;
    border-radius: 3px;
  }

  .main-list-items .details .list-details-price .details-price-rigjt {
    float: right;
    font-size: 10px;
    color: #242424;
  }

  .main-list-items .details .list-details-price .details-price-rigjt i {
    color: #fba44b;
    font-size: 5px;
  }
</style>
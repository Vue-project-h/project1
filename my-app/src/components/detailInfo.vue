<template>
  <div class="roominfo">
      <img :src="roomdata.imagePath" alt="">
      <div class="roominfotext df">
        <h2>{{roomdata.address}}</h2>
        <div  class="rf-left ">
          <span  class="price">{{roomdata.fee}} 元/起</span> 
          <span class="house_type" v-if="roomdata.type==0">精装公寓</span> 
          <span class="house_type" v-if="roomdata.type==1">经济房源</span> 
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetialInfo',
  props:{
    roomdata:Object
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

.roominfo img{
  width: 100%;
  height: 160px;
}

.roominfotext {
  background-color: #fff;
  height: 74px;
  margin: 5px 0 7px 0;
  padding-left:16px;
  flex-direction: column;
  justify-content: center;

}
.roominfotext h2{
  font-size: 13px;
  color: #333;
  font-weight: 700;
  margin-bottom: 10px;
}

.rf-left {
  font-size: 13px;
  color: #f54300;
  
}
.house_type {
  border: 1px solid #f54300;
  padding: 2px;
  font-size: 12px;
  margin-left: 5px;
}
</style>

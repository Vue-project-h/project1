
 <template>
        <div id="map1"></div>
</template>



<script>
import Vue from 'vue'
import {MP} from '../assets/js/map.js'
export default {
  name: 'map1',
  
  props:{
    roomdata:Object,
   
    
  },
    data(){
        return{
            ak:'bj0w5aCb5DdUkG7WvKZrupXN7wljczXl'//密钥
        }
    },
    watch: {
      roomdata(){
        
      //  this.mappp();
      }
    },
    methods:{
      mappp(){
        
        
        this.$nextTick(function(){
         
          this.ak='bj0w5aCb5DdUkG7WvKZrupXN7wljczXl';
          var _this = this;
          MP(_this.ak).then(BMap => {
            
          var map1 = new BMap.Map('map1');
          //  var poi = new BMap.Point(this.jd,this.wd);
            var poi = new BMap.Point(114.044573,22.619806);//定位初始位置的经纬度
            map1.centerAndZoom(poi, 18);//定义地图缩放比例（1-19）
            map1.enableScrollWheelZoom();//定义是否可移动坐标
            

            
            var marker = new BMap.Marker(poi); //创建marker对象
            marker.enableDragging(); //marker可拖拽
            
            map1.addOverlay(marker); //在地图中添加marker
          })
        })
      }
    },
    created() {
      
          this.$nextTick(function(){
          var _this = this;
          
          MP(_this.ak).then(BMap => {
            console.log(BMap);
          var map1 = new BMap.Map('map1');
          //  var poi = new BMap.Point(this.room_data.longitude,this.room_data.latitude);
            var poi = new BMap.Point(114.044573,22.619806);//定位初始位置的经纬度
            map1.centerAndZoom(poi, 18);//定义地图缩放比例（1-19）
            map1.enableScrollWheelZoom();//定义是否可移动坐标
            

            
            var marker = new BMap.Marker(poi); //创建marker对象
            marker.enableDragging(); //marker可拖拽
            
            map1.addOverlay(marker); //在地图中添加marker
          })
        })
         
        
    }


} 

</script>
<style>
@import 'http://api.map.baidu.com/library/SearchInfoWindow/1.5/src/SearchInfoWindow_min.css';
@import '../assets/css/map.css';
</style>
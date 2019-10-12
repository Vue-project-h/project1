<template>
  <div class="login">
    <HeaderNav :routername="routername"></HeaderNav>
    <div class="login-main">
      <div class="lo-logo">
        <img src="@/assets/img/logo1.png" alt="">
      </div>
      <div class="zk-login">
        <span></span>
        租客登录
        <span></span>
      </div>
      <form action="">
        <div  class="input_box">
          <i  class="ico phone_ico"></i>
           <input v-model="tel" type="tel" placeholder="请输入手机号码">
        </div>
        <div  class="input_box">
          <i  class="ico pwd_ico"></i> 
          <input v-model="yanzheng" type="tel" placeholder="请填写验证码"> <span  class="get_code" @click="tishi(tel)">{{yzm}}</span>
          </div>
          
          
          <div class="confirm_btn_box">
            <!-- <router-link :to="linkurl" @click="login(tel,yanzheng)" class="confirm_btn">
              登录</router-link> -->
              <router-link :to="linkurl" >
            <a @click="login(tel,yanzheng)"  class="confirm_btn">
              
              登录
            </a>
            </router-link>
          </div>
      </form>
      <div  class="login_proto">
        <span >
          点击登录即表示同意 
          《驿住服务协议》
          </span>
          </div>
    </div>
  </div>
</template>

<script>
  import HeaderNav from "@/components/HeaderNav.vue";
  import Vue from 'vue';
  import axios from 'axios'
  import { Toast } from 'vant';
  Vue.use(Toast);
  export default {
    components:{
      HeaderNav
    },
    data(){
      return{
        routername:'登录',
        tel:'',
        yanzheng:'',
        yzm:'获取验证码',
        ynum:60,
        linkurl:'',
        user:{}
      }
    },
    methods: {
      tishi(a){
        if(!(/^1[3456789]\d{9}$/.test(a))){ 
        Toast('手机号码有误');  
        return false; 
        } else{
          var telstr='https://api.yizhulife.com/public/send/'+a
          console.log(telstr);
          axios({
            method: "get",
            url: telstr,
            headers: {
              "X-Client-Info":
                '{"a":"3000","ch":"1002","v":"5.0.4","e":"156922426216419659972948"}',
              "X-Host": "mall.cfg.common-banner"
            }
          }).then(res => {
            

            console.log(2345);
            console.log(res.data);
            console.log(res.data.msg);

              if(res.data.msg!="SUCCESS"){
                Toast(res.data.msg); 
              }else{
                var i=60;
               var timer=setInterval(() => {
                //  console.log(this.yzm);
                  i--;
                    if(i>0){
                      this.yzm=`${i}秒`;
                      this.ynum=1;
                    }else{
                      clearTimeout(timer);
                      this.yzm=`获取验证码`;
                      this.ynum=0;
                    }
                      
                    
                    //  console.log(this.yzm);
                }, 1000);
                
                if(this.yanzheng){
                  console.log(this.yanzheng);
                }else{
                  console.log(3456);
                }
              }
            
          });
        }
        
        
      },
      login(tel,yzm){
        if(!(/^1[3456789]\d{9}$/.test(tel))){ 
            Toast('手机号码有误');  
            return false; 
        }else if(!yzm){
          Toast('请填写验证码');
          return false; 
        }else{
          axios({
              
          method: "post",
          url: 'https://api.yizhulife.com/public/codeLogin',
          data: {
                code: this.yanzheng,
                phone: tel,
                roleType: 4
              },
        }).then(res => {
          console.log(8888);
          console.log(res.data.data.userName);
          this.user=res.data.data;
          this.$store.commit('ininfo',this.user);
           console.log(this.user);
          this.linkurl="/usercenter/"+this.tel;
        });
        }
      }
    },
    
  }
</script>

<style>
.login-main {
  margin-top: 44px;
}
.lo-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
  .lo-logo img{
    margin-top: 50px;
    width: 155px;
    height: 24px;
  }
  .zk-login {
    margin-top: 30px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #b9b8b8;
    padding-bottom: 20px;
  }
  .zk-login >span {
    border-top: 1px solid #dedddd;
    width: 54px;
    margin: 0 5px;
  }
  .input_box {
    position: relative;
    background-color: #fff;
    margin-top: 13px;
    border-radius: 6px;
    border: 1px solid #f4f4f4;
    margin: 0 13px;
    margin-top:10px;
    display: flex;
    align-items: center;
  }
  .input_box .ico {
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: cover;
    vertical-align: middle;
    position: absolute;
    top: 50%;
   
  }
  .phone_ico {
    width: 10px;
    height: 16px;
    background-image: url('../assets/img/phone.png');
    margin-top: -8px;
    left: 10px;
  }
  .pwd_ico {
     width: 11px;
    height: 12px;
    background-image: url('../assets/img/writenum.png');
    margin-top: -5.5px;
    left: 10px;
  }
  .input_box input {
    background-color: #fff;
    border-radius: 6px;
    /* width: 100%; */
    border: 0;
    outline: 0;
    font-size: 12px;
    caret-color: #cbcbcb;
    padding: 14px 28px;
    color: #000;
    height: 22px;
  }
  .input_box input::placeholder{
    color: #cbcbcb;
    font-size: 12px;
  }
  .input_box >span {
    display: inline-block;
    width: 76px;
    line-height: 27px;
    text-align: center;
    /* position: absolute; */
    right: 9px;
    top: 3px;
    background-color: #ff9934;
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
  }
  .confirm_btn_box {
    padding: 44px;
  }
  .confirm_btn {
    background-color: #ff8001;
    /* width: 100%; */
    color: #fff;
    display: block;
    font-size: 14px;
    line-height: 34px;
    text-align: center;
    border-radius: 5px;
  }
  .login_proto {
    text-align: center;
  }
</style>


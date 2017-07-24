<template lang="html">
  <div class="loading" id="loading">
    <img class="close" @click="close" src="../assets/close.png" alt="">
    <span class="logo"><img class="bantang_logo" src="../assets/bantang_logo.png" alt=""></span>
    <form action="">
      <span class="input">
        <input type="text"  v-on:input="user" maxlength="11"  v-model.number="phonenumber" ref="texttype" class="phone" @click="choose1" v-bind:class="active1" name="" value="" placeholder="手机号">
        <button id="getCodeBtn" disabled="true"  @click="send_message" class="check" type="button" ref="login"  name="button">
         <span v-if="sendMsgDisabled">{{time+'s'}}</span>
         <span v-if="!sendMsgDisabled">验证</span>
         </button>
      </span>
      <span class="input" >
        <input id="telInput"  class="shield" @input="check_message" @click="choose2" v-bind:class="active2" type="text" v-model="writeinfo" placeholder="验证码">
      </span>
        <button class="login" @click="login" disabled="true" ref="checklogin"  type="button" name="button">
          快速登录
        </button>
    </form>
    <p class="use">使用手机号和密码登录</p>
    <span class="message" display="none" v-if="info" v-model="message">{{'【半塘】短信校验码为: '+message}}</span>
    <span class="others">其他登录方式</span>
    <ul class="methods">
      <li>
        <img src="../assets/weixin.png" alt="">
      </li>
      <li>
        <img src="../assets/weibo.png" alt="">
      </li>
      <li>
        <img src="../assets/qq.png" alt="">
      </li>
    </ul>
  </div>
</template>
<script type="text/javascript">
import loading from '../static/loading.css'
export default {
  data () {
    return {
      time: '20',
      sendMsgDisabled: false,
      phonenumber:'',
      message:'',
      writeinfo:'',
      info:false,
      active1:{
        select: false
      },
      active2: {
        select: false
      }
    }
  },

  methods: {
    user () {
      var myreg =/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
      if(myreg.test(this.phonenumber)){
        console.log(this.phonenumber);
        this.$refs.login.disabled=false
        this.$refs.login.className= 'red'
      }else{
        this.$refs.login.className= 'check'
        this.$refs.login.disabled=true
      }
    },
    check_message(){
      if(this.writeinfo === this.message){
        this.info=false
        this.$refs.checklogin.disabled=false
      }
      else {
        this.info=true
      }
    },
    send_message(){
      this.$refs.login.disabled=true;
      this.$refs.login.className= 'check'
      let me = this;
      me.sendMsgDisabled = true;
      let interval = window.setInterval(function() {
        if ((me.time--) <= 0) {
          me.time = 20;
          me.sendMsgDisabled = false;
          me.$refs.login.className = 'red';
          me.$refs.login.disabled=false;
          me.info=false
          window.clearInterval(interval);
        }
      }, 1000);
      var codes=[];
      for(var i=48;i<57;codes.push(i),i++);
      for(var i=60;i<90;codes.push(i),i++);
      for(var i=97;i<122;codes.push(i),i++);
      var arr=[];
      for(var i=0;i<4;i++) {   //从0-61之间取随机数
       var index = Math.floor(Math.random() * (61 - 0 + 1) + 0);
       var char = String.fromCharCode(codes[index]);
       arr.push(char);
      }
      this.message=arr.join('');
      console.log(this.message);
      this.info=true
    },
    choose1 () {
      this.active1.select= !this.active1.select
      this.active2.select= false
    },
    choose2 () {
      this.active2.select= !this.active2.select
      this.active1.select= false
      console.log(this.phonenumber);
    },
    close() {
      this.$router.push({path:'/'})
    },
    login() {
      var myreg =/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
     if(this.phonenumber.length == 0 ){
       alert('请输入手机号码！');
     }
     else if(!myreg.test(this.phonenumber)){
       alert('请输入有效的手机号！')
     }
     else{
       this.$store.commit('checking')
       this.$router.push({path:'/'})
     }

    }

  }
}
</script>
<style scoped>
</style>

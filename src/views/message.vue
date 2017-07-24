<template>
  <div class="messagewrap">
    <messagescroll></messagescroll>
    <div class="message_content">
      <div class="welcome">
        <div class="welcome_avatar">
          <img class="welcome_img" src="../assets/haha.jpg" alt="">
        </div>
        <div class="welcome_text">
          <p class="welcome_name">
            小唐君
          </p>
          <p class="welcome_content">Hello!我是小唐君，欢迎你的到来。如果遇到任何问题你可以在这里给我留言，不一定及时，但每条必回(*￣︶￣)</p>
          <router-link class="click_message" to="/">点击留言&gt;</router-link>
        </div>
      </div>
      <div class="sendform_message">
        <ul>
          <li>
            <div class="message_left">
                <img class="welcome_avatar" src="../assets/haha.jpg" alt="">
            </div>
            <div class="sendform_text">
              <p class="sendform_name">小唐君</p>
              <p class="sendform_content">您的文章<span class="sendform_headline">&lt;&lt;{{headline}}&gt;&gt;</span>发布成功</p>
            </div>
            <img class="sendform_avatar" :src="this.pic[0]" alt="">
          </li>
        </ul>
      </div>
    </div>
      <barBottom></barBottom>
  </div>
</template>
<script>
import messagescroll from '../components/messagescroll'
import barBottom from '../components/barBottom'
export default {
  data(){
    return{
      pic:[],
      content:'',
      headline:''
    }
  },
  components: {
    messagescroll,
    barBottom
  },
  created(){
    this.headline=localStorage.getItem("title");
    this.content=localStorage.getItem("content");
    this.pic=JSON.parse(localStorage.getItem("pics"));
  },
  methods:{

  }
}
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;
}
body{
  background-color: #fff;
}
.message_content .welcome{
  display: flex;
  width: 100%;
  height: 150px;
  background-color: #f9f9f9;
  margin-bottom: 10px;
}
.welcome .welcome_avatar{
  width: 80px;
  height: 150px;
}
.welcome .welcome_avatar .welcome_img{
  margin-top: 10px;
  margin-left: 10px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.welcome .welcome_text{
  flex: 1;
  margin-right: 10px;
}
.welcome .welcome_text .welcome_name{
  margin-top: 10px;
  text-align: left;
}
.welcome .welcome_text .welcome_content{
  margin-top: 10px;
  text-align: left;
}
.welcome .welcome_text .click_message{
  margin-top: 5px;
  color: lightblue;
  float: right;

}
.sendform_message{
  width: 100%;
  height: auto !important;
}
.sendform_message li{
  float: left;
  width: 100%;
  height: 150px;
  display: flex;
  position: relative;
}
.sendform_message li::after{
  content: '';
  position: absolute;
  bottom: 0;
  left: 10px;
  right: 10px;
  height: 1px;
  background-color: #9d9d9d;
}
.sendform_message .message_left{
  width: 80px;
  height: 150px;
}
.sendform_message .message_left .welcome_avatar{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 10px;
  margin-top: 10px;
}
.sendform_message .sendform_text{
  flex: 1;
}
.sendform_message .sendform_avatar{
  display: block;
  width: 150px;
  height: 150px;
  margin-right: 10px;
}
.sendform_message .sendform_name{
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: left;
}
.sendform_message .sendform_content{
  text-align: left;
}
.sendform_message .sendform_content .sendform_headline{
  font-weight: bold;
}

</style>

<template>
  <div class="pre_see">
    <div class="pre_see_head">
      <div class="head_left" @click="back">
        <img src="../assets/pre.png" alt="">
      </div>
      <div class="title">
        我的原创
      </div>
    </div>
    <div class="pre_see_content">
      <p><span class="write_type">原创</span><span class="title">{{headline}}</span></p>
      <div class="pre_author">
        <span class="author_avatar"><img :src="avatar" alt=""></span>
      </div>
      <div class="pre_content">{{content}}</div>
      <ul>
        <li v-for="item in url">
          <img :src="item" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
  export default{
    data(){
      return{
        avatar:'',
        headline:'',
        content:'',
        url:[]
      }
    },
    created(){
      if(this.$store.state.avatar==''){
        this.avatar=require('../assets/my.jpg');
      }else{
        this.avatar=this.$store.state.avatar;
      }
      console.log('');
      this.url=JSON.parse(localStorage.getItem("pics"));
      this.headline=localStorage.getItem("title");
        this.content=localStorage.getItem("content");
      //   for(let i=0;i<this.$store.state.picurl.length;i++){
      //       this.url.push(this.$store.state.picurl[i]);
      // }
      console.log(this.url);
    },
    methods:{
      back(){
        this.$router.push({path:'/asuccess'})
      }
    }
  }
</script>
<style scoped>
@import '../static/presee.css'
</style>

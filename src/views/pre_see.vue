<template>
  <div class="pre_see">
    <div class="pre_see_head">
      <div class="left" @click="back">
        <img src="../assets/pre.png" alt="">
      </div>
      <div class="title">
        预览
      </div>
      <div class="send" ref="send" disabled="true"  @click="send_out">发布</div>
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
        this.headline=this.$store.state.headline;
        this.content=this.$store.state.content;
        this.url=this.$store.state.picurl;
      console.log(this.$store.state.picurl);
    },
    methods:{
      back(){
        this.$router.push({path:'/article'})
      },
      send_out(){
        this.fileListurl=this.$store.state.picurl;
        var str = JSON.stringify(this.fileListurl);
        localStorage.setItem("pics",str);
        localStorage.setItem('title',this.$store.state.headline);
        localStorage.setItem('content',this.$store.state.content);
        console.log(this.headline);
        console.log(this.content);
        let instance = Toast('发布成功');
        setTimeout(() => {
        instance.close();
        this.$router.push({path:'/asuccess'})
        }, 2000);
      }

    }
  }
</script>
<style scoped>
@import '../static/presee.css'
</style>

<template>
  <div class="asuccess">
    <div class="success_head">
      <div class="go_myoriginal" @click="go_myoriginal">
        <img class="pre_myoriginal" src="../assets/pre.png" alt="">
      </div>
      <div class="asuccess_title">我的原创</div>
    </div>
    <div class="menu_select">
      <router-link  to="/asuccess" exact tag="li">文章</router-link>
      <router-link to="/formsuccess" tag="li">晒单</router-link>
    </div>
    <div class="article_content">
    <ul>
      <li class="see_myoriginal" @click="see_more">
        <div class="asuccess_pic" v-if="this.pic.length>0">
          <img ref="show_pic" :src="this.pic[0]" alt="">
        </div>
        <div class="asuccess_right">
          {{this.title}}
        </div>
      </li>
    </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default{
    data(){
      return{
        title:'',
        pic:[]
      }
    },
    created(){
      this.$store.dispatch('clean');
      // this.$store.state.picurl=[];
      // this.$store.state.headline='';
      // this.$store.state.content='';
      this.pic=JSON.parse(localStorage.getItem("pics"));
      // if(this.pic.length=0){
      //   this.$refs.show_pic.display='none';
      // }
      this.title=localStorage.getItem("title");
    },
    methods:{
      go_myoriginal(){
        this.$router.push('/my')
      },
      see_more(){
        this.$router.push('/seesuccess')
      }
    }
  }
</script>
<style scoped>
*{
  margin: 0;
  padding: 0;

}
li{
  list-style: none;
}
body{
  background: #f6f6f6;
}
  .asuccess{
    width: 100%;
    height: 90px;
    position: relative;
  }
  .asuccess::after{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background-color: #d9d9d9;
    transform: scaleY(.5);
  }
  .asuccess .success_head{
    display: flex;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #fff;

  }
  .asuccess .go_myoriginal{
    width: 50px;
    height: 50px;
  }
  .asuccess .go_myoriginal .pre_myoriginal{
    display: block;
    width: 25px;
    height: 25px;
    margin-top: 12px;
    margin-left: 12px;
  }
  .asuccess .asuccess_title{
        flex: 1;
        text-align: center;
        margin-left: -50px;
  }
  .asuccess .menu_select{
      width: 100%;
      height: 40px;
      line-height: 40px;
      position: relative;
      display: flex;
      background-color: #fff;
  }
  .asuccess .menu_select li{
      flex: 1;
      text-align: center;
  }
  .asuccess .menu_select::before{
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 1px;
    background-color: #d9d9d9;
    transform: scaleY(.5);
  }
  .asuccess .menu_select li:nth-child(1){
    color: red;
    position: relative;
  }
  .asuccess .menu_select li:nth-child(1)::after{
    content: '';
    position: absolute;
    bottom: 1px;
    right: 35%;
    left: 35%;
    height: 2px;
    background-color: red;
  }
  .asuccess .article_content ul{
    width: 100%;
  }
.asuccess .article_content ul .see_myoriginal{
  width: 100%;
  height: 200px;
  background-color:#fff;
  margin-bottom: 10px;
}
.asuccess .article_content ul li .asuccess_pic{
  width: 50%;
  height: 200px;
  float: left;
}
.asuccess .article_content ul li .asuccess_pic img{
  display: block;
  width: 180px;
  height: 180px;
  margin-top: 10px;
  margin-left: 10px;
}
.asuccess .article_content ul li .asuccess_right{
  width: 50%;
  height: 200px;
  padding-bottom: 10px;
  float: left;
  line-height: 200px;
  text-align: center;
}
</style>

<template>
  <div class="see">
    <div id="box">
      <div class="color"></div>
      <input  type="input"  @keyup.enter="search" v-model="message" placeholder="请输入搜索内容" >
      <button @click="goback">取消</button>
      <span class="tiphide" ref="tip">啊哦，海燕大人是懒猪<img src="../assets/pig.png" alt="">这个数据还没mock进去哦,想看效果可以搜索口红，化妆品等关键字哦（￣︶￣）↗</span>
    </div>
    <div class="see_content">
      <ul class="see_content_ul">
       <li v-for="content in contents">
          <span><img class="see_picture" :src="content.pic" alt=""></span>
          <span class="see_name">{{content.name}}</span>
          <span class="see_xinxi">
            <span class="see_price">{{content.price}}</span>
            <span><img class="love" src="../assets/like.png" alt=""></span>
            <span class="see_number">{{content.number}}</span>
          </span>
       </li>
     </ul>
    </div>
  </div>
</template>
<script>

  export default {
    data(){
      return {
        inputText: '',
        contents:[]
      }
    },
    created () {
      this.inputText = this.$store.state.inputText
      console.log('hghhhh');
      this.axios.get('http://easy-mock.com/mock/5940ff968ac26d795f00bd9e/care/list/care/list')
        .then((res)=>{
           console.log(res.data)
           let message = res.data
           for(let i in message){
             let item = i;
             console.log('ttt');
             console.log(item);
             console.log(this.inputText);
             console.log(item.indexOf(this.inputText));
             if(item.indexOf(this.inputText)!== -1){
               this.contents = message[item]
               return
             }
           }
           if(this.contents.length){
             this.message = true
           }else{
             this.message = false
             this.$refs.tip.className='tipshow'
             console.log('没有找到哦');
           }
           })
       .catch((error) => {console.log(error)})
    },
    computed: {
      message(){
        return this.$store.state.inputText

      }
    },
    methods: {
      goback() {
          this.$router.push({path:'/realsearch'})
      }
    }
  }
</script>
<style scoped>
@import '../static/see.css'
</style>

<template >
  <div class="realsearch">
  <div id="box">
    <div class="color"></div>
    <input  type="input"  @keyup.enter="search" placeholder="请输入搜索内容" v-model='inputText'>
    <button @click="history">取消</button>
  </div>
  <div class="history_box" ref="hb" style="display:none">
    <p>搜索历史</p>
    <div class="content" >
      <ul>
       <li v-for="inputText in inputTexts">
          <span class="content_list_history">{{inputText}}</span>
       </li>
     </ul>
    </div>
    <div class="clear" @click="clearall">清除历史记录</div>
<span class="background"></span>
  </div>

    <div class="realsearch_content">
      <p>热门搜索</p>
      <li  v-for="(content, index) in contents" @click="go(index)">
        <router-link :to="content.url">
           {{content.text}}
        </router-link>
      </li>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
  export default{
    data () {
      return {
        inputText:'',
        inputTexts: [],
        mess:'',
        history_content:'',
        contents: [
          {
            url: '',
            text: '父亲节'
          },
          {
            url: '',
            text: '手机壳'
          },
          {
            url: '',
            text: '父亲'
          },
          {
            url: '',
            text: '伞'
          },
          {
            url: '',
            text: '情侣'
          },
          {
            url: '',
            text: '水杯'
          },
          {
              url: '',
              text: '面膜'
          },
          {
            url: '',
            text: '钢笔'
          },
          {
            url: '',
            text: '礼物'
          },
          {
            url: '',
            text: '手表'
          },
          {
            url: '',
            text: '礼物'
          },
          {
            url: '',
            text: '口红'
          },
          {
            url: '',
            text: '香水'
          },
          {
            url: '',
            text: '生日礼物'
          },
          {
            url: '',
            text: '帽子'
          },
          {
            url: '',
            text: '杯子'
          },
        ]
      }
    },
    mounted () {
      this.inputTexts = this.$store.state.inputTexts
      if(this.inputTexts.length > 0){
         this.$refs.hb.style.display = 'block'
      }
      if(this.inputTexts.length >6){
            this.inputTexts.length = 6;
        }
    },
    methods: {
      history: function () {
        this.$router.push({path:'/watching'})
      },
      search: function () {
        if(this.inputText === ''){
          alert('别调皮哦，输入不可以为空哦')
        }else{
          this.inputText = this.inputText.trim();
          this.$store.dispatch('setInput', this.inputText)
          console.log(this.$store.state.inputText)
          this.$store.dispatch('collection', this.inputText);
          this.inputTexts = this.$store.state.inputTexts
          console.log(this.inputTexts);
          var a = document.querySelector('.history_box');
          if(this.inputTexts.length != 0){
            a.style.display = 'block';
            this.inputTexts = this.$store.state.inputTexts
          }
           this.$router.push({path:'/watching/see'})

        }

      },
      clearall: function() {
        this.$store.dispatch('clear', this.inputTexts);
        this.inputTexts = this.$store.inputTexts
        var a = document.querySelector('.history_box');
        a.style.display = 'none';
      },
      go: function(index){
        this.$router.push({path:'/watching/see'})
        this.$store.dispatch('setInput', this.contents[index].text )
        this.inputText = this.$store.state.inputText
        this.$store.dispatch('collection',this.inputText );
        this.inputTexts = this.$store.state.inputTexts
      }
    }
  }
</script>
<style scoped>
@import '../static/realsearch.css'
</style>

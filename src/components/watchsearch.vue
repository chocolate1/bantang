<template>
  <div class="recommend">
   <div class="searchT">
     <span class="pre" @click="pre"></span>
     <span class="grey"></span>
     <input @click="realsearch" class="watchfind" type="text" name="" placeholder="搜索好物,文章,晒单,用户"value="">
   </div>
  </div>
</template>
<script>
export default{
  methods: {
    pre: function(){
      this.$router.push({path:'/find'})
    },
    realsearch: function(){
      this.$router.push({path:'/realsearch'})
    }

  }
}
</script>
<style scoped>
.searchT{
  width: 100%;
  height: 50px;
  position: relative;
}
.searchT::after{
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color:#8a8a8a;
  transform: scaleY(.5);
}
.pre{
  width: 40px;
  height: 30px;
  margin-top: 10px;
  float: left;
  background:url('../assets/pre.png')no-repeat center;
}
.grey{
  position: absolute;
  left: 40px;
  top: 10px;
  right: 40px;
  height: 30px;
  background-color: #f0f0f0;
}
.watchfind{
  position: absolute;
  z-index:100;
  left: 10px;
  top: 10px;
  right: 10px;
  height: 30px;
  background:url('../assets/search.png')no-repeat 10px center;
}
</style>

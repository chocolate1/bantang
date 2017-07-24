<template>
  <div class="topsearch">
    <router-link to="/watching">
    <div class="search">
      <div class="fade"></div>
        <div class="is">
          <input type="text" placeholder="搜索值得买的好物">
        </div>
    </div>
    </router-link>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    }
  }
</script>
<style scoped>
.topsearch{
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  line-height: 40px;
}
.search {
  width: 100%;
  margin: 0 auto;
  height: 40px;
  line-height: 40px;
}
.fade{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index:10px;
  width: 100%;
  height: 40px;
  background-color:white;
  opacity: .5;
}
.is{
  width: 100%;
  height: 40px;
}
.is input{
  background: url('../assets/smallsearch.png')no-repeat 2px 1px;
  background-color:white;
  width: 80%;
  margin-left: 40px;
    /*background:url('../assets/search.png') no-repeat ;*/
  height: 20px;
  line-height: 20px;
  text-indent: 30px;
  color: #8A8A8A;
  border:none;
}
</style>

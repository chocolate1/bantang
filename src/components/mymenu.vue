<template>
  <div id="mymenu">
    <ul>
    <router-link to="/" tag="li">
      <i class="right"><img src="../assets/start.png" alt=""></i>
      <span class="text">我的收藏</span>
      <i class="left"><img src="../assets/go.png" alt=""></i>
    </router-link>
    <router-link to="/asuccess" tag="li">
      <i class="right"><img src="../assets/myartitle.png" alt=""></i>
      <span class="text">我的原创</span>
      <i class="left"><img src="../assets/go.png" alt=""></i>
    </router-link>
    <router-link to="/" tag="li">
      <i class="right"><img src="../assets/mybill.png" alt=""></i>
      <span class="text">我的订单</span>
      <i class="left"><img src="../assets/go.png" alt=""></i>
    </router-link>
    </ul>
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
@import '../static/mymenu.css'
</style>

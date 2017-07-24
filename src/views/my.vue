<template>
  <div class="my">
    <myhead></myhead>
    <mymenu></mymenu>
    <ul class="submenu">
      <li>
        <i class="right"><img src="../assets/mygift.png" alt=""></i>
        <span class="text">礼品兑换</span>
        <i class="left"><img src="../assets/go.png" alt=""></i>
      </li>
      <li>
        <i class="right"><img src="../assets/reset.png" alt=""></i>
        <span class="text">设置</span>
        <i class="left"><img src="../assets/go.png" alt=""></i>
      </li>
    </ul>
      <barBottom></barBottom>
  </div>

</template>
<script>
import barBottom from '../components/barBottom'
import myhead from '../components/myhead'
import mymenu from '../components/mymenu'
export default {
  components: {
    myhead,
    mymenu,
    barBottom
  }
}
</script>

<style scoped>
@import '../static/mytop.css'
</style>

<template>
<div id="index">
  <search></search>
  <div class="top">
    <lunbo></lunbo>
    <div class="sign-in"></div>
  </div>
  <headnav></headnav>
  <homecontent></homecontent>
  <barBottom></barBottom>
</div>
</template>
<script>
import barBottom from '../components/barBottom'
import lunbo from '../components/lunbo'
import headnav from '../components/headnav'
import search from '../components/search'
import homecontent from '../components/homecontent'
export default {
  components: {
    lunbo,
    headnav,
    search,
    homecontent,
    barBottom


  }
}
</script>
<style scoped>

</style>

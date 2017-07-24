<template>
 <div id="index">
   <search></search>
   <div class="top">
     <findlunbo></findlunbo>
   </div>
   <findscroll></findscroll>
   <findhot></findhot>
   <findmenu></findmenu>
   <homecontent></homecontent>
   <barBottom></barBottom>
   </div>
</template>
<script>
import barBottom from '../components/barBottom'
import search from '../components/search'
import findlunbo from '../components/findlunbo'
import findscroll from '../components/findscroll'
import findhot from '../components/findhot'
import findmenu from '../components/findmenu'
import homecontent from '../components/homecontent'
export default {
  components: {
    search,
    findlunbo,
    findscroll,
    findmenu,
    findhot,
    homecontent,
    barBottom
  }
}
</script>

<style scoped>
#index{
  position: relative;
  overflow-y: scroll;
}

</style>

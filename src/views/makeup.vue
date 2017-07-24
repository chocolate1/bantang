<template>
<div id="index">
  <search></search>
  <div class="top">
    <lunbo></lunbo>
  </div>
  <div class="headnav">
    <headnav></headnav>
  </div>
  <makeupcomment></makeupcomment>
  <barBottom></barBottom>
</div>
</template>

<script>

import lunbo from '../components/lunbo'
import headnav from '../components/headnav'
import search from '../components/search'
import makeupcomment from '../components/makeupcomment'
import barBottom from '../components/barBottom'
window.onscroll = function(){
    var t = document.documentElement.scrollTop || document.body.scrollTop;
    var headnav = document.querySelector('.headnav');
    var replace = document.querySelector('.replace');
    if( t >= 200 ) {
        replace.style.display = 'none'
        headnav.style.position ='fixed'
        headnav.style.top = '40px'
        headnav.style.left = 0


    } else {
        replace.style.display = 'none'
        headnav.style.position = 'static';

    }
}
export default {
  data () {
    return {
          swiperOption: {
          // 所有配置均为可选（同Swiper配置）
          notNextTick: false,
          grabCursor: true,
          slidesPerView: 6,
          paginationClickable: true,
          spaceBetween: 10,
          mousewheelControl: true,
          observeParents: true,
          autoplayDisableOnInteraction : false,
          freeMode:true
        }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiperA.swiper
    }
  },
  mounted () {
    this.swiper.slideTo(3, 1000, false)
  },
  components: {
    lunbo,
    headnav,
    search,
    makeupcomment,
    barBottom
  }
}
</script>

<style scoped>
@import '../static/headnav.css'
</style>

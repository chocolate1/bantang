<template>
    <div class="container">
    <div class="headnav">
     <swiper :options="swiperOption" >
      <swiper-slide class="s" ><router-link to="/" tag="li" class="first" >最新</router-link></swiper-slide>
      <swiper-slide class="s" ><router-link to="/find" tag="li">美妆</router-link></swiper-slide>
      <swiper-slide class="s" ><router-link to="/find" tag="li">家居</router-link></swiper-slide>
      <swiper-slide class="s" ><router-link to="/find" tag="li">礼物</router-link></swiper-slide>
      <swiper-slide class="s" ><router-link to="/find" tag="li">美食</router-link></swiper-slide>
      <swiper-slide class="s" ><router-link to="/find" tag="li">学生党</router-link></swiper-slide>
      <swiper-slide class="s" ><router-link to="/find" tag="li">上班族</router-link></swiper-slide>
      <swiper-slide class="s" ><router-link to="/find" tag="li">生活</router-link></swiper-slide>
      <swiper-slide class="s" ><router-link to="/find" tag="li">设计感</router-link></swiper-slide>
      <swiper-slide class="s" ><router-link to="/find" tag="li">阅读</router-link></swiper-slide>
      <swiper-slide class="s" ><router-link to="/find" tag="li">运动</router-link></swiper-slide>
      <swiper-slide class="s" ><router-link to="/find" tag="li">数码</router-link></swiper-slide>
     </swiper>
    </div>
    <div class="replace" style="display:none;">
    </div>
    </div>
</template>
<script>
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
  }
}
</script>
<style scoped>
@import '../static/headnav.css'

</style>

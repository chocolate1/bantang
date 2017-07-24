<template>
  <div class="headnav">
    <swiper :options="swiperOption" >
      <swiper-slide class="s" ><router-link to="/find/new" exact tag="li" >最新</router-link></swiper-slide>
      <swiper-slide class="s" ><router-link to="/find/hot" tag="li">热门</router-link></swiper-slide>
      <swiper-slide class="s" ><router-link to="/find/care" tag="li">关注</router-link></swiper-slide>
    </swiper>
    </div>
</template>
<script>
export default {
  data () {
    return {
          swiperOption: {
          // 所有配置均为可选（同Swiper配置）
          notNextTick: false,
          grabCursor: true,
          slidesPerView: 3,
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

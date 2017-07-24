<template>
  <div class="lunbo">
    <swiper :options="swiperOption" ref="mySwiperA">
      <swiper-slide class="sw"><img src="../assets/timg.jpg" alt=""></swiper-slide>
      <swiper-slide class="sw"><img src="../assets/skin.jpg" alt=""></swiper-slide>
      <swiper-slide class="sw"><img src="../assets/skin.jpg" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <!-- <div class="swiper-scrollbar"  slot="scrollbar"></div> -->
    </swiper>
    </div>
</template>
<script>
export default {
  data () {
    return {
          swiperOption: {
          // 所有配置均为可选（同Swiper配置）
          autoplay: 3000,
          notNextTick: false,
          grabCursor: true,
          slidesPerView: 1,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          // scrollbar: '.swiper-scrollbar',
          mousewheelControl: true,
          observeParents: true,
          autoplayDisableOnInteraction : false,
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
@import '../static/lunbo.css'
</style>

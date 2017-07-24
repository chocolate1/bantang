<template>
  <div class="findscroll">
    <span class="title">推荐小组<router-link to="/" tag="span">
      <span class="see">查看全部</span></router-link></span>
    <swiper :options="swiperOption" >
      <swiper-slide class="f" >
        <router-link to="/" tag="span" >
          <div class="tuijian">
            <img src="../assets/fs1.jpg" alt="">
            <p>一起来剁手</p>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide class="f" >
        <router-link to="/home/makeup" tag="span">
          <div class="tuijian">
            <img src="https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/336857643/TB2RrpLpXXXXXbZXXXXXXXXXXXX_!!336857643.jpg_230x230.jpg_.webp" alt="">
            <p>书.文具.手账</p>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide class="f" >
        <router-link to="/furniture" tag="span">
          <div class="tuijian">
            <img src="https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/TB1w85LQpXXXXXZXVXXXXXXXXXX_!!0-item_pic.jpg_230x230.jpg_.webp" alt="">
            <p>二次元日记</p>
          </div>
        </router-link></swiper-slide>
      <swiper-slide class="f" >
        <router-link to="/gift" tag="span">
          <div class="tuijian">
            <img src="https://g-search1.alicdn.com/img/bao/uploaded/i4/i3/2541730196/TB2XTfAXnoX61Bjy1zkXXc75pXa_!!2541730196.jpg_230x230.jpg_.webp" alt="">
            <p>把日子过成诗</p>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide class="f" >
        <router-link to="/food" tag="span">
          <div class="tuijian">
            <img src="https://img.alicdn.com/imgextra/i4/1281806035601894566/TB2YEA2rCFmpuFjSZFrXXayOXXa_!!0-saturn_solar.jpg_240x240.jpg" alt="">
            <p>爱旅行 爱运动</p>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide class="f" >
        <router-link to="/student" tag="span">
          <div class="tuijian">
            <img src="https://img.alicdn.com/imgextra/i1/130310103269772061/TB2U8FLdXXXXXafXpXXXXXXXXXX_!!11883031-0-saturn_solar.jpg_240x240.jpg" alt="">
            <p>吃货的世界</p>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide class="f" >
        <router-link to="/worker" tag="span">
          <div class="tuijian">
            <img src="https://img.alicdn.com/imgextra/i3/194750215088014374/TB2Ta8woFXXXXXlXFXXXXXXXXXX_!!0-saturn_solar.jpg_240x240.jpg"alt="">
            <p>女神进化论</p>
          </div>
        </router-link>
      </swiper-slide>
      <swiper-slide class="f" >
        <router-link to="/life" tag="span">
          <div class="tuijian">
            <img src="https://img.alicdn.com/imgextra/i2/1378705023432924944/TB2YqbQgMNlpuFjy0FfXXX3CpXa_!!0-saturn_solar.jpg_240x240.jpg" alt="">
            <p>数码科技党</p>
          </div>
        </router-link>
      </swiper-slide>
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
          slidesPerView: 4,
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
  },
  mounted () {
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
<style scoped>
.findscroll .title{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
}
.findscroll .see{
  float: right;
  font-weight: lighter;

}
.findscroll .f{
  width: 100px;
  height: 120px;
}
.findscroll .tuijian{
  width: 100px;
  height: 120px;
}
.findscroll .tuijian img{
  width: 80px;
  height: 80px;
}
.findscroll .tuijian p{
  font-size: 10px;
}
</style>

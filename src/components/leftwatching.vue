<template>
  <div class="leftwatching">
    <div class="lists">
      <router-link  to="/watching" tag="li">
        <div class="list choose" @click="choose" >
          推荐
        </div>
      </router-link>
      <router-link  to="/watching/watchmakeup" tag="li">
        <div class="list" @click="choose" >

          美妆
        </div>
      </router-link>
      <router-link  to="/watching/guard" tag="li">
        <div class="list" @click="choose" >

          个护
        </div>
      </router-link>
      <router-link to="/watching/food" tag="li">
        <div class="list" @click="choose" >

          食品
        </div>
      </router-link>
      <router-link  to="/watching/life" tag="li">
        <div class="list" @click="choose" >

          生活
        </div>
      </router-link>
      <router-link  to="/watching/digital" tag="li">
        <div class="list" @click="choose" >

          数码
        </div>
      </router-link>
      <router-link to="/watching/office" tag="li">
        <div class="list" @click="choose" >

          办公
        </div>
      </router-link>
      <router-link  to="/watching/shore" tag="li">
        <div class="list" @click="choose" >

          鞋包
        </div>
      </router-link>
      <router-link  to="/watching/appliance" tag="li">
        <div class="list" @click="choose" >

          家电
        </div>
      </router-link>
      <router-link  to="/watching/sport" tag="li">
        <div class="list" @click="choose" >

          运动
        </div>
      </router-link>
      <router-link to="/watching/book" tag="li">
        <div class="list" @click="choose" >
          图书
        </div>
      </router-link>
      <router-link  to="/watching/collocation" tag="li">
        <div class="list" @click="choose" >

          搭配
        </div>
      </router-link>
     </div>
  </div>
</template>
 <script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped>
@import '../static/leftw.css'
</style>

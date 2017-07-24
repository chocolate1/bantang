<template>
  <div class="watchmakeup">
    <watchsearch></watchsearch>
    <div class="leftwatching">
      <div class="lists">
        <router-link  to="/watching" tag="li">
          <div class="list" @click="choose" >
            推荐
          </div>
        </router-link>
        <router-link  to="/watching/watchmakeup" tag="li">
          <div class="list choose" @click="choose" >

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
        <router-link  to="/watching/book" tag="li">
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
    <div class="tu">
    <li class="picture"v-for="(item,index) in items">
      <router-link :to="item.url">
        <img v-bind:src="item.pic" alt="">
        <p class="text">{{item.text}}</p>
      </router-link>
    </li>
    </div>
  </div>
</template>
<script>
import watchsearch from '../components/watchsearch'
import leftwatching from '../components/leftwatching'
export default {
  data (){
    return {
      items:[
        {
          pic: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i2/TB1J3VURpXXXXX6XXXXXXXXXXXX_!!0-item_pic.jpg_270x270.jpg_.webp',
          text: '面部彩妆',
          url: '/'
        },
        {
          pic: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/14784168/TB2Gb6hkVXXXXaVXpXXXXXXXXXX_!!14784168.jpg_230x230.jpg_.webp',
          text: '眼部彩妆',
          url: '/find'

        },
        {
          pic: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/TB1g6RxOVXXXXaVXpXXXXXXXXXX_!!0-item_pic.jpg_230x230.jpg_.webp',
          text: '眉部彩妆',
          url: '/find'
        },
        {
          pic: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/TB1.Kp4OVXXXXbuapXXXXXXXXXX_!!0-item_pic.jpg_270x270.jpg_.webp',
          text: '唇部彩妆',
          url: '/find'
        },
        {
          pic: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i3/1993668032/TB2zWbdlpXXXXcfXpXXXXXXXXXX_!!1993668032.jpg_230x230xz.jpg_.webp',
          text: '美甲护甲',
          url: '/find'
        }
      ]
    }
  },
  components:{
    watchsearch,
    leftwatching,

  }
}
</script>
<style scoped>
.watchmakeup{
  width: 100%;
  height: 100%;
  position: relative;
}
.tu{
  position: absolute;
  top: 51px;
  left: 80px;
  right: 0;
  height: 500px;
}
.picture{
  margin-top: 20px;
  float: left;
  width: 33.33333333%;
  height: 80px;
}
a{
  text-decoration: none;
  color: #8A8A8A;
}
.picture img{
  width: 50px;
  height: 50px;
  margin: 0 auto
}
.picture .text{
  display: block;
  width: 100%;
  text-align: center;
  height: 30px;
  line-height: 30px;
}

</style>

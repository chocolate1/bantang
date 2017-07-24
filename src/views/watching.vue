<template>
  <div class="watching">
    <watchsearch></watchsearch>
    <leftwatching v-on:leftwatch="leftwatch"></leftwatching>
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
          pic: 'https://gd1.alicdn.com/imgextra/i3/464241778/TB2Yf.6fkqvpuFjSZFhXXaOgXXa_!!464241778.jpg_400x400.jpg',
          text: '手机周边',
          url: '/watching/phone'
        },
        {
          pic: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/TB1bxOpKVXXXXX3XFXXXXXXXXXX_!!0-item_pic.jpg_270x270.jpg_.webp',
          text: '节庆礼品',
          url: '/find'

        },
        {
          pic: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/TB1..vBLVXXXXb9XVXXXXXXXXXX_!!0-item_pic.jpg_230x230.jpg_.webp',
          text: '图书杂志',
          url: '/find'
        },
        {
          pic: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i1/TB1wJyjRXXXXXaNXFXXXXXXXXXX_!!0-item_pic.jpg_230x230.jpg_.webp',
          text: '配饰',
          url: '/find'
        },
        {
          pic: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i4/TB1NiWbPFXXXXbtaXXXXXXXXXXX_!!0-item_pic.jpg_230x230.jpg_.webp',
          text: '面部护理',
          url: '/find'
        },
        {
          pic: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i4/TB1JT5iLXXXXXX9XXXXXXXXXXXX_!!0-item_pic.jpg_230x230.jpg_.webp',
          text: '文具',
          url: '/find'
        },
        {
          pic: 'https://img.alicdn.com/imgextra/i1/1289806009749202433/TB2m42kmCVmpuFjSZFFXXcZApXa_!!0-saturn_solar.jpg_220x220.jpg_.webp',
          text: '家纺布艺',
          url: '/find'
        },
        {
          pic: 'https://g-search3.alicdn.com/img/bao/uploaded/i4/i4/TB1kC4yRXXXXXcMXFXXXXXXXXXX_!!0-item_pic.jpg_230x230xz.jpg_.webp',
          text: '香水香氛',
          url: '/find'
        },
        {
          pic: 'https://g-search2.alicdn.com/img/bao/uploaded/i4/i2/1873225172/TB2IhltgR8lpuFjy0FnXXcZyXXa_!!1873225172.jpg_230x230.jpg_.webp',
          text: '吃货',
          url: '/find'
        },
        {
          pic: 'https://g-search1.alicdn.com/img/bao/uploaded/i4/i1/323173118/TB2ebMplFXXXXXHXpXXXXXXXXXX_!!323173118.jpg_230x230.jpg_.webp',
          text: '学生党',
          url: '/find'
        }
      ]
    }

  },
  components: {
    watchsearch,
    leftwatching
  },
  methods:{
  }
}
</script>
<style scoped>
@import '../static/watching.css'
</style>

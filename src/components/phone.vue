<template>
  <div class="watchphone">
    <div class="phone_head">
      <img @click="pre" src="../assets/pre.png" alt="">
      <p>手机周边</p>
    </div>
    <div class="three_choose">
      <router-link class="kind kind_red" tag="li" to="/watching/phone">
        好物
      </router-link>
      <router-link class="kind" tag="li" to="/watching/phone">
        晒单
      </router-link>
      <router-link class="kind" tag="li" to="/watching/phone">
        文章
      </router-link>
    </div>

    <div class="phone_scroll">
      <swiper :options="swiperOption" >
        <swiper-slide class="p yes" >
           全部
        </swiper-slide>
        <swiper-slide class="p" >
           电池移动电源
        </swiper-slide>
        <swiper-slide class="p" >
           手机饰品
        </swiper-slide>
        <swiper-slide class="p" >
          充电设备
        </swiper-slide>
        <swiper-slide class="p" >
           手机壳
        </swiper-slide>
      </swiper>
    </div>
<div class="phone_content">
  <ul class="left">
    <li class="phone_picture" v-for="(item,index) in items">
      <router-link :to="item.url">
        <div class="left_phone_picture">
          <img class="leftpic" v-bind:src="item.pic" alt="">
        </div>
        <p class="text">{{item.text}}</p>
        <p><span class="price">{{item.price}}</span> <span class="go_right"><img src="../assets/like.png" alt="">{{item.number}}</span></p>
      </router-link>
    </li>
  </ul>
  <ul class="right">
    <li class="phone_picture" v-for="(right,index) in rights">
      <router-link :to="right.url">
        <div class="right_phone_picture">
          <img v-bind:src="right.pic" alt="">
        </div>
        <p class="text">{{right.text}}</p>
        <p><span class="price">{{right.price}}</span> <span  class="go_right"><img src="../assets/like.png" alt="">{{right.number}}</span></p>
      </router-link>
    </li>
  </ul>

 </div>
  </div>
</template>
<script>
export default{
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
    },
      items:[
        {
          pic:'https://img.alicdn.com/imgextra/i1/2204997562/TB2hcyTa8LzQeBjSZFjXXcscpXa_!!2204997562.jpg_60x60q90.jpg',
          text: '索罗卡 苹果迷你充电宝',
          price: '￥128.00',
          number: '2330',
          url: '/watching/phone/battery'

        },
        {
          pic:'https://img.alicdn.com/imgextra/i1/2204997562/TB2hcyTa8LzQeBjSZFjXXcscpXa_!!2204997562.jpg_60x60q90.jpg',
          text: '索罗卡 苹果迷你充电宝',
          price: '￥128.00',
          number: '2330',
          url: '/watching/phone/battery'
        }
      ],
      rights:[
        {
          pic:'https://img.alicdn.com/imgextra/i1/2204997562/TB2hcyTa8LzQeBjSZFjXXcscpXa_!!2204997562.jpg_60x60q90.jpg',
          text: '索罗卡 苹果迷你充电宝',
          price: '￥128.00',
          number: '2330',
          url: '/watching/phone/battery'

        },
        {
          pic:'https://img.alicdn.com/imgextra/i1/2204997562/TB2hcyTa8LzQeBjSZFjXXcscpXa_!!2204997562.jpg_60x60q90.jpg',
          text: '索罗卡 苹果迷你充电宝',
          price: '￥128.00',
          number: '2330',
          url: '/watching/phone/battery'
        }
      ]
    }
  },
  methods: {
    pre: function(){
      this.$router.push({path: '/watching'})
    }
    }

}
</script>
<style scoped>
  .watchphone{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
    .watchphone .phone_head{
    width: 100%;
    height: 40px;
  }
    .watchphone .phone_head img{
    display: block;
    float: left;
    margin-top: 10px;
    margin-left: 20px;
    width: 25px;
    height: 25px;
  }
    .watchphone .phone_head p{
    display: block;
    text-align: center;
    padding-right: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
  }
    .watchphone .phone_scroll{
    width: 100%;

  }
  .three_choose{
    width: 100%;
    height: 50px;
    display: flex;
    position: relative;
  }
    .watchphone .three_choose::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    transform: scaleY(.5);
    background-color: #bfbfbf;
  }
    .watchphone .three_choose li{
    flex:1;
    text-align: center;
    height: 50px;
    line-height: 50px;
  }
   .three_choose .kind.kind_red{
    color: red;
    position: relative;
  }
  .kind.red:after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 30%;
    right: 30%;
    height: 3px;
    background-color:red;
  }
.phone_scroll{
 width: 100%;
 height: 50px;
}
.phone_scroll .p{
  display: block;
  float: left;
  margin-top: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  background-color: #efefef;
}
.p.yes{
  color: #fff;
  background-color: red;
}
.phone_content{
  width: 100%;
  height: 400px;
  position: relative;
}
.phone_content::after{
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 1px;
  background-color: #8a8a8a;
  transform: scaleY(.5);
}
.phone_content .left{
  width: 50%;
  height: 100%;
  float: left;
  position: relative;
}
.phone_content .left::after{
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  width: 1px;
  transform: scaleX(.5);
  background-color: #8a8a8a;
}

.phone_content .right{
  width: 50%;
  height: 100%;
  float: right;
  /*background-color:yellow;*/
}
.phone_content .left li,.phone_content .right li{
  display: block;
  width: 100%;
  height: 200px;
  position: relative;
}
.phone_content .left li::before,.phone_content .right li::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  transform: scaleY(.5);
  background-color: #8a8a8a;
}
.phone_content .left_phone_picture,.phone_content .right_phone_picture{
  width: 100%;
  height: 140px;
}
.phone_content .right_phone_picture img{
  display: block;
  width: 100px;
  height: 120px;
  margin: 0 auto;
}
.phone_content .left_phone_picture .leftpic{
  margin: 0;
  padding: 0;
  width: 100px;
  height: 120px;
  margin-top: 15px;
  margin-right: 30px;
}
.phone_content  p{
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 95%;
  padding-left: 4px;
  height: 30px;
  line-height: 30px;
  /*background-color: red;*/
}
.phone_content  p span{
  display: block;
  float: left;
}
.phone_content  p img{
  display: block;
  float: left;
}
.phone_content p .price{
  color: red;
}
.phone_content  p .go_right{
  float: right;
}
.go_right img{
  display: block;
  width: 10px;
  height: 10px;
  padding-top: 10px;
  padding-right: 3px;
}
</style>

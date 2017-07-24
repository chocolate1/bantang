<template>
  <div class="hot-activity">
    <span class="title">热门活动
      <router-link to="/find/hot" tag="span">
        <span class="see">查看全部</span>
      </router-link>
    </span>
    <ul class="hotfinds">
      <li class="hotfind">
        <img src="../assets/phone.jpg" alt="">
        <div class="text">
          <h5 class="text_h5">你的数码装备</h5>
          <span class="text_span">10人参与</span>
        </div>

      </li>
      <li class="hotfind">
        <img src="../assets/gift.jpg" alt="">
        <div class="text">
          <h5 class="text_h5">你的520礼物</h5>
          <span class="text_span">50人参与</span>
        </div>

      </li>
    </ul>
    <ul class="hotfinds">
      <li class="hotfind">
        <img src="../assets/food.jpg" alt="">
        <div class="text">
          <h5 class="text_h5">旅途中的美味</h5>
          <span class="text_span">104人参与</span>
        </div>

      </li>
      <li class="hotfind">
        <img src="../assets/blue.jpg" alt="">
        <div class="text">
          <h5 class="text_h5">那一抹醉心蓝</h5>
          <span class="text_span">231参与</span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
 export default {}
</script>
<style scoped>
.hot-activity{
  margin-top: 10px;
  position: relative;
}
.hot-activity::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background-color:#E0E0E0;
}
.hot-activity::after{
  content: '';
  position: absolute;
  bottom:0;
  left: 0;
  right: 0;
  height: 4px;
  background-color:#E0E0E0;
}
.hot-activity .title{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-weight: bold;
}
.hot-activity .title .see{
  float: right;
  font-weight: lighter;
}
.hot-activity .hotfinds{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 80px;
  position: relative;
}
.hotfinds::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background-color:#D9D9D9;
  clear: both;
}
.hotfinds .hotfind{
  width: 49%;
  float: left;
  height: 80px;
  list-style: none;
}
 .hotfind img{
  display: block;
  float: left;
  width: 80px;
  height:80px;
}
 .hotfind .text{
  height: 80px;
}
 .hotfind .text .text_h5{
  display: block;
  margin: 0;
  padding: 0;
  height: 45px;
  line-height: 45px;
  font-size: 12px;
}
.text .text_span{
  display: block;
  height: 35px;
  font-size: 10px;
}
.text .hotfinds:first-child{
  border-right: 1px solid #d9d9d9;
}
</style>

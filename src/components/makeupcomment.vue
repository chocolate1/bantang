<template >
  <ul id="content">
  <li>
    <img src="../assets/mk1.jpg" alt="">
    <h5>自拍党最爱的高人气美妆产品</h5>
    <p>
      <span class="author">小糖君</span>
          <img src="../assets/see.png" alt="">
       <span>24937</span>
       <img src="../assets/like.png" alt="">
       <span>5347</span></p>
  </li>
  <li>
    <img src="../assets/mk2.jpg" alt="">
    <h5>最妩媚的猫咪是女性</h5>
    <p>
      <span class="author" >所有悲戚</span>
      <img src="../assets/see.png" alt="">
       <span>18953</span>
       <img src="../assets/like.png" alt="">
       <span>2961</span></p>
  </li>
  <li>
    <img src="../assets/mk3.jpg" alt="">
    <h5>我的化妆包我做主</h5>
    <p>
      <span class="author">莹莹</span>
       <img src="../assets/see.png" alt="">
       <span>18068</span>
       <img src="../assets/like.png" alt="">
       <span>1559</span>
     </p>
  </li>
  </ul>
</template>
<script type="text/javascript">
  export default{
    data(){
      return{

      }
    }
  }
</script>
<style scoped>
ul{
   width: 100%;
   list-style: none;
   margin: 0;
   padding: 0;
   text-align: center;

   /*background-color:red;*/
 }
#content .author{
  display: block;
  color: #515151;
  position: relative;
  padding-right:10px;
}
#content .author:after{
  content: '';
  position: absolute;
  top: 30%;
  right: 0;
  bottom: 30%;
  width: 2px;
  background-color:#bfbfbf;
}
 #content p{
   display: block;
   width: 200px;
   margin: 10px auto;
   height: 30px;
   text-align: center;
   vertical-align: middle;
 }
 #content p span{
   display: block;
   float: left;
   vertical-align: middle;
  color: #bfbfbf;
 }
 #content h5{
   display: block;
   text-align: center;
  width: 100%;
   height: 40px;
   line-height: 40px;
   font-size: 17px;
 }
 #content p img{
   display: block;
   margin-top: 5px;
   margin-left: 6px;
   margin-right: 4px;
   width: 10px;
   height: 10px;
   float: left;
 }
 #content{
   position: relative;
 }
 #content::before{
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   height: 1px;
   background-color: #DCDCDC;
   transform: scaleY(.5);
 }

#content li{
  padding-top: 10px;
  position: relative;
   list-style: none;
   width: 100%;
   height: 300px;
 }
 #content li::before{
   content: '';
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
   height: 1px;
   background-color: #DCDCDC;
   transform: scaleY(.5);
 }
#content  img{
    width: 98%;
    margin: 10px auto;
    height: 200px;
  }
</style>

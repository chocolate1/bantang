<template >
  <ul id="find_content">
  <li>
    <img src="../assets/hc1.jpg" alt="">
    <h5>窗帘篇——你的屋子也要漂亮衣服</h5>
    <p>
      <span class="author">小糖君</span>
       <img src="../assets/see.png" alt="">
       <span>1765</span>
       <img src="../assets/like.png" alt="">
       <span>333</span></p>
  </li>
  <li>
    <img src="../assets/hc2.jpg" alt="">
    <h5>不用空调也可以让你的屋子凉快起来</h5>
    <p>
      <span class="author" >小糖君</span>
       <img src="../assets/see.png" alt="">
       <span>10771</span>
       <img src="../assets/like.png" alt="">
       <span>1915</span></p>
  </li>
  <li>
    <img src="../assets/hc3.jpg" alt="">
    <h5>大家都在读[第52期]</h5>
    <p>
      <span class="author">小糖君</span>
       <img src="../assets/see.png" alt="">
       <span>5191</span>
      <img src="../assets/like.png" alt="">
       <span>762</span>
     </p>
  </li>
  </ul>
</template>
<script>
  export default{
    data(){
      return{

      }
    }
  }
</script>
<style scoped>
#find_content{
   width: 100%;
   list-style: none;
   margin: 0;
   padding: 0;
   text-align: center;

   /*background-color:red;*/
 }
#find_content .author{
  display: block;
  color: #515151;
  position: relative;
  padding-right:10px;
}
#find_content .author:after{
  content: '';
  position: absolute;
  top: 30%;
  right: 0;
  bottom: 30%;
  width: 2px;
  background-color:#bfbfbf;
}
 #find_content p{
   display: block;
   width: 200px;
   margin: 10px auto;
   height: 30px;
   text-align: center;
   vertical-align: middle;
 }
 #find_content p span{
   display: block;
   float: left;
   vertical-align: middle;
  color: #bfbfbf;
 }
 #find_content h5{
   display: block;
   text-align: center;
  width: 100%;
   height: 40px;
   line-height: 40px;
   font-size: 17px;
 }
 #find_content p img{
   display: block;
   margin-top: 5px;
   margin-left: 6px;
   margin-right: 4px;
   width: 10px;
   height: 10px;
   float: left;
 }
 #find_content{
   position: relative;
 }
 #find_content::before{
   content: '';
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   height: 1px;
   background-color: #DCDCDC;
   transform: scaleY(.5);
 }

#find_content li{
  padding-top: 10px;
  position: relative;
   list-style: none;
   width: 100%;
   height: 300px;
 }
 #find_content li::before{
   content: '';
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
   height: 1px;
   background-color: #DCDCDC;
   transform: scaleY(.5);
 }
#find_content  img{
    width: 98%;
    margin: 10px auto;
    height: 200px;
  }
</style>

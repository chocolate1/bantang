<template>
  <div class="head">
    <div class="avatar_big">
      <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <img src="../assets/my.jpg" v-else class="el-icon-plus avatar-uploader-icon"></img>
      </el-upload>
    </div>
    <h5 class="name">海燕大人</h5>
    <p class="sign">一汪会笑的海</p>
    <div class="menu">
      <ul>
        <li>
          <p>0</p>
          <p>获赞</p>
        </li>
        <li>
          <p>0</p>
          <p>关注</p>
        </li>
        <li>
          <p>0</p>
          <p>粉丝</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      imageUrl: ''
    }
  },
  methods:{
    handleAvatarSuccess(res, file) {
       this.imageUrl = URL.createObjectURL(file.raw);
       this.$store.state.avatar=this.imageUrl;
     },
     beforeAvatarUpload(file) {
       const isJPG = file.type === 'image/jpeg';
       const isLt2M = file.size / 1024 / 1024 < 2;

       if (!isJPG) {
         this.$message.error('上传头像图片只能是 JPG 格式!');
       }
       if (!isLt2M) {
         this.$message.error('上传头像图片大小不能超过 2MB!');
       }
       return isJPG && isLt2M;
     }
   }
}
</script>
<style scoped>
@import '../static/mytop.css'
</style>

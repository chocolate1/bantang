<template>
  <div class="article">
   <div class="article_head">
     <div class="article_head_left" @click="go_home">
       <img src="../assets/pre.png" alt="">
     </div>
     <div class="middle">写文章</div>
     <button class="pre_see"  ref="see" disabled="true" @click="pre_see">预览</button>
     <button class="send " ref="send" disabled="true"  @click="send_out">发布</button>
   </div>
   <input type="text" class="input" @input="control" @focus="display_none" v-model="headline" placeholder="标题"></input>
   <span class="line"></span>
   <!-- <div type="text" class="input"  contenteditable  @input="headline = $event.target.innerText"  @click="display_none" placeholder="标题"></div> -->
   <div class="article_container">
     <ul>
       <li>
         <textarea name="name" rows="10" ref="textarea" cols="80" placeholder="正文" @focus="display_block" @input="control" v-model="content">
         </textarea>
         <ul>
           <li class="pre_li_pic" v-for="item in fileListurl">
             <img @click="remove_pic" class="pre_pic" :src="item" alt="">
           </li>
         </ul>
          <input hidden type="file" accept="image/jpeg,image/jpg,image/png" capture="camera" @change="fileInput" >
         <el-upload style="margin-top:10px;"action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card"    :on-success="upload" :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
        </el-upload>
        <el-dialog v-model="dialogVisible" style="display:none;"  size="tiny">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
       </li>
     </ul>

   </div>
    <div class="article_footer" style="display:none;" ref='list'>
      <ul>
        <li class="pic">添加图片</li>
        <li class="goods">添加商品</li>
        <li class="active">参与活动</li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Toast } from 'mint-ui';
  export default{
    data(){
      return{
        headline:'',
        content:'',
        dialogImageUrl:'',
        dialogVisible: false,
        fileListurl:[]
      }
    },
    created(){
        this.headline=this.$store.state.headline;
        this.content=this.$store.state.content;
          for(let i=0;i<this.$store.state.picurl.length;i++){
              this.fileListurl.push(this.$store.state.picurl[i]);
        }
        },

    methods:{
      control(){
        if(this.headline.length<=0 || this.content.length<=0){
          this.$refs.see.disabled=true
          this.$refs.see.className="pre_see"
          this.$refs.send.disabled=true
          this.$refs.send.className="send"
        }else{
          this.$refs.see.disabled=false
          this.$refs.see.className="pre_see_active"
          this.$refs.send.disabled=false
          this.$refs.send.className="send_active"
        }
      },
      go_home(){
        this.$router.push({path:'/'})
      },
      display_none(){
        this.$refs.list.style.display="none"
      },
      display_block(){
        this.$refs.list.style.display='block'
        console.log('wenjian');
        this.dialogImageUrl=file.url
        console.log(this.dialogImageUrl);
      },
      send_out(){
        this.$store.dispatch('writetitle',this.headline);
        this.$store.dispatch('writecontent',this.content);
        console.log(this.$store.state.content)
        var str = JSON.stringify(this.$store.state.picurl);
        localStorage.setItem("pics",str);
        localStorage.setItem('title',this.$store.state.headline);
        localStorage.setItem('content',this.$store.state.content);
        console.log(this.headline);
        console.log(this.content);
        let instance = Toast('发布成功');
        setTimeout(() => {
        instance.close();
        this.$router.push({path:'/asuccess'})
        }, 2000);
      },
      pre_see(){
        this.fileListurl=this.$store.state.picurl;
        this.$store.dispatch('writetitle',this.headline);
        this.$store.dispatch('writecontent',this.content);
        this.$router.push({path:'/pre_see'})
      },
      handleRemove(file, fileList) {
        this.fileListurl=fileList;
        console.log('删除');
         console.log(this.fileListurl);
     },
     upload (response,file,fileList) {
       let that = this;
       console.log('上传文件');
       console.log(file);
       console.log(typeof that.$store.state.picurl);
       that.$store.dispatch('upload',file.url);
       console.log(that.$store.state.picurl);
        console.log('store上传成功');
       console.log(this.$store.state.picurl);
       this.$refs.see.disabled=false
       this.$refs.see.className="pre_see_active"
       this.$refs.send.disabled=false
       this.$refs.send.className="send_active"
     },
     close_big(){
       this.$refs.big.style.display='none'
     },
     show_big(){
       this.$refs.big.style.display="block"
     }
    }
  }
</script>
<style scoped>
@import  '../static/article.css'

</style>

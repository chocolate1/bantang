# vue2.0仿半糖
  Vue是构建用户界面的先进框架。它不像其他全能的框架，Vue是从头开始逐渐设计起来的。核心库只专注于视图层，它非常容易上手并且可以与其他库或现有的项目进行整合。在另一方面，当与相关工具和支持库结合使用时，Vue也能完美的驱动复杂的单页面应用。小女子深知 “纸上得来终觉浅,绝知此事要躬行.”，且有着大多数女孩纸的优点爱购物逛各种购物平台(￣▽￣),于是开始了vue2.0仿半糖APP的故事，而半塘作为一个为大众推荐好物的平台，自然最重要的就是能够搜索好物和发现好物，所以针对这自认为最重要的两个功能开始了代码世界的遨游。
<br>
## 先上波动态图
![登录](https://github.com/chocolate1/bantang/blob/master/src/assets/login.gif)<br>
<br>
![搜索](https://github.com/chocolate1/bantang/blob/master/src/assets/search.gif)<br>
<br>
![写文章](https://github.com/chocolate1/bantang/blob/master/src/assets/article.gif)
### 主要的页面效果:<br>
 * 触摸内容滑动
 * 轮播图
 * 滑动一定位置固定某元素的位置
 * 遮罩层的效果
 * 主要的各个页面效果实现

# 线上体验：<br>
[（￣︶￣）↗预览demo](https://chocolate1.github.io/vue-bantang-demo/index.html#/)（用chrome浏览器切换手机模式预览更佳，发文章的功能点击底部菜单栏+哦，搜索请搜索口红化妆品等关键字，其他数据还没mock进去...）<br>
[（￣︶￣）↗源代码](https://github.com/chocolate1/bantang)<br>
<br>
### 技术栈:<br>
 * vue2.0
 * vue-router spa开发
 * vuex 专为Vue.js 应用程序开发的状态管理模式,集中式存储管理应用的所有组件的状态
 * axios 一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端
 * mint-ui 基于vue.js的移动端组件库 帮助快速搭建页面（项目中上传图片页面有使用到）
 * easy-mock 前后端分离，提供数据接口（搜索时提供的假数据）
 * html5 css3 （页面的基本实现）
<br>

### 主要的功能实现:<br>
* 用户的登录状态：因为涉及用户的个人信息修改等页面都要有登录状态的判断，若未登录则不显示其页面，所以我们必须对用户的登录状态(存入store里的boolean变量)进行改变，并且控制登录前后的页面跳转。（这里多一句小嘴，就是router-link激活时其实自己本身有个默认类名router-link-active,若想对激活元素操作你可以选择这个类名，但是值得注意的是"是否激活" 默认类名的依据是 inclusive match即全包含匹配[关于router-link-active详细参照]（https://router.vuejs.org/zh-cn/api/router-link.html)<br>

##### 主要代码实现:
```
 login() {
      var myreg =/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
     if(this.phonenumber.length == 0 ){
       alert('请输入手机号码！');
     }
     else if(!myreg.test(this.phonenumber)){
       alert('请输入有效的手机号！')
     }
     else{
       this.$store.commit('checking')
       this.$router.push({path:'/'})
     }
    }
    <router-link  :to="isLogin" tag="li">
				<span class="icon icon-info"></span>
			 	<p class="home_text">消息</p>
		  </router-link>
			<router-link  :to="isLoading" tag="li">
				<span class="icon icon-my"></span>
			 	<p class="home_text">我的</p>
		  </router-link>
```
* 商品的搜索功能：搜索，当然首先得有数据让你搜索，我选择了easy-mock来创建我的假数据[关于easy-mock](http://easy-mock.com/docs),然后对数据请求[关于axios可参考](https://www.awesomes.cn/repo/mzabriskie/axios)，根据关键字进行匹配，搜索完毕后有个搜索历史，然后清空搜索历史。（这些比较基础请参考源代码）<br>
##### 主要的代码实现：<br>
```
   created () {
      this.inputText = this.$store.state.inputText
      this.axios.get('http://easy-mock.com/mock/5940ff968ac26d795f00bd9e/care/list/care/list')
        .then((res)=>{
           console.log(res.data)
           let message = res.data
           for(let i in message){
             let item = i;
             console.log(item);
             console.log(this.inputText);
             console.log(item.indexOf(this.inputText));
             if(item.indexOf(this.inputText)!== -1){
               this.contents = message[item]
               return
             }
           }
           if(this.contents.length){
             this.message = true
           }else{
             this.message = false
             this.$refs.tip.className='tipshow'
             console.log('没有找到哦');
           }
           })
       .catch((error) => {console.log(error)})
    }
```

* 写文章发布文章的功能：写文章和发布文章当然需要数据的存取，而且这是一个分享好物的功能必须得有图片才更有说服力，而因为用户发布完图片后不管是否刷新自己辛苦写的文章还是要在的呀，要不然大家还写个啥呢，但是发布出去之后写文章和预览页面就不能还保存着发布出去的数据内容了，所以我就将写文章和预览文章的页面中的状态保存在store里面，当点击发布按钮的时候，将store里面的数据保存到localstorage当中，跳转到我的文章以及文章查看页面时则获取localstorage内的数据，现在只能获取最新的文章因为本仙女还没有将其存储为一个对象数组，以后定会慢慢折腾。<br>
##### 主要的代码实现：<br>
###### 页面实例创建完成之后：
```created(){
        this.headline=this.$store.state.headline;
        this.content=this.$store.state.content;
          for(let i=0;i<this.$store.state.picurl.length;i++){
              this.fileListurl.push(this.$store.state.picurl[i]);
        }
       }
```
###### 图片的上传和删除（参考eliment-ui 的upload组件）<br>
```
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
     }
```
###### 预览<br>
```
  pre_see(){
        this.fileListurl=this.$store.state.picurl;
        this.$store.dispatch('writetitle',this.headline);
        this.$store.dispatch('writecontent',this.content);
        this.$router.push({path:'/pre_see'})
      }
```
###### 发布成功(引用了Toast吐司提示)：值得注意的是不要忘记在引用的页面加上import { Toast } from 'mint-ui';
```
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
      }
```
<br>

### 总结
  * 关于README.md的编写，值得注意的是一定要对齐对齐！！！
  * 当时纠结写网页版还是手机版所以直接用的px，后来做成移动端后悔不已，不像微信小程序一开始就采用了移动端的适配rpx,哇，但是页面太多，然后小仙女就这么一直错下去了（以后还是要改回来的(╥╯^╰╥)），求求你们如果想好了做移动端请用rem自适应布局，别跟我一样犯蠢!!!
  * 当碰到不会的问题，请多看看文档，是否自己有所遗漏。当初router-link-active这个知识点就没扫到结果自己写了一大堆不如一个默认类名来的痛快，所以当碰到繁杂的工作量时你就要怀疑一下自身是否自己错过了什么快捷的办法。
  * 关于dist文件夹，一开始你的index预览页面啥也没有，这正常，改变一下各个文件的路径就好了，图片显示不出来也是一样的道理；而用了easy-mock的数据请求时请写成https,不然数据无法获得。
  * 这个项目到目前的程度也做完挺久的了，一直没有写总结，这也是个毛病，因为很多东西当时觉得需要注意，现在倒觉得没什么，所以以后一定要边做边总结，让后来的人能更快的上手。还有购物和晒照功能以及数据的懒加载等在向我招手，我会尽快握住他们的。
  
<br>

#### 给小星星的都是高富帅和白富美✺◟(∗❛ัᴗ❛ั∗)◞✺，请向我发射你们的小星星吧!(http://img0.imgtn.bdimg.com/it/u=46752570,1518794826&fm=26&gp=0.jpg)
   
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
"# bantang" 

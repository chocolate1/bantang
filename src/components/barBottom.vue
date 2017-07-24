<template>
	<div class="container">
		<div class="footer">
		 <nav class="bottombar">
			<router-link  to="/"  exact tag="li">
 					<span class="icon icon-home"></span>
 				 <p class="home_text">主页</p>
 			</router-link>
		  <router-link  to="/find" tag="li">
				<span class="icon icon-find"></span>
			 	<p class="home_text">发现</p>
		  </router-link>
			<router-link to=""  tag="li">
				<div class="wrap more">
					<img ref="more" @click="showdouble" src="../assets/more.png" alt="">
				</div>
		  </router-link>
		  <router-link  :to="isLogin" tag="li">
				<span class="icon icon-info"></span>
			 	<p class="home_text">消息</p>
		  </router-link>
			<router-link  :to="isLoading" tag="li">
				<span class="icon icon-my"></span>
			 	<p class="home_text">我的</p>
		  </router-link>
		</nav>
	</div>
	<div class="tuceng" style="display:none;" @click="close" ref="tuceng">
	</div>
	<div class="redtu"  style="display:none;" @click="close" ref="redtu">
		<div class="white"></div>
		<img class="close" @click= "close"></img>
		<router-link class="showD" tag="li" :to="isshow"><img src="../assets/showD.png" alt="">发晒单</router-link>
		<router-link :to="isexist" tag="li"class="showW"><img src="../assets/showW.png" alt="" >发文章</router-link>
	</div>

</div>
</template>
<script>
export default{
	computed: {
		isLogin(){
			console.log('dfsh')
			if(this.$store.state.check === false){
				return '/loading'
		   }else{
				return  '/message'
				}
		},
		isLoading(){
			if(this.$store.state.check === false){
				return '/loading'
		   }else{
				return  '/my'
				}
		},
		isexist(){
			if(this.$store.state.check === false){
				return '/loading'
		   }else{
				return  '/article'
				}
		},
		isshow(){
			if(this.$store.state.check === false){
				return '/loading'
		   }else{
				return  'sendform'
				}
		}
	},
	methods:{
		showdouble: function() {
			this.$refs.more.style.display = 'none'
			if(this.$refs.tuceng.style.display = 'none'){
			this.$refs.tuceng.style.display = 'block'
				}
			if(this.$refs.redtu.style.display = 'none'){
			this.$refs.redtu.style.display = 'block'
				}
		},
		close: function () {
			this.$refs.tuceng.style.display = 'none'
			this.$refs.redtu.style.display = 'none'
			this.$refs.more.style.display = 'block'
		}
	}
}
</script>
<style scoped>
@import '../static/barBottom.css'
</style>

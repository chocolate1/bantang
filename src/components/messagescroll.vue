<template>
  <div class="messagehead">
    <span class="message" @click="activit">
      <router-link class="ll activ" to="/message"   tag="li" >通知</router-link>
    </span>
    <span class="message " @click="activit">
      <router-link  class="ll" to="/message"  tag="li">评论</router-link>
    </span>
    <span class="message " @click="activit">
      <router-link class="ll" to="/message" tag="li">推送</router-link>
    </span>
    </div>
</template>
<script>
export default{
	methods:{
		activit: function (e) {
			let d = document.querySelector('.activ');
      d.classList.remove('activ');
			if(!e.target.classList.contains('activ')){
				e.target.classList.add('activ');

			}
		}
	}
}
</script>
<style scoped>
@import '../static/messagescroll.css'
</style>

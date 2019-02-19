<style lang="less" scoped>
.menu{
	li{
		&>a{
			color: #fff;
			&.nuxt-link-exact-active{
				color:pink;
			}
			
		}
	}
}
</style>
<template>
<ul class="menu clearfix">
	<li v-for="(item,index) in dataList" :key="index" class="left">
		<nuxt-link :to="item.typelink">{{item.typename}}</nuxt-link>
	</li>
</ul>
</template>
<script>
export default {
 	data(){
 		return {
 			dataList:[
 				{typename:'Home',typelink:'/'},
 				{typename:'About Us',typelink:'/about-us'},
 				{typename:'Products',typelink:'/products'},
 				{typename:'News',typelink:'/news'},
 				{typename:'Contact Us',typelink:'/contact-us'},
 			],
 		}
 	},
}
</script>
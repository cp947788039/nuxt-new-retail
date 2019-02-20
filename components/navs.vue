<style lang="less" scoped>
.nav-wrap{
	height: 100%;
	.logo{
		width: 1.1rem;
		height: 0.4rem;
		min-width: 70px;
		min-height: 25px;
		float: left;
		margin-right: 0.4rem;
		position: relative;
		top:50%;
		transform: translateY(-50%);
		a,img{
			display: block;
			width: 100%;
			height: 100%;
		}
	}
	.menu{
		height:100%;
		li{
			height: inherit;
			padding:0 0.4rem;
			float: left;
			&>a{
				display: block;
				padding:0.05rem;
				color: #fff;
				position: relative;
				top:50%;
				transform: translateY(-50%);
				font-size: 16px;
				&.nuxt-link-exact-active,&:hover{
					color: #fdd10d;
				}
				
			}
		}
	}
}
</style>
<template>
<div class="row clearfix nav-wrap">
	<div class="logo">
		<a href="/"><img src="/images/logo.png" alt="星家加"></a>
	</div>
	<ul class="menu clearfix">
		<li v-for="(item,index) in dataList" :key="index">
			<nuxt-link :to="item.typelink">{{item.typename}}</nuxt-link>
		</li>
	</ul>
</div>
</template>
<script>
export default {
 	data(){
 		return {
 			dataList:[
 				{typename:'公司概况',typelink:'/about-us'},
 				{typename:'解决方案',typelink:'/programme'},
 				{typename:'跨境业务',typelink:'/crossborder'},
 				{typename:'新闻发布室',typelink:'/news'},
 			],
 		}
 	},
}
</script>
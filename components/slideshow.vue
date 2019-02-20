<style lang="less" scoped>
.slidebox{
	width: 100%;
	background:blue;
	.slideshow{
		width: 100%;
		height: 100%;
		overflow: hidden;
		ul,li,a{
			width: inherit;
			height: inherit;
			display: block;
		}
		img{
			width: 100%;
			height: auto;
			display: block;
		}
	}
}
</style>
<template>
<div class="slidebox" :style="{height:slideH}">
	<div class="slideshow">
		<ul>
			<li v-for="(item,index) in imgArr" :key="index">
				<a :href="item.href" v-if="item.href"><img :src="item.src" :alt="item.alt"></a>
				<img :src="item.src" :alt="item.alt" v-else>
			</li>
		</ul>
	</div>
	<div class="item-btn prev"></div>
	<div class="item-btn next"></div>
	<div class="slidelist">
		<ul>
			<li v-for="(item,index) in imgArr" :key="index"></li>
		</ul>
	</div>
</div>
</template>
<script>
export default {
	props: {
		slideH: {
			type: String,
			default: '4.5rem',
		},
		// 参数说明：[{src:'',href:'',alt:''}]，如果没有href参数，则不会显示a标签
		imgArr: {
			type: Array,
			default: function() {
				return [];
			},
		},
	},
	mounted() {
		this.$nextTick(() => {
			console.log(this.imgArr)
		});
	},
	methods: {
		slideshow() {

		},
	},
}
</script>
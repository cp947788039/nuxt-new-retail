<style lang="less" scoped>
.footer{
	width:100%;
	background:#2d2a33;
	color:#fff;
	padding:10px 0;
	position: fixed;
	left:0;
	bottom:0;
	z-index: 1;
}
</style>
<template>
<div class="footer">
	<div class="row text-center">
		{{year}} © 星家加版权所有.
	</div>
</div>
</template>
<script>
export default {
	data() {
		return {
			year:2018,
		}
	},
	created() {
		// 计算获取当前的年份
		this.calc();
	},
	methods: {
		calc() {
			const date = new Date();
			this.year = date.getFullYear();
		},
	},
}
</script>
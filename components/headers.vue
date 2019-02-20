<style lang="less" scoped>
.header{
	width: 100%;
	height: 60px;
	background: #2d2a33;
}
</style>
<template>
<div class="header">
	<navs></navs>
</div>
</template>
<script>
import navs from '@/components/navs'
export default {
 	components:{
 		navs,
 	},
}
</script>
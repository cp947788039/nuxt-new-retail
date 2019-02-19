<style lang="less" scoped>
.header{
	background:#2c3840;
}
</style>
<template>
<div class="header">
	<div class="row">
		<navs></navs>
	</div>
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
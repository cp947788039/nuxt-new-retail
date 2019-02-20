<style lang="less" scoped>

</style>
<template>
  	<div class="container">
		<headers></headers>
    	<nuxt/>
    	<footers></footers>
  	</div> 
</template>
<script>
import headers from '@/components/headers';
import footers from '@/components/footers';
export default {
 	components:{
 		headers,
 		footers,
 	},
 	data(){
 		return {

 		}
 	},
 	methods:{

 	},
}
</script>



<style lang="scss" scoped>

</style>
<template>
  	<div>
		<headers></headers>
    	<nuxt/>
    	<footers></footers>
  	</div> 
</template>
<script>
import headers from '../components/headers';
import footers from '../components/footers';
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



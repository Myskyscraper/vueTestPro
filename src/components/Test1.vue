<template>
	
	<div class="wrap">
		
		<div id="example">
			<input type="text" v-model="didi" />
				
			<input type="text" v-model="family">
		</div>

		<div>
			didi ={{didi}}

			family={{family}}

			didifamily={{didiFamily}}


		</div>

		

	

	</div>


</template>


<script>

	export default{
		name:'Test1',
		data(){
			return{
				didi:0,
				family:'family',
				txt:'hehheheheheheheheheheh',
				num:9999999999999999
			}
		},

		computed:{
			didiFamily:{
				get(){
					return this.didi+''+this.family
				},
				set(newVal){
					var names = newVal.split('')
					this.didi = names[0];
					this.family = names[1];
				}
			}
		},

		filters:{

			

		}


		


	}
	




</script>


<style >
	





</style>
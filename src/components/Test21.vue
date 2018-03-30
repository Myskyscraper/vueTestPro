<template>
   <div>
   	  <h3>我是测试2-1</h3>

		<div v-on:click="sendInfo">我要向test2发参数</div>
   	
   	  <p>{{ts}}</p>
   </div>

</template>

<script >
	

	export default{
		name:'Test21',
		props:{
			ts:String
		},
		data(){
			return {
				test21:'xixiix'
			}
		},
		methods:{
			sendInfo(){
				console.log('ok');
				this.$emit('sendiptVal',5555)
			}
		}

	}





</script>

<style scoped>
	




</style>
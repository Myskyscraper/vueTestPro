<template>
	
	<div id="main">
		

		 <h2>count:{{times}}</h2>
	</div>


</template>

<script>

	export default{
		name:'Test3',
		data(){
			return {
				times:1
			}
		},
		created(){
			var me =this;
			setInterval(function(){
				me.times++;
			},1000)


		}




	}
	




</script>

<style>
	






</style>
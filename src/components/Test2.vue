
<template>


	<div class="box">

		<h3>我是测试第二个</h3>

		<div v-on:sendiptVal='showChildMsg'>{{recChild}}</div>
		
		<p>{{msg}}</p>



		<Test21 v-bind:ts="msg"  @sendiptVal='showChildMsg'></Test21>

	


	

	</div>


</template>

<script>

	import Test21 from './Test21.vue'

	
	 
	export default{
		name:'Test2',
		data(){
			return {
				msg:'小明',
				recChild:'0'
			}
		},
		components:{
			Test21
		},
		methods:{
			showChildMsg(data){
				
				console.log(data)

				this.recChild = data;
			}

		}



	}





</script>

<style scoped>
	h3{
		font-size: 25px;
		color: #888;
	}
	





</style>
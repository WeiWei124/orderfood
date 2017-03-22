<template>
	<div class="carcon">
		<span class="sub" v-show="food.count>0" @click.stop="subCount">-</span>
		<span class="count" v-show="food.count>0">{{food.count}}</span>
		<span class="add" @click.stop="addCount">+</span>
	</div>
	
</template>

<script>
	import Vue from "vue"
	export default{
		props:{
			food:{
				type:Object
			}
			
		},
		methods:{
			addCount(){
				if(!this.food.count){
					Vue.set(this.food,'count',1)
				}else{
					this.food.count++
				}
			},
			subCount(){
				this.food.count--
			}
		}
	}
</script>


<style scoped lang="scss">
	.carcon{
		float: right;
		margin-right: .1rem;
		.sub{
			float: left;
			border: 1px solid #00a0dc;
			width: .4rem;
			height: .4rem;
			font-size: .4rem;
			text-align: center;
			line-height: .35rem;
			border-radius: 50%;
			box-sizing: border-box;
			color: #00A0DC;
			font-weight: bold;
			margin-right: .1rem;
		}
		.count{
			float: left;
			color: #2C3E50;
		}
		.add{
			float: right;
			background:#00a0dc;
			border-radius: 50%;
			width: .4rem;
			height: .4rem;
			font-size: .3rem;
			text-align: center;
			line-height: .45rem;
			color: #fff;
			font-weight: bold;
			margin-left: .1rem;
		}
	}
</style>

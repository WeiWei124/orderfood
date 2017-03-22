<template>
	<div class="food" v-if="showFood">
		<scroller lockX height="100%" ref="scrol">
			<div class="foods">
				<span class="fa fa-chevron-left back" @click="hide"></span>
				<img :src="selectFood.image" class="foodImg"/>
				<div class="names">
					<p class="name">{{selectFood.name}}</p>
					<p class="num">月售{{selectFood.sellCount}}份<span>好评率{{selectFood.rating}}%</span></p>
					<div class="price">￥{{selectFood.price}}<b v-if="selectFood.oldPrice">￥{{selectFood.oldPrice}}</b><span class="btn" v-if="!selectFood.count || selectFood===0" @click="addfood">加入购物车</span><carcon :food="selectFood" v-if="selectFood.count"></carcon></div>
				</div>
				<div class="borders" v-if="selectFood.info"></div>
				<div class="pro" v-if="selectFood.info">
					<p>商品介绍</p>
					<p class="info">{{selectFood.info}}</p>
				</div>
				<div class="borders"></div>
				<div class="appraise">
					<p>商品评价</p>
					<p class="app1">
						<span>全部</span><span>推荐</span><span>吐槽</span>
					</p>
				</div>
			</div>
		</scroller>
	</div>
	
</template>

<script>
	import { Scroller } from 'vux'
	import Vue from "vue"
	import carcon from "./carcon"
	export default{
		components:{
			Scroller,
			carcon
		},
		props:{
			selectFood:{
				type:Object
			}
			
		},
		created(){
		},
		data(){
			return{
				showFood:false
			}
		},
		methods:{
			show(){
				this.showFood=true;	
				this.$nextTick(()=>{
					this.$refs.scrol.reset()
				})
			},
			hide(){
				this.showFood=false
			},
			/*  点击添加食物  */
			addfood(){
				Vue.set(this.selectFood,'count',1)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.food{
		position: fixed;
		width: 100%;
		height:100%;
		bottom: 0;
		background: #fff;
		.foods{
			position: relative;
			padding-bottom: 1.2rem;
			width:100%;
			.back{
				position: absolute;
				font-size: .6rem;
				color: #fff;
				top: .2rem;
				left: .2rem;
			}
			.foodImg{
				width: 100%;
				height:100% ;
			}
			.names{
				padding-top: .36rem;
				padding-left: .36rem;
				.name{
					font-size: .28rem;
					font-weight: bold;
					line-height: .29rem;
					padding-bottom: .16rem;
				}
				.num{
					font-size: .2rem;
					line-height: .2rem;
					color: rgb(147,153,159);
				}
				.price{
					padding: .36rem 0;
					font-size: .3rem;
					line-height: .48rem;
					font-weight: 800;
					color: red;
					padding-right: .36rem;
					b{
						font-size: .24rem;
						text-decoration: line-through;
						color: rgb(147,153,159);
						padding-left: .1rem;
					}
					.btn{
						float: right;
						height: .48rem;
						width: 1.5rem;
						background: rgb(0,160,220);
						font-size: .2rem;
						text-align: center;
						color: #fff;
						border-radius: .24rem;
					}
				}
			}
			.borders{
				height: .32rem;
				background: #f3f5f7;
				border:1px solid #ccc ;
				border-left: none;
				border-right: none;
				box-sizing: border-box;
			}
			.pro{
				padding: .36rem 0 0 .36rem;
				p:first-child{
					font-weight: bold;
					font-size: .3rem;
				}
				p:last-child{
					font-size: .24rem;
					line-height: .48rem;
				}
			}
			.appraise{
				padding: .36rem 0 0 .36rem;
				p:first-child{
					font-size: .3rem;
				}
				.app1{
					span{
						display: inline-block;
						line-height: .32rem;
						padding: .16rem .24rem;
						font-size: .24rem;
						margin-right: .16rem;
					}
					span:nth-child(1){
						background: #00a0dc;
						color: #fff;
					}
					span:nth-child(2){
						background: #ccecf8;
						color: #4d555d;
					}
					span:nth-child(3){
						background: #e9ebec;
						color: #979ca0;
					}
				}
			}
		}
	}
</style>
<template>
	<div class="shopcart">
		<div class="shop-main" @click="show">
			<div class="shop-left">
				<div class="icon" :class="{'heightlight':shoucount>0}">购</div>
				<span class="count" v-show="shoucount>0">{{shoucount}}</span>
				<span class="money"><b :class="{'heighttext':totalPrice>0}">￥{{totalPrice}}</b></span>
				<span class="deliveryPrice">另需配送费{{deliveryPrice}}元</span>
			</div>
			<div class="shop-right" :class="addClass">
				{{send}}
			</div>
		</div>
		<div class="shopcart-list" v-show="listshow">
			<div class="list-header">
				<span class="list-left">购物车</span>
				<span class="list-right" @click="empty">清空</span>
			</div>
			<div class="list-count">
				<ul>
					<li class="foods" v-for="foods in selectFoods">
						<span class="name">{{foods.name}}</span>
						<carcon :food="foods"></carcon>
						<span class="price">￥{{foods.price*foods.count}}</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="mark" v-show="listshow" @click="hideList"></div>
	</div>
</template>

<script>
	import carcon from "./carcon"
	export default{
		components:{
			carcon
		},
		props:{
			deliveryPrice:{
				type:Number
			},
			minPrice:{
				type:Number
			},
			selectFoods:{
				type:Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				listshow:false
			}
		},
		computed:{
			totalPrice(){
				let total=0;
				this.selectFoods.forEach((food)=>{
					total+=food.price*food.count
				})
				return total
			},
			shoucount(){
				let count = 0;
				this.selectFoods.forEach((food)=>{
					count += food.count
				})
				return count
			},
			send(){
				if(this.totalPrice==0){
					return `￥${this.minPrice}元起送 `
				}else if(this.totalPrice<this.minPrice){
					let money=this.minPrice-this.totalPrice
					return `还差￥${money}元起送 `	
				}else{
					return `去结算`
				}
				
			},
			addClass(){
				if(this.totalPrice<this.minPrice){
					return ""
				}else{
					return "lightbj"
				}
			},
			listShow(){
				if(!this.shoucount){
					this.listshow=false
					return false
				}
				let show = !this.listshow
				return show
			}
			
		},
		methods:{
			show(){
				if(!this.listShow){
					return
				}
				this.listshow=!this.listshow
				
			},
			empty(){
				this.selectFoods.forEach((food)=>{
					food.count=0
				})
				this.listshow=!this.listshow
			},
			hideList(){
				this.listshow=false
			}
		}
	}
</script>


<style lang="scss" scoped>

	.shopcart{
		z-index: 100;
		height: .96rem;
		background:#131d26;
		position: relative;
		.shop-main{
			overflow: hidden;
		}
		.shop-left{
			float:left;
			.icon{
				position: absolute;
				height: .88rem;
				width: .88rem;
				background:#2b343d;
				bottom: 0;
				left: .15rem;
				border: .16rem solid #131d26;
				border-radius: 50%;
				font-size: .5rem;
				color: #fff;
				text-align: center;
				line-height: .88rem;
				z-index: 1000;
			}
			.heightlight{
				background: rgb(0,160,220);
			}
			.count{
				position: absolute;
				left: 1rem;
				bottom: .8rem;
				font-size: .24rem;
				border-radius: .5rem;
				height: .3rem;
				width: .48rem;
				text-align: center;
				line-height: .35rem;
				color: #fff;
				background: #FF0000;
				z-index: 1001;
			}
			.heighttext{
				color: #fff;
			}
			.money{
				float: left;
				margin-left: 1.4rem;
				font-size: .32rem;
				line-height: .96rem;
				color: #9b9b9d;
				b{
					font-weight: bold;
					padding-right: .12rem;
					border-right:1px solid #9B9FA2;
				}
			}
			.deliveryPrice{
				padding-left: .12rem;
				float: left;
				font-size:.24rem;
				line-height: .96rem;
				color: #9B9FA2;
			}
		}
		.shop-right{
			height: 100%;
			width: 2.1rem;
			background: #2b343b;
			float: right;
			font-size: .24rem;
			color: #9b9fa2;
			font-weight: bold;
			text-align: center;
			line-height: .96rem;
		}
		.lightbj{
			background: #00b43c;
			color: #fff;
		}
		.shopcart-list{
			position: absolute;
			background: #fff;
			bottom: .96rem;
			width: 100%;
			z-index: 10;
			.list-header{
				height: .8rem;
				background: #f3f5f7;
				line-height:.8rem;
				padding: 0 .36rem;
				box-sizing: border-box;
				border-bottom:1px solid #dbdee1;
				.list-left{
					font-size: .28rem;
					float: left;
					font-weight: bold;
				}
				.list-right{
					font-size: .24rem;
					float: right;
					color: #24a6de;
					
				}
			}
			.list-count{
				max-height: 200px;
				overflow: auto;
			}
			.foods{
				margin-left: .36rem;
				padding: .24rem 0;
				line-height: .48rem;
				font-size: .24rem;
				overflow: hidden;
				border-bottom: 1px solid #dbdee1;
				box-shadow: border-box;
				.name{
					font-size: .28rem;
					float: left;
					font-weight: bold;
				}
				.price{
					float: right;
					font-size: .28rem;
					font-weight: 800;
					color: red;
					padding-right: .25rem;
				}
			}
		}
		.mark{
			position: absolute;
			z-index: 0;
			bottom: 2rem;
			width: 100%;
			height: 100rem;
			background: rgba(0,0,0,.5);
		}
	}
</style>
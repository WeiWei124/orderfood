<template>
	<div class="goods">
		<div class="goods-main">
			<scroller class="menu" lockX height="100%" ref="fresh">
				<ul>
					<li v-for="(item,index) in menu"  class="lists" :class="{'current':curryIndex===index}" @click=scrollMenu(index)>
						<span class="lista">
							{{item.name}}
						</span>
					</li>
				</ul>		
			</scroller>
			<scroller class="foods" lockX height="100%" ref="freshs" @on-scroll="onScroll">	
				<div>
					<div v-for="item in menu" class="foods-item food-list-hook" ref="fresha">
						<h1>{{item.name}}</h1>
						<dl v-for="items in item.foods" @click="selectedFood(items)">
							<dt>
								<img :src="items.icon"/>
							</dt>
							<dd>
								<p class="name">{{items.name}}</p>
								<p>{{items.description}}</p>
								<p>月售{{items.sellCount}}份<span>好评率{{items.rating}}%</span></p>
								<p class="price">￥{{items.price}}<b v-if="items.oldPrice">￥{{items.oldPrice}}</b><carcon :food="items"></carcon></p>
							</dd>
						</dl>
					</div>
				</div>
			</scroller>
		</div>
		<shopcart :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice" :select-foods="selectFoods"></shopcart>
		<food :selectFood="selectFood" ref="food"></food>
	</div>
	
</template>

<script>
import { Scroller } from 'vux'
import shopcart from "./shopcart"
import carcon from "./carcon"
import food from "./food"
export default {
	props:{
	  	seller:{
	  		type:Object
	  	}
	},
	components:{
		Scroller,
		shopcart,
		carcon,
		food
	},
  name: 'goods',
  data () {
    return {
    	menu:[],
    	listHeight:[],
    	scrollY:0,
    	selectFood:{}
    }
  },
  created(){
  	this.$http({
  		url:"/api/goods",
  		method:"Get"
  	})
  	.then(function(res){
  		this.menu=res.data
  		this.$nextTick(() => {
          this.$refs.fresh.reset()
        })
  		this.$nextTick(()=>{
  			this.$refs.freshs.reset()
  			this._caculateHeight()
  		})

  	},function(err){
  		console.log(err)
  	})
  },
  computed:{
  	curryIndex(){
  		for(let i=0;i<this.listHeight.length;i++){
	  		let len1=this.listHeight[i]
	  		let len2=this.listHeight[i+1];
	  		if( !len2 || (this.scrollY>=len1 && this.scrollY<len2)){
	  			return i
	  		}else if(this.scrollY<0){
	  			return 0
	  		}
	  	}
  		return 0
  	},
  	selectFoods(){
  		let foods=[];
		this.menu.forEach((menus)=>{
			menus.foods.forEach((food)=>{
				if(food.count){
					foods.push(food)
				}
			})
		})
  		return foods
  	}
  },
  methods:{
	onScroll (pos) {
      this.scrollY=pos.top
//  console.log(this.scrollY)

   },
   /*  将每一块高度push进数组中  */
	_caculateHeight(){
		let foodList=this.$refs.fresha;
		let height=0;
		this.listHeight.push(height);
		for(let i=0;i<foodList.length;i++){
			let item=foodList[i]
			height+=item.clientHeight;
			this.listHeight.push(height)
		}
//		console.log(this.listHeight)
		
	},
  	scrollMenu(index){
		console.log(this.listHeight[index])
//		console.log(this.$refs.freshs)
  	},
  	
  	/*  点击显示详情  */
  	selectedFood(obj){
  		this.selectFood=obj
  		this.$refs.food.show()
  		
  	}
  }
}
</script>


<style scoped lang="scss">
	.goods{
		flex: 1;
		display: flex;
		flex-direction: column;
		.goods-main{
			flex: 1;
			display: flex;
			overflow: hidden;
			margin-top: .02rem;
			.menu{
			    width: 1.6rem;
			    background: #f3f5f7;
			    overflow: hidden;
			    .current{
			    	background: #fff;
			    }
			    .lists{
			    	height: 1.08rem;
			    	width: 100%;
			    	font-size: .24rem;
			    	position: relative;
			    	line-height: .28rem;
			    	.lista{
						position: absolute;
			    		margin: auto;
						left: 0;
						top: 50%;
						margin-top: -.2rem;
			    		padding: 0 .24rem
			    	}
			    }
			}
			.foods{
				flex: 1;
				.foods-item{
					h1{
						line-height: .52rem;
						font-size: .24rem;
						color: rgb(147,153,159);
						background: #f3f5f7;
						border-left: 1px solid #d9dde1;
						padding-left: .28rem;
					}
					dl{
						margin: .18rem 0 0 .18rem;
						padding-bottom: .1rem;
						border-bottom:1px solid #ccc;
						display: flex;
						dt{
							margin-right:.2rem;
							img{
								width: 1.14rem;
							}
						}
						dd{
							flex: 1;
							.name{
					            font-size: .28rem;
					            line-height: .42rem;
					            font-weight: bold;
					            color: rgb(7,17,27)
							}
							p{
								font-size: .2rem;
					            color: rgb(147,153,159);
					            line-height: .4rem;
					            display: block;
					            span{
					            	padding-left: .24rem;
					            }
							}
							.price{
								font-size: .3rem;
								color: red;
								font-weight: 700;
								b{
									font-size: .2rem;
									font-weight: 700;
									color: rgb(147,153,159);
									text-decoration:line-through;
								}
							}
						}
					}
					dl:last-child{
						border: none;
						padding: 0;
					}
				}
			}
		}
	}
</style>

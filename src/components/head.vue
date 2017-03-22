<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img :src="seller.avatar" class="avatar-img"/>
			</div>
			<div class="content">
				<p class="title">
					<span class="brand">品牌</span>
					<span class="name">{{seller.name}}</span>
				</p>
				<p class="descr">
					{{seller.description}}/{{seller.deliveryTime}}分钟送达
				</p>
				<p v-if="seller.supports" class="supports">
					<span class="sup1"><b>减</b></span>
					<span>{{seller.supports[0].description}}</span>
				</p>
			</div>
			<div v-if="seller.supports" class="supper-count" @click="showDetail">
				{{seller.supports.length}}个
			</div>
		</div>
		<div class="bulletin-wrapper" @click="showDetail">
			<span class="bulletin-title"><b>公告</b></span>
			<span>{{seller.bulletin}}</span>
		</div>
		<div class="background">
			<img :src="seller.avatar" />
		</div>
		<div class="detail" v-show="bools">
			<div class="detail-wrapper clearfix">
				<div class="detail-main">
					<p class="name">
						{{seller.name}}
					</p>
					<p class="title">
						<span class="line"></span>
						<span class="text">优惠信息</span>
						<span class="line"></span>
					</p>
					<p v-for="item in seller.supports" class="items">{{item.description}}</p>
					<p class="title">
						<span class="line"></span>
						<span class="text">商家公告</span>
						<span class="line"></span>
					</p>
					<p class="main">{{seller.bulletin}}</p>
				</div>
			</div>
			<div class="detail-close" @click="showDetail">
	          	+
	        </div>
		</div>
	</div>
	
</template>

<script>
export default {
  name: 'head',
  props:{
  	seller:{
  		type:Object
  	}
  },
  data () {
    return {
    	bools:false
    }
  },
  methods:{
  	showDetail(){
  		this.bools=!this.bools
  	}
  }
}
</script>


<style scoped lang="scss">
	@import url("../common/styles/mixin.scss");
	.header{
		color: #fff;
		background:rgba(7,17,27,.5);
		overflow: hidden;
		.background{
			position: absolute;
			z-index: -1;
			top: 0;
			left:0;
			width: 100%;
			height:2.6rem;
			filter:blur(.03rem);
			img{
				width: 100%;
				height:2.6rem;
			}
		}
		.content-wrapper{
			padding: .48rem .24rem .36rem .48rem;
			vertical-align:bottom;
			font-size:0;
			position: relative;
			.avatar{
				display: inline-block;
				margin-right: .16rem;
				vertical-align: top;
				.avatar-img{
					width:1.2rem;
					height:1.2rem;
					border-radius: .05rem;
				}
			}
			.content{
				display: inline-block;
				font-size: .24rem;
				.title{
					margin: .04rem 0 .16rem 0;
        			line-height: .35rem;
        			font-size:.32rem;
        			.brand{
        				float: left;
        				width: .6rem;
        				height: .34rem;
        				background: red;
        				font-size: .22rem;
        				line-height: .35rem;
        				text-align: center;
        				margin-bottom: .02rem;
        				border-radius: .05rem;
        				margin-right: .2rem;
        			}
				}
				.descr{
					margin-bottom: .15rem;

				}
				.supports{
					.sup1{
						width: .24rem;
						height: .24rem;
						background: #fff;
						color: red;
						display: inline-block;
						vertical-align: top;
						b{
							width: .24rem;
							height: .24rem;
							line-height: .24rem;
							display: block;
							transform:scale(0.7);
						}
					}
				}
			}
			.supper-count{
				font-size: .24rem;
				position: absolute;
				right: .24rem;
				bottom: .36rem;
				width: 1rem;
				height: .48rem;
				background: rgba(0,0,0,0.2);
				line-height: .48rem;
				border-radius:.2rem ;
				text-align: center;
			
				/*&:before{
					content: " ";
					position: absolute;
					right: .1rem;
					border-left:.1rem solid #fff ;
					border-top:.1rem solid transparent ;
					border-bottom:.1rem solid transparent ;
				}
				&:after{
					content: " ";
					position: absolute;
					right: .15rem;
					border-left:.1rem solid #000 ;
					border-top:.1rem solid transparent ;
					border-bottom:.1rem solid transparent ;

				}*/
			}
		}
		.bulletin-wrapper{
			font-size: .12rem;
			height: .56rem;
			line-height: .56rem;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;
			padding: 0 .44rem;
			vertical-align: top;
			background: rgba(0,0,0,0.2);
			.bulletin-title{
				margin-right: .1rem;
				color: #000;
				height: .26rem;
				line-height: .26rem;
				width: .5rem;
				display: inline-block;
				border-radius: .05rem;
				background: #fff;
				b{
					display: inline-block;
					margin: 0 auto;
					height: .26rem;
					width: .5rem;
					text-align: center;
					transform: scale(0.75);
				}
			}
		}
		.detail{
			position: absolute;
			z-index: 1000;
			width: 100%;
			height: 100%;
			background: rgba(7,17,27,.8);
			top: 0;
			left: 0;
			overflow: auto;
			.detail-wrapper{
				width: 100%;
				min-height: 100%;	
				.detail-main{
					margin-top: 1.28rem;
					padding-bottom: 1.28rem;
					.name{
						line-height: .32rem;
						font-size: .32rem;
			            text-align: center;
					}
				}	      	
			}
			.detail-close{
				position: relative;
				width: .64rem;
				height: .64rem;
				margin: -1.28rem auto 0 auto;
				clear:both;
				font-size: 1rem;
				transform: rotate(45deg);
			}
			.title{
				padding: 1rem 0 .5rem 0;
				display: flex;
				width: 80%;
				margin: 0 auto;
				.text{
		            padding: 0 .24rem;
		            font-size: .28rem;
		            font-weight: 700;
		        }
		        .line{
		        	flex: 1;
		        	display: inline-block;
		            height: 1px;
		            background: rgba(255,255,255,0.7);
		            margin: auto;
		        }
			}
			.items{
				font-size: .24rem;
				padding: 0 .96rem;
		        color: rgb(255,255,255);
		        line-height: .48rem
			}
			.main{
		        padding: 0 .96rem;
			    font-size: .24rem;
			    color: rgb(255,255,255);
			    line-height:.48rem
		    }
		}
	}
</style>

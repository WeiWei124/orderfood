<template>
	<div class="contain">
		<Heads :seller="seller"></Heads>
	    <div class="tab">
	      <router-link to="/goods" class="tab-item">商品</router-link>
	      <router-link to="/comment" class="tab-item">评论</router-link>
	      <router-link to="/shop" class="tab-item">商家</router-link>
	    </div>
    	<router-view :seller="seller"></router-view>
	</div>
	
	
</template>

<script>
import Heads from "./head"
export default {
    name: 'app',
    components:{
      Heads
    },
	data(){
		return {
			seller:{}
		}
		
	},
  created(){
  	this.$http({
  		url:"/api/seller",
  		method:"GET"
  	})
  	.then(function(res){
		this.seller=res.body
//		console.log(this.seller)
  	})
  }
}
</script>


<style lang="scss" scoped>
	.contain{
		display: flex;
		flex-direction: column;
	}
	.tab{
	  display: flex;
	  height: .8rem;
	  font-size: .28rem;
	  line-height: .8rem;
	  color: rgb(77,85,93);
	  -webkit-box-shadow:0 1px 1px -1px rgba(0, 0, 0, 0.5);
	  .tab-item{
		flex:1;
		text-align: center;
	  }
	  .router-link-active{
		color: rgb(240,20,20);
	  }
	}
	
</style>

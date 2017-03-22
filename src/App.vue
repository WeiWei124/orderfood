<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
	@import url("common/styles/font-awesome.css");
#app{ 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,body{
		width: 100%;
		height: 100%;
	}
#app,.contain{
		width: 100%;
		height: 100%;
}
</style>

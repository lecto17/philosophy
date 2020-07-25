<template>
  <div id="app">
    <Menu/> 
    <Ads/>
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Ads from './components/Ads.vue';

export default {
  name: 'App',
  components: {
    Menu,
    Ads,
  },
  data(){
    return{
      students:[]
    }
  },
}
</script>
<style>@import url('https://fonts.googleapis.com/css2?family=Gaegu:wght@400;700&display=swap');</style>
<style>
*{
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

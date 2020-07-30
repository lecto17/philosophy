<template>
  <div id="app">
    <Menu/> 
    <Ads v-show="$route.name != 'Home' && false" />
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

<style>@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&display=swap');</style>
<style>@import url('https://fonts.googleapis.com/css2?family=Gaegu:wght@400;700&display=swap');</style>
<style>@import url('https://fonts.googleapis.com/css2?family=Sunflower:wght@500&display=swap');</style>
<style>@import url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/IBMPlexSansKR-Text.woff');</style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

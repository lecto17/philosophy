<template>
  <div class="nav">
    <div class="navbox">
    <template>
      <b-navbar class="navbar1" toggleable type="light" >
      <!-- <b-navbar class="navbar1" toggleable type="light" variant="light"> -->
        <b-navbar-brand href="/"><img class="nav-img" src="../assets/logo.png" /></b-navbar-brand>
        <b-nav-item href="/login">Login</b-nav-item>
        <b-navbar-toggle target="navbar-toggle-collapse">
          <template v-slot:default="{ expanded }">
            <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
            <b-icon v-else icon="chevron-bar-down"></b-icon>
          </template>
        </b-navbar-toggle>        
        <b-collapse id="navbar-toggle-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item href="/">Home</b-nav-item>
            <b-nav-item href="/test">Test</b-nav-item>
            <b-nav-item href="/discussion">Discussion</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </template>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.nav {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 500;
  background: #fff;
}
.navbox{
  width: 80%;
  margin: 0 10%;

}
.nav-img {
  height: 10vh;
}
.navbar1{
  width: 100%;
  background: #fff;
  padding: 0;
}
.navbar-nav{
  background: #fff;
}
.nav-link{
  border-bottom: 1px solid #eee;
}
a{
  color: black; 
}
a:hover {
  color: #777;
  text-decoration: underline;
}
@media all and (max-width: 650px) {
  .nav-img{
    height: 50px;
  }
}
</style>

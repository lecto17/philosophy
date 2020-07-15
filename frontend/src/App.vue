<template>
  <div id="app">
    <Menu/> 
    <router-view/>
    <thead>
      <th>name</th>
      <th>course</th>
      <th>rating</th>
    </thead>
    <tbody v-for="student in students" :key="student.id">
      <td>{{student.name}}</td>
      <td>{{student.course}}</td>
      <td>{{student.rating}}</td>

    </tbody>

  </div>
</template>

<script>
import Menu from './components/Menu.vue';

export default {
  name: 'App',
  components: {
    Menu,
  },
  data(){
    return{
      students:[]
    }
  },
  async created(){
    var response = await fetch('http://localhost:8000/api/students/')
    this.students = await response.json();
  }
}
</script>

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

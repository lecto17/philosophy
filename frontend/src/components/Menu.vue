<template>
  <div>
    <div>
      <div class="nav">
        <div class="company-name">
          로고
        </div>

        <ul class="navbar">
            <li><router-link to="/home">Home </router-link></li>
            <li><router-link to="/test">TEST </router-link></li>
            <li><router-link to="/discussion">Discussion</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  height: 70px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  padding: 0 15px;
}

.navbar {
  display: flex;
  list-style: none;
  margin-left: auto;
  line-height: 1em;
}

.navbar li {
  padding: 5px 8px;
}

.navbar li:hover {
  background-color: #d49466;
  border-radius: 4px;
}

@media screen and (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }

  .navbar {
    flex-direction: column;
  }
}
</style>

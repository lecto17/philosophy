<template>
  <div class="login">
    <div class="top">
      <img class="nav-img" src="../assets/logo.png" />
    </div>
    <div class="input-info">
      <div>
        <div id="google-signin-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function() {
    // 로그인에 사용할 버튼 id를 입력해주세요
  },
  methods: {
    onSignIn(googleUser) {
      // 로그인한 유저 정보를 보여줍니다.
      console.log(googleUser);
    },
  },
};
</script>

<style scoped>
.nav-img {
  height: 20vh;
  border: 1px solid black;
}
</style>

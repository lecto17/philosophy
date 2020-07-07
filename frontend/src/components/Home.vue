<template>
  <div>
    <div class="Home">
      <div class="title">
        행복 유형 테스트!
      </div>
      <div class="subtitle">
        “철학자가 제시하는 나에게 맞는 행복은?”<br />
        “행복이란 무엇인가?” <br />누구나 행복하려고 살아가지만, 정작 행복이
        무엇인지 모를 때가 많습니다. <br />몇 가지 간단한 테스트를 통해 나도
        몰랐던 나에게 맞는 행복을 찾아보아요! <br />Philosophical Happiness Type
        Test
      </div>
      <div class="prices">
        <button class="price_button">
          검사시작
        </button>
      </div>

      
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
body {
    margin: 0;
}



body {
    margin: 0;
}

.title {
    text-align: center;
    font-size: 60px;
    font-weight: bold
}

.subtitle {
    text-align: center;
    font-size: 1.25rem;
    font-weight: 300;
}

.main {
    margin: 0 auto;
    margin-top: 60px;
}

.prices {
    display: flex;
    justify-content:center;
    padding: 5px;
}


.price_button {
    padding: .5rem 1rem;
    font-size: 1.25rem;
    color: #007bff;
    background-color: transparent;
    background-image: none;
    border-color: #007bff;
    width: 150px;
    height: 70px;
    border: 1px solid black;
    border-radius: 4px;
}

</style>

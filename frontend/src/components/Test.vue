<template>
  <div class="Home">
<div class="test_wrap">
        <div class="test_title">
            <h1>Question 질문 (0/20)</h1>
        </div>
        <div class="test_content_wrap">
            <ul class="content_list">
                <li class="content">
                    <div class="question">
                        <span>
                            Q-1 이상적으로는, 나를 행동하도록 동기를 부여하는 것은 적절하게 형성된 감각들과 감정들이다
                        </span>
                    </div>
                    <div class="selection_wrap">
                        <div class="selection_num1">
                            <input type="radio" name="selection" vlaue="1">
                            <span>1. 매우 그렇다</span>
                        </div>
                        <div class="selection_num2">
                            <input type="radio" name="selection" vlaue="2">
                            <span>2. 그렇다</span>
                        </div>
                        <div class="selection_num3">
                            <input type="radio" name="selection" vlaue="3">
                            <span>3. 보통이다</span>
                        </div>
                        <div class="selection_num4">
                            <input type="radio" name="selection" vlaue="4">
                            <span>4. 그렇지 않다</span>
                        </div>
                        <div class="selection_num5">
                            <input type="radio" name="selection" vlaue="5">
                            <span>5. 전혀 그렇지 않다</span>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="test_btn_wrap">
            <button class="next_btn">다음</button>
            <button class="end_btn">완료</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
  }
}
</script>

<style scoped>

</style>

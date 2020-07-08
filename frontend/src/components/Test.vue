<template>
  <div class="Home">
    <div class="test_wrap">
      <div class="test_title">
        <h1>Question 질문 (0/20)</h1>
      </div>
      <div class="test_content_wrap">
        <ul class="content_list">
          <li
            class="content"
            v-for="(QuestionNum, index) in questions.slice(
              paging - 1,
              paging + 4
            )"
            :key="QuestionNum"
          >
            <div class="question">
              <span> Q-{{ index + paging }} {{ QuestionNum }} </span>
            </div>
            <div class="selection_wrap">
              <!-- <div class="selection_num1">
                <input type="radio" :name="'selection' + index" vlaue="1" />
                <span>매우 그렇다</span>
              </div>
              <div class="selection_num2">
                <input type="radio" :name="'selection' + index" vlaue="2" />
                <span>그렇다</span>
              </div>
              <div class="selection_num3">
                <input type="radio" :name="'selection' + index" vlaue="3" />
                <span>보통이다</span>
              </div>
              <div class="selection_num4">
                <input type="radio" :name="'selection' + index" vlaue="4" />
                <span>그렇지 않다</span>
              </div>
              <div class="selection_num5">
                <input type="radio" :name="'selection' + index" vlaue="5" />
                <span>전혀 그렇지 않다</span>
              </div> -->
              <b-form-group>
                <b-form-radio-group
                  id="radio-slots"
                  v-model="values[index + paging - 1]"
                  :name="'selection' + index"
                >
                  <b-form-radio value="5">
                    매우 그렇다
                  </b-form-radio>
                  <b-form-radio value="4">
                    그렇다
                  </b-form-radio>
                  <b-form-radio value="3">
                    보통이다
                  </b-form-radio>
                  <b-form-radio value="2">
                    그렇지 않다
                  </b-form-radio>
                  <b-form-radio value="1">
                    매우 그렇지 않다
                  </b-form-radio>
                </b-form-radio-group>
              </b-form-group>
            </div>
          </li>
        </ul>
      </div>
      <div class="test_btn_wrap">
        <button class="next_btn" v-if="paging < 16" @click="clickNextBtn">
          다음
        </button>
        <button class="end_btn" v-else @click="clickEndBtn">질의 완료</button>
      </div>
      {{ values }}<br/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      values: [],
      philosophy: {
        aris: 0,
        stoic: 0,
        epic: 0,
        skep: 0,
        cyr: 0,
      },
      paging: 1,
      questions: [
        "이상적으로는, 나를 행동하도록 동기를 부여하는 것은 적절하게 형성된 감각과 감정이다", //aris
        "이상적으로는, 나를 행동하도록 동기를 부여하는 것은 통찰력과 소질 내지는 개성이다", //stoic
        "만족스러운 인생은 속세로부터 떠나 마음이 맞는 몇몇 친구들과 작은 그룹을 이뤄야 가능하다", //epic
        "삶에 관한 심오한 질문에 대해 진지하고 철저하게 생각하는 것은 모든 의견에 있는 모순을 이해하는데 필요하고, 그에 따라 평온을 가져다 준다", //skep
        "내 인생의 가장 중요한 목적은 전체적으로 보았을 때, 지금 이 순간 강렬한 경험을 갖는 것이다", //cyr
        "만족스러운 인생은 공동체에 소속됨에 의해 얻어진다", //aris
        "만족스러운 인생은 무엇보다 주어진 상황 속에서 현명하게 행동할 자유가 있는 것이고, 외부의 환경으로부터 독립하는 것이다", //stoic
        "만족스러운 인생은 무엇보다 조화롭고 즐거운 환경 속에 동화되는 것이다", //epic
        "비판적 사고와 논증은 중요하다. 왜냐하면 비판적 사고와 논증은 어떤 의견이든지 항상 장단점이 있다는 것을 보여주기 때문이다", //skep
        "다른 사람들과의 관계, 우정은 중요하지는 않지만, 종종 더 즐거운 인생을 위한 유용한 도구이고 심한 대접을 피하게 해준다", //cyr
        "삶에 관한 심오한 질문에 대해 진지하고 철저하게 생각하는 것은 그 자체로 중요한 목적이고 진취적인 관점을 창조한다", //aris
        "비판적 사고와 논증은 중요하다. 왜냐하면 나는 건전한 이성에 기반하여 행동해야만 하기 때문이다", //stoic
        "근본적인 질문에서는 단일한 이성적인 견해에 국한되는 것이 가장 좋다", //epic
        "근본적인 질문에서는 다양한 관점들을 고려하고 각각의 의견의 양면성을 이해하는 것이 가장 좋다", //skep
        "행복은 육체적 단련을 통해서 나타나고 극한의 경험 속에서도 나에게 활력을 준다", //cyr
        "내 인생의 가장 중요한 목적은 전체적으로 보았을 때, 건강하고 유복하게 사는 것(잘 먹고 잘 사는 것)이다", //aris
        "다른 사람들과의 관계, 우정은 근본적인 가치이고 좋은 삶의 본질적인 요소이다", //stoic
        "행복은 그 자체로 흥분이 없이 고요한 상태로서 나타난다", //epic
        "자신의 상태에 대한 지속적이고 엄격한 사고는 사물에 관한 균형이 잡힌 관점을 만들어 낸다", //skep
        "자신의 상태에 대한 지속적이고 엄격한 사고는 힘들거나 지루하며 피해야 한다", //cyr
      ],
    };
  },
  methods: {
    clickNextBtn() {
      this.paging += 5
    },
    clickEndBtn() {
      
    },
    calcIndex(){
        
    }
  },
  computed: {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.selection_wrap div {
  margin: 5px;
  display: inline-block;
}
</style>

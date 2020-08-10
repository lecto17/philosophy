<template>
  <div class="Test">
    <div class="test_wrap">
      <div class="test_header">
        <div class="hbox">
          <img class="img time" src="../assets/time.png" />
        </div>

        <div class="hbox">
          <img class="img straight" src="../assets/straight.png" />
        </div>
      </div>
      <div class="bar_box">
        <b-progress class="bar" max="20">
          <b-progress-bar :value="checkedBtnCount" show-progress animated>
            <strong>{{ checkedBtnCount * 5 }}%</strong>
          </b-progress-bar>
        </b-progress>
      </div>
      <div class="test_title"></div>
      <!-- <progress class="bar" :value="checkedBtnCount" max="20"></progress> -->
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
              <span>{{ QuestionNum }} </span>
            </div>
            <div class="selection_wrap">
              <!-- <b-form-group>

                <b-form-radio-group
                  class="radio_group"
                  id="radio-slots"
                  v-model="values[index + paging - 1]"
                  :name="'selection' + index"
                >
                  그렇다
                  <b-form-radio class="radio radio5" value="5"> </b-form-radio>
                  <b-form-radio class="radio radio4" value="4"> </b-form-radio>
                  <b-form-radio class="radio radio3" value="3"> </b-form-radio>
                  <b-form-radio class="radio radio2" value="2"> </b-form-radio>
                  <b-form-radio class="radio radio1" value="1"> </b-form-radio>
                  아니다
                </b-form-radio-group>
              </b-form-group> -->
              <div class="radio_group">
                <span>그렇다</span>
                <label class="labels">
                  <input
                    type="radio"
                    :name="'radio' + index"
                    v-model="values[index + paging - 1]"
                    value="5"
                  />
                  <div class="radio_div"><div>5</div></div>
                </label>
                <label class="labels">
                  <input
                    type="radio"
                    :name="'radio' + index"
                    v-model="values[index + paging - 1]"
                    value="4"
                  />
                  <div class="radio_div"><div>4</div></div>
                </label>
                <label class="labels">
                  <input
                    type="radio"
                    :name="'radio' + index"
                    v-model="values[index + paging - 1]"
                    value="3"
                  />
                  <div class="radio_div"><div>3</div></div>
                </label>
                <label class="labels">
                  <input
                    type="radio"
                    :name="'radio' + index"
                    v-model="values[index + paging - 1]"
                    value="2"
                  />
                  <div class="radio_div"><div>2</div></div>
                </label>
                <label class="labels">
                  <input
                    type="radio"
                    :name="'radio' + index"
                    v-model="values[index + paging - 1]"
                    value="1"
                  />
                  <div class="radio_div"><div>1</div></div>
                </label>
                <span>아니다</span>
              </div>
              <br />
              <!-- <div class="sizing_group">
                <div class="sizing_up" id="plus">그렇다</div>
                <div class="sizing_score"><img src="../assets/smile.png"></div>
                <div class="sizing_down" id="minus">아니다</div>
              </div> -->
            </div>
          </li>
        </ul>
      </div>
      <div class="test_btn_wrap">
        <b-button
          variant="secondary"
          class="btn next_btn"
          v-show="paging >= 6"
          @click="clickBeforeBtn"
          >이전</b-button
        >
        <b-button
          variant="secondary"
          class="btn next_btn"
          v-if="paging < 16"
          @click="clickNextBtn"
          >다음</b-button
        >
        <b-button
          variant="secondary"
          class="btn end_btn"
          v-else
          @click="clickEndBtn"
          >완료</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import $ from 'jquery'
import { mapMutations } from "vuex";
export default {
  name: "Test",
  data() {
    return {
      totalscore: 0,
      obj: {
        id: "",
        value: 0,
      },
      values: [],
      rankArr: [],
      rankObj: {
        id: "",
        value: 0,
      },
      philosophy: {
        aris: 0,
        stoic: 0,
        epic: 0,
        skep: 0,
        cyr: 0,
      },
      paging: 1,
      questions: [
        "적절한 감각과 감정이 나의 행동을 이끈다", //aris
        "나를 행동하도록 동기를 부여하는 것은 통찰력과 소질 내지는 개성이다", //stoic
        "만족스러운 인생은 속세로부터 떠나 마음이 맞는 몇몇 친구들과 작은 그룹을 이뤄야 가능하다", //epic
        "삶의 심오한 질문에 대한 성찰은 모든 의견에 있는 모순을 이해하는데 필요하고, 그에 따라 평온을 가져다 준다", //skep
        "불행의 원인은 육체적 한계에 있다", //cyr
        "공동체에 소속되어야 행복할 수 있다", //aris
        "만족스러운 인생은 무엇보다 주어진 상황 속에서 현명하게 행동할 자유가 있는 것이고, 외부의 환경으로부터 독립하는 것이다", //stoic
        "조화롭고 즐거운 환경 속에 동화되는 삶이 만족스러운 인생이다", //epic
        "비판적 사고와 논증은 중요하다. 왜냐하면 비판적 사고와 논증은 어떤 의견이든지 항상 양면성이 있다는 것을 보여주기 때문이다", //skep
        "행복은 초월적 존재와의 신비적인 합일이다.", //cyr
        "인생의 근원적인 질문에 대해 진지하고 철저하게 생각하는 것은 그 자체로 중요한 목적이고 진취적인 관점을 창조한다", //aris
        "비판적 사고와 논증은 중요하다. 왜냐하면 나는 건전한 이성에 기반하여 행동해야만 하기 때문이다", //stoic
        "행복의 척도는 이성적 사고보다는 감각을 만족시키는 쾌락이다", //epic
        "근본적인 질문에서는 다양한 관점들을 고려하고 각각의 의견의 장단점을 이해하는 것이 좋다", //skep
        "악은 하나의 실체가 아니라 선의 부재이다", //cyr
        "내 인생의 가장 중요한 목적은 전체적으로 보았을 때, 기본적인 욕구가 충족된 뒤, 자아를 실현하는 것이다", //aris
        "다른 사람들과의 관계, 우정, 공정함은 인생의 근본적인 가치이고 좋은 삶의 본질적인 요소이다", //stoic
        "행복은 그 자체로 흥분이 없는 고요한 상태로서 나타난다", //epic
        "자신의 상태에 대한 지속적이고 엄격한 사고는 사물에 관한 균형이 잡힌 관점을 만들어 낸다", //skep
        "축복된 삶은 속세로부터 해탈한 삶이다", //cyr
      ],
    };
  },
  created: function() {
    // this.$store.dispatch('storeResult', );    
  },
  methods: {
    ...mapMutations(["storeResult"]),
    getMaxNum(philo) {
      this.cmpNum("aris", philo.aris);
      this.cmpNum("stoic", philo.stoic);
      this.cmpNum("skep", philo.skep);
      this.cmpNum("epic", philo.epic);
      this.cmpNum("cyr", philo.cyr);
    },
    cmpNum(id, num) {
      if (this.obj.value <= num) {
        this.obj.id = id;
        this.obj.value = num;
      }
    },
    clickBeforeBtn() {
      this.paging -= 5;
    },
    clickNextBtn() {
      this.paging += 5;
      $(window).scrollTop(0, 0);
    },
    clickEndBtn() {
      var index;
      //var totalscore = this.philosophy.aris + this.philosophy.epic + this.philosophy.stoic + this.philosophy.cyr + this.philosophy.skep;
      if (this.checkedBtnCount == 20) {
        for (index = 0; index < 20; index++) {
          switch (index % 5) {
            case 0:
              this.philosophy.aris += Number(this.values[index]);
              break;
            case 1:
              this.philosophy.stoic += Number(this.values[index]);
              break;
            case 2:
              this.philosophy.epic += Number(this.values[index]);
              break;
            case 3:
              this.philosophy.skep += Number(this.values[index]);
              break;
            case 4:
              this.philosophy.cyr += Number(this.values[index]);
              break;
          }
          this.totalscore += Number(this.values[index]);
        }
        this.getMaxNum(this.philosophy);
        this.$store.dispatch("storeResult", this.obj.id);
        this.rankArr.push({ id: "", value: 999 });
        this.rankArr.push({
          id: "아리스토텔레스",
          value: ((100 / this.totalscore) * this.philosophy.aris).toFixed(1),
        });
        this.rankArr.push({
          id: "회의주의",
          value: ((100 / this.totalscore) * this.philosophy.skep).toFixed(1),
        });
        this.rankArr.push({
          id: "견유학파",
          value: ((100 / this.totalscore) * this.philosophy.cyr).toFixed(1),
        });
        this.rankArr.push({
          id: "에피쿠로스",
          value: ((100 / this.totalscore) * this.philosophy.epic).toFixed(1),
        });
        this.rankArr.push({
          id: "스토아학파",
          value: ((100 / this.totalscore) * this.philosophy.stoic).toFixed(1),
        });

        // this.rankArr[0].id = 'aris'
        // this.rankArr[0].value = (100 / this.totalscore * this.philosophy.aris).toFixed(1)

        // this.rankArr[1].id = 'skep'
        // this.rankArr[1].value = (100 / this.totalscore * this.philosophy.skep).toFixed(1)

        // this.rankArr[2].id = 'cyr'
        // this.rankArr[2].value = (100 / this.totalscore * this.philosophy.cyr).toFixed(1)

        // this.rankArr[3].id = 'epic'
        // this.rankArr[3].value = (100 / this.totalscore * this.philosophy.epic).toFixed(1)

        // this.rankArr[4].id = 'stoic'
        // this.rankArr[4].value = (100 / this.totalscore * this.philosophy.stoic).toFixed(1)

        //고득점 순으로 저장
        this.rankArr.sort(function(a, b) {
          return parseInt(b.value) - parseInt(a.value);
        });

        console.log("rankArr 구조: ", this.rankArr);

        let i;
        for (i = 0; i <= 5; i++) {
          console.log(
            i +
              "번쨰, id: " +
              this.rankArr[i].id +
              ", value: " +
              this.rankArr[i].value
          );
        }

        //console.log('마지막 id: '+this.rankArr[4].id+', value: '+ this.rankArr[4].value)

        this.$router.push({
          name: "Result",
          // params : {
          //   id : this.obj.id,
          //   aris : (100 / this.totalscore * this.philosophy.aris).toFixed(1),
          //   skep : (100 / this.totalscore * this.philosophy.skep).toFixed(1),
          //   cyr : (100 / this.totalscore * this.philosophy.cyr).toFixed(1),
          //   epic : (100 / this.totalscore * this.philosophy.epic).toFixed(1),
          //   stoic : (100 / this.totalscore * this.philosophy.stoic).toFixed(1)
          // }
          params: this.rankArr,

          // params : [
          //   {id: aris, value: (100 / this.totalscore * this.philosophy.aris).toFixed(1) },
          //   {id: skep, value: (100 / this.totalscore * this.philosophy.skep).toFixed(1) },
          //   {id: cyr, value: (100 / this.totalscore * this.philosophy.cyr).toFixed(1) },
          //   {id: epic, value: (100 / this.totalscore * this.philosophy.epic).toFixed(1) },
          //   {id: stoic, value: (100 / this.totalscore * this.philosophy.stoic).toFixed(1) },
          // ]
        });
      } else {
        alert("채워");
      }
    },
  },
  computed: {
    checkedBtnCount() {
      // const progress = document.querySelector('.bar_container');
      // setTimeout(()=>{
      //   progress.style.opacity =1;
      //   progress.style.width = progress.getAttribute('data-done') + '%';
      // }, 500)
      return this.values.filter((nullCount) => nullCount != null).length;
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  /* font-family: "Gaegu", cursive; */
  /* font-family: 'Sunflower', sans-serif; */
  font-family: "IBMPlexSansKR-Text";
}
.Test {
  text-align: -webkit-center;
  position: relative;
  margin-top: 15vh;
}
.test_wrap {
  width: 100%;
}
.test_header {
  display: flex;
  width: 80%;
  flex-direction: row;
  align-content: center;
  justify-content: space-around;
}
.hbox {
  width: 33%;
}
.img {
  width: 14vh;
  max-width: 128px;
  min-width: 30px;
}

.bar_box {
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vw;
  min-height: 30px;
  max-height: 70px;
}
.bar {
  height: 70%;
  width: 80%;
  background: #aaa;
}
.progress-bar {
  background: purple;
}
.progress-bar strong {
  font-size: 2.3vh;
}
.content {
  border-bottom: 1px solid #ddd;
}
.question {
  font-size: 20px;
  margin: 10px 10px 0 10px;
}
.selection_wrap {
  align-content: center;
}
.radio_group span {
  font-size: 18px;
}
.radio_group {
  padding-top: 15px;
}
.radio_group label {
  position: relative;
  cursor: pointer;
}
.radio_group label input {
  display: none;
}
.radio_div {
  position: relative;
  margin: 0 1vw;
  min-width: 30px;
  min-height: 30px;
  width: 3vw;
  height: 3vw;
  border-radius: 100%;
  background: #833471;
  color: #fff;
  font-size: 3.5vh;
}
.radio_div div {
}
.labels input:hover ~ .radio_div {
  background: #6f1e51;
}
.labels input:checked ~ .radio_div {
  color: #fff;
  background: #d980fa;
}
.btn {
  margin: 15px;
  padding: 10px;
  width: 120px;
  border-radius: 40px;
}
/* .sizing_group{
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.sizing_up, .sizing_down{
  color: #000;
}
.sizing_score{
  position: relative;
  width: 100px;
  height: 100px
}
.sizing_score img{
  position: absolute;
  width: 50%;
  top:  50%;
  left: 50%;
  transform: translate(-50%, -50%)
} */
@media all and (max-width: 650px) {
  .question {
    font-size: 14px;
    margin: 6px 6px 0 6px;
  }
  .radio_group span {
    font-size: 13px;
  }
  .radio_div {
    width: 35px;
    height: 35px;
    border-radius: 100%;
    background: #833471;
    color: #fff;
    font-size: 22px;
  }
}
</style>

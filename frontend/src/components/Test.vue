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
        <b-progress class="bar" max="15">
          <b-progress-bar :value="checkedBtnCount" show-progress animated>
            <strong>{{ checkedBtnCount * 6.5 + 2.5}}%</strong>
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
          v-if="paging < 11"
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
        "하루에 규칙적으로 시간을 정해 기도한다.", //다니엘
        "힘든 사람을 보면 위로해주고 싶은 마음이 잘 생기는 편이다.", //바나바
        "찬양 인도자가 일어나서 찬양하라고 했을 때, 나의 반응은?", //다윗
        "오랫동안 바래왔던 목표가 눈 앞에 있을 때, 하나님이 그만이라고 하시면 어떻게 행동할 것인가?", //모세
        "월요일 큐티에서 결단 내린 것들이 금요일에도 기억나 그 결단을 지켜가려고 하는 편이다.", //베&바
        "마음과 뜻을 같이해 어떤 어려움(ex, 풀무불)도 함께할 수 있는 동역자가 세명 이상 있다.", //다니엘
        "많은 사람을 괴롭힌 사람이 용서를 구하면, 다른 사람들은 용서를 받아주지 않아도 나는 받아 줄 것이다.", //바나바
        "간혹 함께하는 리더의 모습 속에서 연약함을 보더라도 순종하려 하는 편이다", //다윗
        "하나님께 민족의 죄악된 행동에 대해 회개의 기도를 드리곤 한다", //모세
        "올 한 해 하나님께 나아가는 결단을 작성하였으며 그것들을 기억하고 있다.", //베&바
        "신앙 때문에 어려움을 겪은 적이 있지만 그 어려움에 굴복하지 않는 편이다.", //다니엘
        "직장에서 회식문화로 어려워하는 친구가 있다면, 어떻게 행동할 것 같나요?", //바나바
        "친구가 나의 잘못을 꼭 집어 이야기 해줬을 때 보통 잘 받아들이는 편이다.", //다윗
        "만약 내가 한 집단의 리더라면, 다른 사람들의 장점을 잘 파악하고 사람들을 세워 함께 일할 것이다.", //모세
        "자신이 생각했을 때 옳다고 생각되는 부분들은 다른 부분과 타협하지 않고 주장하는 편이다." //베&바        
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
      if (this.checkedBtnCount == 15) {
        for (index = 0; index < 15; index++) {
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

        //let i;
        //for (i = 0; i <= 5; i++) {
        //  console.log(
        //    i +
        //      "번쨰, id: " +
        //      this.rankArr[i].id +
        //      ", value: " +
        //      this.rankArr[i].value
        //  );
        //}

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
        alert("선택하지 않은 항목이 있습니다.");
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

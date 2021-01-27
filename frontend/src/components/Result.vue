<template>
  <div class="Result">
    <div class="wrapper">
      <div class="phrase">
        <div
          class="phrase-title"
          id="show-btn"
          @click="$bvModal.show('bv-modal-example')"
        >
          <h3 v-html="philoArr[index].sentence"></h3>
        </div>      
      </div>
      <div class="top inwrapper">
        <div class="graphInfo">
          <div class="graph-title">"당신의 신앙 유형은...."</div>
          <div class="wrapcon">
            <div
              class="list-container"
              v-for="(list, index) in lists"
              :key="list.id"
            >
              <button
                class="typeBtn"
                :value="index"
                v-on:click="renew(list.id)"
              >
                {{ list.id }}
                <div class="graph-more">더 보기</div>
              </button>
              <div :id="'rank' + index" :class="'skills rank rank' + index">
                <div>{{ list.value }}%</div>
              </div>
            </div>
            <div class="gridline">
              <svg class="line">
                <line x1="90%" y1="0%" x2="90%" y2="100%" stroke="#fff" />
              </svg>
              <svg class="line">
                <line x1="80%" y1="0%" x2="80%" y2="100%" stroke="#fff" />
              </svg>
              <svg class="line">
                <line x1="70%" y1="0%" x2="70%" y2="100%" stroke="#fff" />
              </svg>
              <svg class="line">
                <line x1="70%" y1="0%" x2="70%" y2="100%" stroke="#fff" />
              </svg>
              <svg class="line">
                <line x1="60%" y1="0%" x2="60%" y2="100%" stroke="#fff" />
              </svg>
              <svg class="line">
                <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="#fff" />
              </svg>
              <svg class="line">
                <line x1="40%" y1="0%" x2="40%" y2="100%" stroke="#fff" />
              </svg>
              <svg class="line">
                <line x1="30%" y1="0%" x2="30%" y2="100%" stroke="#fff" />
              </svg>
            </div>
          </div>
        </div>        
        <div class="type-img">
          <img
            class="person-img"
            :src="require('../assets/' + philoArr[index].picture)"
          />
        </div>
      </div>
      <div class="bottom inwrapper">        
        <div class="bottom-box1">          
          <img class="middle-logo"
           :src="require('../assets/middle.jpg')"
          />
        </div>
        <div class="textInfo">
          <div class="content">
            <div class="content-html" v-html="philoArr[index].happiness" />
          </div>
        </div>
      </div>      
      <footer></footer>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "Result",
  data() {
    return {
      totalUser: 0,
      typeUser: 0,
      lists: [],
      path: "",
      index: -1,
      renewIndex: 0,
      philoArr: [
        {
          id: "다니엘",
          sentence:
            '"다니엘의 명언!"<br> -다니엘-',
          detail:
            "플라톤에게는 이성적 앎이 곧 행복인 것과는 다르게 아리스토텔레스는 이성적인 앎에 기반한 실천적인 의지에 따른 행복을 주장합니다.<br /><br />아리스토텔레스의 용어로 인간의 본질은 이성적 동물(animal rationale)입니다. 그러므로 그는 기본적인 욕구가 우리를 이끄는 것처럼 우리의 합리적인 영혼(Nous)에 따라 행동하는 것이 다른 동물과는 구별되는 인간만의 특별한 행복이라 논증합니다. <br /><br />이러한 틀 안에서, 행복은 잘 수련된 본성에 따른 영혼의 활동입니다. “우리의 반복적인 행동이 곧 우리다. 따라서 탁월함은 습관이다.” <br/><br/><br/>아리스토텔레스에 따르면, 우리는 기본적으로 사회-정치적 존재(Zoon Politikon)입니다. 심지어 우리의 가장 높은 수준의 행복(철학적 삶)도 훌륭한 사회 환경, 교육을 기반으로 하기 때문에 아리스토텔레스는 정치 참여가 매우 중요하다고 주장합니다. 인간을 위해 사회적 명예와 함께 정치 생활을 하는 것은 행복한 삶의 두 번째 단계입니다. 좋은 사회-정치 생활은 우리의 행복한 삶에 필요한 미덕(Arete)을 구축하고 계발할 수 있도록 합니다. 그런데 아리스토텔레스의 행복(Eudemonia)은 단지 운 좋은 날이 아니라 평생을 의미합니다. “한 마리의 제비가 여름을 만들지 않는다.” “우리의 반복적인 행동이 곧 우리다. 따라서 탁월함은 습관이다.”아리스토텔레스에 따르면, 높은 수준의 이성(Nous)을 키우지 않고 기본적인 욕구에 충실하여, 단순하고 일시적인 만족을 추구하는 것은  좋지 않은 행복의 사례입니다. 그에게 행복은 이성(Nous)가 지배하는 영혼 활동입니다. 그렇다고 해서 아리스토텔레스가 현실을 무시하지는 것은 아닙니다. 즉, 더 높은 수준의 행복을 주장하지만, 기본적인 욕구에 대한 만족을 건너 뛰어야 한다고 말하지는 않습니다. 그러니까, 그는 금욕적인 삶을 주장하지 않습니다!",
          happiness:
            "당신은 다니엘과 같은 크리스천이군요!<br/><br/>악한 세상과 격리되기 보다 그 가운데서 구별되어 빛나고자 하는 당신은 현실에 타협하지 않고 하나님을 경외할 줄 아는 사람입니다!<br/><br/> 현실의 고난 가운데서도 끝까지 믿음을 지킬 때, 하나님께서 반드시 갚아주시고 은혜 베푸신다는 것은 다니엘의 시대에도 지금 우리가 사는 시대에도 똑같습니다!<br/><br/> 그렇기에 지치지 않도록 하나님께 기도하며 맡기는 습관과 풀무불 보다도 뜨거운 열정의 동역자들을 얻는 것은 어떨까요?",
          picture: "daniel.png",
          personInfo:
            "This is a wider card with supporting text below as a natural lead-in to additional content.",
          keyword: "중용, 공동체, 이성, 미덕, 실천",
          suggestion: "사색, 공부, 정치 활동, 시민 운동",
          value: 0,
        },

        {
          id: "바나바",
          sentence:
            "\"바나바의 명언!\"<br/> -바나바- ",
          detail:
            "헬레니즘 문화권(기원전 336년 알렉산더 대왕과 함께 시작된)에서는 POLIS(고대 그리스 도시 국가)의 민주 정치 질서의 위기로 기존의 정치 질서에 근거하지 않는 새로운 철학적 신념이 대안으로 떠오릅니다. 아리스토텔레스주의와 다르게 스토아 학파는 정치적 참여를 중요시 여기지 않습니다. 스토아 학파는 정치적 참여보다 오히려 세계시민주의(cosmopolitism)를 주장합니다. 세계시민주의는 폴리스를 넘어서 세계를 하나의 폴리스로 생각하고, 세계시민답게 살아가는 삶을 추구합니다. 더욱이, 그들은 철학이나 학문 자체를 목적으로 두는 삶보다, APATHEIA(모든 정념에서 해방된 상태)에 가치를 둡니다. 세계시민주의와 APATHEIA 모두, 영원한 자연의 질서라는 통찰력에 기초하고 있습니다. 스토아주의의 관점에서 볼 때, 행복은 자연의 질서에 따르는 삶, 자연과 조화를 이루는 삶에 의해 가능합니다. 그들은 통찰력과 이성에 의해 접근할 수 있는 영원한 규칙(충동과 욕구가 아닌)에 따라 생활하며, 평생에 걸쳐 인격을 수양하여 주어진 상황과 외부의 영향으로부터 독립적으로 살아가고자 노력합니다. 그들은 독립적이고 냉정한 품성을 통해 공정하고 사회적으로 조화롭게 행동하고자 합니다.",
          happiness:
            "당신은 바나바와 같은 크리스천이군요!<br/><br/> 권면, 위로의 아들이라는 뜻의 바나바는 초기 공동체에서 이방인 전도에 힘썼고 구제와 말씀전파에 열정이 있어 관계,사람을 소중히 여기며 사랑하는 사람입니다!<br/><br/> 각박한 요즘 사회에서는 관용과 너그러움을 찾기가 어려운데요, 핍박자 였던 바울의 회심을 믿어주고, 공동체와 연결시켜주고 세워주었던 바나바와 같은 노력들이 절실한 때인 것 같습니다.<br/><br/> 관계중심의 신앙관을 가진 당신, 현재 회복이 필요한 관계가 있지는 않나요? 바나바의 모습을 본받아 용납해주고 먼저 손 내밀어 보는것은 어떨까요?",
          picture: "barnaba.png",
          personInfo:
            "This is a wider card with supporting text below as a natural lead-in to additional content.",
          keyword: "금욕, 단련, 극한, 질서, 이성",          
          suggestion: "복싱, 주짓수, 익스트림 스포츠, 새벽기상, 금식",        
          value: 0,
        },

        {
          id: "모세",
          sentence: "\"모세의 명언!\" <br/>-모세-",
          detail:
            "당신은 삶 속에서 많은 사람에게 귀감이 되고 선한 영향력을 드러내고 있군요? 뛰어난 리더십으로 공동체를 섬기고 시선을 하나님께 둘 수 있도록 돕는 일에 관심이 많습니다.<br/><br/>내 힘으로 할 수 없다고 여겨지는 일들 또한 하나님께 의탁하며 묵묵히 해내기에 약함이 강함되는 현장을 경험하곤 합니다.<br/><br/>하나님께서 맡기신 그 일이 너무 크게만 느껴지시나요? 은혜와 말씀을 기억하며 하나님께 의탁하세요. 오늘도 은혜의 현장이 허락될 것입니다.",
          happiness:
            "회의주의에 속하는 당신은 여러 견해가 마음을 어지럽게 하는 불행의 원인이라 생각합니다.<br><br>이렇게 생각하는 당신은 <strong>판단중지</strong>를 통해 평정심을 누리고자 합니다.<br><br>한 가지 의견을 고집하지 않는 당신은 여러 의견을 경청하고 포용하는 자세를 갖고 있습니다.<br><br><strong>균형 잡힌 사고</strong>를 바탕으로 여러 경우의 수를 고려하고 남의 의견에도 신중하게 접근합니다.<br><br>이런 당신은 다단계나 보이스피싱에 빠질 위험성이 매우 낮습니다.<br><br>다만, 지나치게 우유부단한 면이 있기에 주변으로부터 결정장애란 소리도 들을 수 있으니, 확실한 결정이 필요한 순간에는 확고하게 생각을 정리하는 편이 좋습니다",          
          picture: "moses.png",
          personInfo:
            "This is a wider card with supporting text below as a natural lead-in to additional content.",
          keyword: "의심, 신중, 판단중지, 포용성, 균형",          
          suggestion: "바둑, 프로파일러, 상담가, 교사, 협상가",          
          value: 0,
        },

        {
          id: "베드로바울",
          sentence:
            "\"살아도 주를 위해, 죽어도 주를 위해\" <br/>-베도르&바울-",          
          happiness:
            "당신은 <strong>베드로&바울 형</strong>입니다! <br/><br/>당신의 생활 속에서 활활 타오르는 불꽃과 같은 모습을 볼 수 있네요!🔥 <br/><br/>하나님께 받은 바 은혜를 기억하며 달려가지만, 가끔 하나님 앞에 넘어질 때도 있습니다. <br/><br/>하지만 자신의 과오를 빠르게 인정하며 다시금 하나님께 방향을 돌이키는 아름다운 사람입니다.",
          picture: "peterpaul.png",
          personInfo:
            "This is a wider card with supporting text below as a natural lead-in to additional content.",
          keyword: "절제, 용기, 정의, 지혜, 영혼",          
          suggestion: "종교 갖기, 인격 수양, 인도 여행, 예술 활동, 명상",          
          value: 0,
        },

        {
          id: "다윗",
          sentence:
            "\"다윗의 명언\"<br/> -다윗-",
          happiness:
            "말씀과 진리로 무장된 당신은 때로는 고난 앞에서 작아보이지만 하나님과 동행하며 고난을 이겨내는 사람입니다!<br/><br/>또한, 하나님 찬양하기를 누구보다 사랑하여 기쁠 때나 슬플 때나 하나님을 찬양합니다. 가끔 흥을 감추지 못하지만 지금과 같이 온 마음 다해 하나님을 찬양하세요! 하나님께서 기쁘게 듣고 계십니다.<br/><br/>연약한 사람이기에, 하나님 앞에서 넘어지기도 합니다. 하지만 빠르게 자신의 과오를 인정하고 하나님께 방향을 맞추는 당신은 그리스도인입니다",
          picture: "david.png",
          personInfo:
            "This is a wider card with supporting text below as a natural lead-in to additional content.",
          keyword: "평온, 감각, 웰빙, 쉼, 쾌락",
          suggestion: "요가, 독서, 정원 가꾸기, 고양기 키우기, 클래식 음악듣기",
          value: 0,
        },
      ],
    };
  },
  props: {
    msg: String,
  },
  created: function() {
    this.lists = this.$route.params;

    this.index = this.philoArr.findIndex((i) => i.id == this.lists[1].id);
  },
  mounted: function() {
    //화면 최상단으로 띄우기.
    $(window).scrollTop(0, 0);

    this.changeWidth();
  },
  methods: {
    changeWidth: function() {
      setTimeout(() => {
        var rank1 = document.getElementById("rank1");
        var rank2 = document.getElementById("rank2");
        var rank3 = document.getElementById("rank3");
        var rank4 = document.getElementById("rank4");
        var rank5 = document.getElementById("rank5");
        rank1.style.setProperty("width", this.lists[1].value * 2 + "%");
        rank2.style.setProperty("width", this.lists[2].value * 2 + "%");
        rank3.style.setProperty("width", this.lists[3].value * 2 + "%");
        rank4.style.setProperty("width", this.lists[4].value * 2 + "%");
        rank5.style.setProperty("width", this.lists[5].value * 2 + "%");
      }, 1000);
    },    
    renew: function(id) {
      let i;
      for (i = 0; i < 5; i++) {
        if (id == this.philoArr[i].id) {
          this.index = i;
          break;
        }
      }
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.Result {
  display: flex;
  justify-content: center;
}
.wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 15vh;
  width: 85%;
}
.inwrapper {
  margin: 50px 0;
}
.phrase {
  margin-bottom: 0;
}
.phrase-title {
  font-size: 40px;
}

.top {
  display: flex;
  flex-direction: row;
  margin: 5%;
}
.graphInfo {
  width: 50%;
  padding-right: 2%;
}
.graph-title {
  font-size: 24px;
}
.wrapcon {
  position: relative;
  height: 80%;
  background: #ddd;
}
.list-container {
  display: flex;
  flex-direction: row;
  height: 20%;
}
.typeBtn {
  font-size: 15px;
  width: 20%;
  background: #fff;
  border: none;
  z-index: 5;
}
.graph-more {
  background: #000;
  border-radius: 15px;
  color: #fff;
  font-size: 12px;
  width: 90%;
}

.rank {
  width: 0;
  transition: width 2s;
  z-index: 3;
}
.rank1 {
  background-color: #ff4d4d;
}

.rank2 {
  background-color: #ffaf40;
}

.rank3 {
  background-color: #fffa65;
}

.rank4 {
  background-color: #ffcccc;
}

.rank5 {
  background-color: #cd84f1;
}

.line {
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  width: 100%;
  z-index: 1;
}

.type-img{ margin: 0 auto; margin-block: auto; margin-left: 25px; border: 1px solid #ddd; border-radius: 5px;}
.person-img{width: 100%; height: 100%;}

.bottom {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.bottom-box1 { width: 35%; margin-right: 20px;}
.bottom-box1 > .middle-logo { width: 350px;}

.textInfo {
  position: relative;
  width: 50%;    
  margin-left: 20px;
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-50% -50%);
  padding-top: 5%;
}

.content-html {
  padding-left: 25px;
  border-left: 2px solid rgb(0, 159, 37);
  text-align: left;
}

.outerBox > div {
  border-radius: 0 5px 5px 5px;
}
.innerBox {
  border-radius: 5px 5px 0 0;
  font-weight: bold;
  background: #fff;
}
.philoCard{
  overflow: hidden;
}
.graph {
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 90%;
  border-bottom: 1px solid #888;
}
.graph > div {
  position: absolute;
  width: 25%;
  border-radius: 10px 10px 0 0;
  height: 5%;
  bottom: 0;
  transition: height 2s;
}
.type-graph {
  background: green;
  left: 12.5%;
}
.total-graph {
  background: red;
  right: 12.5%;
}
.user {
  display: flex;
  width: 100%;
}
.user > div {
  width: 50%;
  height: 10%;
}

/*패드 환경 테스트 해볼 것*/
@media (max-width: 900px) {
  .wrapper {
    margin-top: 12vh;
    width: 95%;
  }
  .top {
    flex-direction: column;
  }
  .inwrapper{margin: 10px 0px;  }

  .type-img{ margin: 0 auto; margin-top: 30px; border: 1px solid #ddd; border-radius: 5px; padding: 10px;}
  .person-img{width: 100%; height: 100%;}
  .graphInfo {
    width: 100%;
    height: 50%;
    padding: 0;
  }
  .graph-title {
    font-size: 18px;
  }
  .typeBtn {
    font-size: 13px;
  }
  .graph-more {
    font-size: 10px;
  }  
  .bottom {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    margin-top: 15px;
  }
  .bottom-box1 {    
    margin: 0 auto;
    margin-bottom: 40px;    
  }
  .bottom-box1 > .middle-logo { width: 150px;}
  .textInfo { width: 100%; margin: 0 auto;}
  
  .userInfo {
    width: 100%;
    height: 150px;
  }
  .graph > div {
    width: 15%;
  }

  .total,
  .type {
    font-size: 13px;
  }
  .type-graph {
    background: green;
    left: 17.5%;
  }
  .total-graph {
    background: red;
    right: 17.5%;
  }
}
</style>

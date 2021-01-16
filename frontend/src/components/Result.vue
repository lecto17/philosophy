<template>
  <div class="Result">
    <div class="wrapper">
      <div class="phrase">
        <div
          class="phrase-title"
          id="show-btn"
          @click="$bvModal.show('bv-modal-example')"
        >
          <span v-html="philoArr[index].sentence"></span>
        </div>
        <div class="more-info">↑ 더 알아보기</div>
        <b-modal id="bv-modal-example" hide-footer>
          <template v-slot:modal-title>
            <b>관련 <code>철학 내용</code>에 대하여 </b>
          </template>
          <div class="d-block text-center">
            <h3 style="font-size: 22px;" v-html="this.philoArr[index].detail" />
          </div>
          <b-button
            class="mt-3"
            block
            @click="$bvModal.hide('bv-modal-example')"
            >Close Me</b-button
          >
        </b-modal>
      </div>
      <div class="top inwrapper">
        <div class="graphInfo">
          <div class="graph-title">"당신의 행복 성향은...."</div>
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
        <div class="textInfo">
          <!-- <img src="../assets/board.png" alt="칠판이미지" /> -->
          <div class="content">
            <div class="content-html" v-html="philoArr[index].happiness" />
          </div>
        </div>
      </div>
      <div class="bottom inwrapper">
        <div class="bottom-box1">
          <div class="temp">
            <div class="outerBox keyword">
              <span class="innerBox">키워드</span>
              <div v-html="philoArr[index].keyword"></div>
            </div>
            <div class="outerBox representative">
              <span class="innerBox">영향</span>
              <div v-html="philoArr[index].representative"></div>
            </div>
            <div class="outerBox enemy">
              <span class="innerBox">환장의 조합</span>
              <div v-html="philoArr[index].enemy"></div>
            </div>
            <div class="outerBox suggestion">
              <span class="innerBox">추천하는 행동</span>
              <div v-html="philoArr[index].suggestion"></div>
            </div>
            <div class="outerBox book">
              <span class="innerBox">관련 서적</span>
              <div v-html="philoArr[index].book"></div>
            </div>
          </div>
          <div class="person">
            <div class="philoCard">
              <b-card-group>
                <b-card title="">
                  <!-- <b-card title="Aristoles" img-src="../assets/aristoteles.png"  img-alt="Image" img-top style="width: 300px; height: auto;"> -->
                  <!-- <img class="person-img" src="../assets/aris.png"><br/><br/> -->
                  <img
                    class="person-img"
                    :src="require('../assets/' + philoArr[index].picture)"
                  /><br /><br />
                  
                  <template v-slot:footer>
                    <!-- <small class="text-muted">{{philoArr[index].id}}</small> -->
                    <span
                      class="text-muted"
                      v-if="
                        philoArr[index].id != '스토아학파' &&
                          philoArr[index].id != '견유학파'
                      "
                      ><strong>{{ philoArr[index].id }}</strong></span
                    >
                    <span v-else-if="philoArr[index].id == '견유학파'"
                      ><strong>플로토니스</strong></span
                    >
                    <span v-else>키티온의 <strong>제논</strong></span>
                    <div class="title">
                      활동시기 {{ philoArr[index].period }}
                    </div>
                  </template>
                </b-card>
              </b-card-group>
            </div>
          </div>
        </div>
        <!-- <div class="temp">
          <div class="buttonInfo">
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-1 variant="info"
                  >키워드</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-1"
                visible
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text v-html="philoArr[index].keyword" />
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-2 variant="info"
                  >영향</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-2"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text v-html="philoArr[index].representative" />
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-3 variant="info"
                  >환장의 조합</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-3"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text v-html="philoArr[index].enemy" />
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-4 variant="info"
                  >추천하는 행동</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-4"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text v-html="philoArr[index].suggestion" />
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button block v-b-toggle.accordion-5 variant="info"
                  >관련 서적</b-button
                >
              </b-card-header>
              <b-collapse
                id="accordion-5"
                accordion="my-accordion"
                role="tabpanel"
              >
                <b-card-body>
                  <b-card-text v-html="philoArr[index].book" />
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div> -->
        <div class="userInfo">
          <!-- <div class="graph"> -->
          <!-- <div class="title">참여자수<br />&해당 유형수</div> -->
          <div class="graph">
            <div class="type-graph">{{ philoArr[index].value }}</div>
            <div class="total-graph">{{ totalUser }}</div>
          </div>
          <div class="user">
            <div class="type">해당 유형수</div>
            <div class="total">참여자수</div>
          </div>
          <!-- </div> -->
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
      testColor: "red",
      totalUser: 0,
      typeUser: 0,
      lists: [],
      path: "",
      index: -1,
      renewIndex: 0,
      philoArr: [
        {
          id: "아리스토텔레스",
          sentence:
            '"인간은 정치적 동물이다"<br> -아리스토텔레스주의 (Aristotelianism)-',
          detail:
            "플라톤에게는 이성적 앎이 곧 행복인 것과는 다르게 아리스토텔레스는 이성적인 앎에 기반한 실천적인 의지에 따른 행복을 주장합니다.<br /><br />아리스토텔레스의 용어로 인간의 본질은 이성적 동물(animal rationale)입니다. 그러므로 그는 기본적인 욕구가 우리를 이끄는 것처럼 우리의 합리적인 영혼(Nous)에 따라 행동하는 것이 다른 동물과는 구별되는 인간만의 특별한 행복이라 논증합니다. <br /><br />이러한 틀 안에서, 행복은 잘 수련된 본성에 따른 영혼의 활동입니다. “우리의 반복적인 행동이 곧 우리다. 따라서 탁월함은 습관이다.” <br/><br/><br/>아리스토텔레스에 따르면, 우리는 기본적으로 사회-정치적 존재(Zoon Politikon)입니다. 심지어 우리의 가장 높은 수준의 행복(철학적 삶)도 훌륭한 사회 환경, 교육을 기반으로 하기 때문에 아리스토텔레스는 정치 참여가 매우 중요하다고 주장합니다. 인간을 위해 사회적 명예와 함께 정치 생활을 하는 것은 행복한 삶의 두 번째 단계입니다. 좋은 사회-정치 생활은 우리의 행복한 삶에 필요한 미덕(Arete)을 구축하고 계발할 수 있도록 합니다. 그런데 아리스토텔레스의 행복(Eudemonia)은 단지 운 좋은 날이 아니라 평생을 의미합니다. “한 마리의 제비가 여름을 만들지 않는다.” “우리의 반복적인 행동이 곧 우리다. 따라서 탁월함은 습관이다.”아리스토텔레스에 따르면, 높은 수준의 이성(Nous)을 키우지 않고 기본적인 욕구에 충실하여, 단순하고 일시적인 만족을 추구하는 것은  좋지 않은 행복의 사례입니다. 그에게 행복은 이성(Nous)가 지배하는 영혼 활동입니다. 그렇다고 해서 아리스토텔레스가 현실을 무시하지는 것은 아닙니다. 즉, 더 높은 수준의 행복을 주장하지만, 기본적인 욕구에 대한 만족을 건너 뛰어야 한다고 말하지는 않습니다. 그러니까, 그는 금욕적인 삶을 주장하지 않습니다!",
          happiness:
            "당신은 이성을 기반한 실천을 통해 행복을 얻을 수 있다고 생각합니다. <br><br>나아가 인간은 사회적 동물이기에 이성적 실천은 혼자서는 이룰 수 없고 정치적 참여에 의해 가능하다고 여깁니다. <br><br>당신은 정치, 시사에 관심이 많고 타인과 함께 어울리기를 즐깁니다. <br><br>자신만이 아니라 남의 인생에도 관심이 많은 따듯한 사람입니다. <br><br>다만 타인에 대한 관심이 지나쳐 마음이 지치기 쉬우니 먼저 자신을 돌보시길 바랍니다.",
          period: "384-322 BC",
          picture: "aris.png",
          personInfo:
            "This is a wider card with supporting text below as a natural lead-in to additional content.",
          keyword: "중용, 공동체, 이성, 미덕, 실천",
          representative:
            "토마스 아퀴나스, 헤겔, 공동체주의, 마이클 샌델, 앙겔라 메르켈",
          enemy:
            "에피쿠로스 학파 => 사회, 정치에 참여하기보다 세상과 거리를 두는 에피쿠로스 학파에 속하는 사람과는 안 맞을 수 있습니다.",
          suggestion: "사색, 공부, 정치 활동, 시민 운동",
          book:
            "아리스토텔레스, 강상진 외 2인 역, 『<strong>니코마코스 윤리학</strong>』(길, 2011). 아리스토텔레스, 김재홍 역, 『<strong>정치학</strong>』(길, 2017). 아리스토텔레스, 오지은 역, 『<strong>영혼에 관하여</strong>』(아카넷, 2018)",
          value: 0,
        },

        {
          id: "스토아학파",
          sentence:
            "“세계의 이성적 질서에 나의 생각을 맞춰야한다”<br/> -스토아 학파 (Stoicism)- ",
          detail:
            "헬레니즘 문화권(기원전 336년 알렉산더 대왕과 함께 시작된)에서는 POLIS(고대 그리스 도시 국가)의 민주 정치 질서의 위기로 기존의 정치 질서에 근거하지 않는 새로운 철학적 신념이 대안으로 떠오릅니다. 아리스토텔레스주의와 다르게 스토아 학파는 정치적 참여를 중요시 여기지 않습니다. 스토아 학파는 정치적 참여보다 오히려 세계시민주의(cosmopolitism)를 주장합니다. 세계시민주의는 폴리스를 넘어서 세계를 하나의 폴리스로 생각하고, 세계시민답게 살아가는 삶을 추구합니다. 더욱이, 그들은 철학이나 학문 자체를 목적으로 두는 삶보다, APATHEIA(모든 정념에서 해방된 상태)에 가치를 둡니다. 세계시민주의와 APATHEIA 모두, 영원한 자연의 질서라는 통찰력에 기초하고 있습니다. 스토아주의의 관점에서 볼 때, 행복은 자연의 질서에 따르는 삶, 자연과 조화를 이루는 삶에 의해 가능합니다. 그들은 통찰력과 이성에 의해 접근할 수 있는 영원한 규칙(충동과 욕구가 아닌)에 따라 생활하며, 평생에 걸쳐 인격을 수양하여 주어진 상황과 외부의 영향으로부터 독립적으로 살아가고자 노력합니다. 그들은 독립적이고 냉정한 품성을 통해 공정하고 사회적으로 조화롭게 행동하고자 합니다.",
          happiness:
            "스토아 학파에 속하는 당신은 불행의 원인을 정념 혹은 욕망으로 보고 있습니다.<br/><br/> 따라서 욕망으로부터 벗어나기 위해서 금욕적인 삶을 통해 이성을 강화시키고, 나의 이성을 자연의 이성적 질서에 맞추고자 합니다.<br/><br/>이러한 당신은 어떤 상황에서도 버틸 수 있는 강한 정신력과 인내심을 갖고 있습니다. 자신의 뜻을 신의 섭리에 맞추고자 하는 많은 크리스천이 스토아 학파에 속합니다. <br/><br/>다만 육체를 지나치게 단련하다 건강을 잃을 수도 있으니 적절한 휴식도 필요합니다. 헬스 붐이 부는 요즘, 스토아 학파의 영향력은 여전히 유지되는듯 합니다.",
          period: "333-264 BC",
          picture: "stoic.png",
          personInfo:
            "This is a wider card with supporting text below as a natural lead-in to additional content.",
          keyword: "금욕, 단련, 극한, 질서, 이성",
          representative:
            "금욕주의, 기독교, 에피테토스(노예), 세네카(상인), 마르크스 아울렐리우스(황제), 이소룡, 김계란.",
          enemy:
            "견유학파 => 육체를 단련하지 않고자 하는 견유학파에 속하는 사람과는 안 맞을 수 있습니다",
          suggestion: "복싱, 주짓수, 익스트림 스포츠, 새벽기상, 금식",
          book:
            "마르크스 아우렐리우스, 천병희 옮김, 『명상록』(숲, 2005). 에피테토스, 김재홍 역, 『왕보다 더 자유로운 삶』(서광사, 2013), 세네카, 김남우 외 2인, 『세네카의 대화』(까치, 2016)",
          value: 0,
        },

        {
          id: "회의주의",
          sentence: "“절대적 진리는 없다!” <br/>-회의주의 (Skepticism)-",
          detail:
            "회의주의자는 스토아 학파처럼 영원한 자연의 질서(Kosmos)가 있다는 전제를 공유하지는 않습니다. 그리고 그들은 기본적으로 아리스토텔레스주의자처럼 윤리적, 자연적 질서에 대한 믿음을 갖고 있지 않습니다. 회의주의자들은 어지러운 사고를 정리 하기 위해, 아무런 선입견 없이 생각하는 법을 익힙니다. 주어진 의견을 심사숙고하고, 동등한 반대 의견을 발견함으로써 편견(Doxa)을 극복하고자 합니다. 더욱이 그들은 편견에 의한 혼란을 넘어서고자 하고, 균형 잡힌 견해를 달성하고자 하며, 결코 한 가지 의견만을 고집하지 않습니다. 결국 그들은 모든 이론을 판단중지(Epoche)하고자 노력합니다. 회의주의자에 따르면, 행복은 독단적인 신념 없이 우리의 순수한 생각에 의해 만들어진 영혼의 평온입니다.",
          happiness:
            "회의주의에 속하는 당신은 여러 견해가 마음을 어지럽게 하는 불행의 원인이라 생각합니다.<br><br>이렇게 생각하는 당신은 <strong>판단중지</strong>를 통해 평정심을 누리고자 합니다.<br><br>한 가지 의견을 고집하지 않는 당신은 여러 의견을 경청하고 포용하는 자세를 갖고 있습니다.<br><br><strong>균형 잡힌 사고</strong>를 바탕으로 여러 경우의 수를 고려하고 남의 의견에도 신중하게 접근합니다.<br><br>이런 당신은 다단계나 보이스피싱에 빠질 위험성이 매우 낮습니다.<br><br>다만, 지나치게 우유부단한 면이 있기에 주변으로부터 결정장애란 소리도 들을 수 있으니, 확실한 결정이 필요한 순간에는 확고하게 생각을 정리하는 편이 좋습니다",
          period: "360-270 BC",
          picture: "skep.png",
          personInfo:
            "This is a wider card with supporting text below as a natural lead-in to additional content.",
          keyword: "의심, 신중, 판단중지, 포용성, 균형",
          representative: "섹스투스 엠피리쿠스",
          enemy:
            "스토아 학파 => 세계에 이성적 질서가 있다는 확고한 신념이 있는 스토아 학파에 속하는 사람과는 맞지 않을 수 있습니다",
          suggestion: "바둑, 프로파일러, 상담가, 교사, 협상가",
          book:
            "『섹스투스 엠피리쿠스』, 오유석 역, 『피론주의 개요』(지식을만드는지식, 2012). 황설중, 『고대 회의주의와 근대 철학』(철학과 현실사, 2019). 말테 호센펠더, 조규홍 역, 『헬레니즘 철학사』(한길사, 2011)",
          value: 0,
        },

        {
          id: "견유학파",
          sentence:
            "극단적인 육체적 쾌락이 행복이다” <br/>-키레네 학파 (Cyrenaicism)-",
          detail:
            "키레네 학파는 극단적인 쾌락주의입니다. 그들은 ‘Apatheia’(이성적 행복)에 관한 생각을 버렸습니다. 그러니까 그들은 이성과 우리의 인생에 관한 규칙에 대한 사고를 거부합니다. 에피쿠로스 학파와는 반대로 정신적인 쾌락을 받아들이지 않습니다. 키레네 학파는 지금 당장 강렬하게 느낄 수 있는 쾌락을 추구하고, 육체를 쾌락의 척도의 원천으로 여깁니다. 디오니시오스란 인물은 스토아 학파로 시작했다가 육체적 고통을 더 이상 무시하고 싶지 않아서 키레네 학파로 전환했습니다. 그는 높은 수준의 이성 없이 육체적 쾌락을 행복의 척도로 삼았습니다.",
          happiness:
            "플로티노스는 에피쿠로스 학파와 마찬가지로 세속적 성공을 위한 투쟁을 비난합니다.<br><br>그러나 에피쿠로스 학파가 연약한 인간이 현실의 투쟁을 감당할 수 없다는 점에서 세속적 성공을 비난한 것과 다르게, 플로티노스는 현실 세계가 완전한 실재성(Reality)을 갖지 못한다는 점에서 세속적 성공을 비난합니다.<br><br>플로티노스는 인간이 육체를 입은 불완전한 존재라 불행하다고 생각합니다. 따라서 플로티노스는 보다 완전한 존재가 되기 위해 현실을 등지고, 더욱 영적으로 고결한 존재가 되는 것을 목표로 삼습니다.<br><br>그의 최종적인 목표는 일자(the one, hen)와의 신비적인 합일입니다. 플로티노스에 따르면, 행복은 모든 물질성과 유한성으로부터 정화된 영혼의 상태입니다.",
          period: "435-350 BC",
          picture: "cyr.png",
          personInfo:
            "This is a wider card with supporting text below as a natural lead-in to additional content.",
          keyword: "절제, 용기, 정의, 지혜, 영혼",
          representative:
            "포르피리오스, 이암블리코스, 프로클로스, 아우구스티누스",
          enemy:
            "에피쿠로스 학파 => 감정과 감각을 중시하는 에피쿠로스 학파에 속하는 사람과는 맞지 않을 수 있습니다",
          suggestion: "종교 갖기, 인격 수양, 인도 여행, 예술 활동, 명상",
          book:
            "플로티노스, 조규형 역, 『엔네아데스』(지식을만드는지식, 2015). 화이트비, 조규형 역, 『플로티노스의 철학』(누멘, 2008). 전광식, 『신플라톤주의의 역사』(서광사, 2002)",
          value: 0,
        },

        {
          id: "에피쿠로스",
          sentence:
            "“행복은 정신적 쾌락이다.”<br/> -에피쿠로스 학파 (Epicureanism)-",
          detail:
            "<strong>아리스토텔레스와 반대로 에피쿠로스는 정치적 삶의 중요성을 부정합니다.</strong> 그는 기본적으로 철학을 행복을 쾌락을 극대화하기 위한 인생의 예술로서 이해합니다. 에피쿠로스는 우리의 본성에 따라“좋음”을 실현하기 위해 이성을 우선 순위로 두는 아리스토텔레스와 스토아 학파와는 다르게, “좋음”의 구체적인 척도로 쾌락(HEDONE)만을 받아들입니다. 에피쿠로스는 더 높고 영원한 질서(윤리적 또는 자연적 질서)를 거부하고, 극단적인 감정과 흥분되는 경험을 피함으로써 즐거움을 달성하는 데 주의를 기울입니다. 이를 에피쿠로스의 용어로 Ataraxia라고 부릅니다. 에피쿠로스 학파와 관련한 큰 오해는 그들이 극단적인 쾌락을 추구했다는 것입니다. 그러나 사람들의 오해와는 다르게 그들은 극단적인 쾌락을 거부하고 평온함 내지는 평정심을 추구합니다. 에피쿠로스는 행복한 삶을 위해 쾌적한 환경(예 : 정원, 친구들과 어울리기)에서 생활하고, 철학과 이성을 그 자체에 목적이 있다고 보지 않습니다. 원자론적 존재론 (아리스토텔레스, 스토아학파와 반대)를 기반으로 그는 우리가 신과 죽음에 대한 두려움을 극복할 수 있고, 고통을 피하기 위한 방법으로 평화로운 마음에 의해 지배되는 즐거움에 집중하자고 주장합니다. 에피쿠로스에 따르면 행복은 고통과 불쾌감을 견딜 수 있는 안정된 형태의 쾌락, 즉 평온함입니다.",
          happiness:
            "에피쿠로스 학파에 속하는 당신은 행복의 척도로 이성이 아닌 <strong>감각</strong>을 중요시 여깁니다. 당신은 육체적 고통을 불행의 원인으로 여기어 적절하게 육체를 만족시켜야 정신적으로 행복하다고 생각합니다. <br/><br/>다만, 당신이 추구하는 쾌락은 흥분되고 극단적인 쾌락이 아닌, 고요한 마음의 <strong>평온</strong>입니다. <br/><br/> 이를 위해 속세로부터 떠나 여유있는 삶을 추구합니다. 이러한 당신은 바쁜 삶 속에서도 한가함을 즐길 줄 알며 차분한 성품을 유지합니다. <br/><br/> 기술의 발전으로 점점 빨라지는 현대 사회 속에서 요가나 명상을 통해 자신의 감정을 잘 돌보시길 바랍니다. 긍정 과잉과 자기계발서의 홍수로 지나치게 자신을 단련시켜 몸과 마음이 지쳐버린 현대인에게 필요한 사상입니다. 최근 ‘Sleeponomix’나 워라벨 열풍도 에피쿠로스의 영향력으로 볼 수 있습니다.",
          period: "341-270 BC",
          picture: "epic.png",
          personInfo:
            "This is a wider card with supporting text below as a natural lead-in to additional content.",
          keyword: "평온, 감각, 웰빙, 쉼, 쾌락",
          representative: "무신론, 원자론, 켄 윌버, 마릴리 먼로",
          enemy:
            "아리스토텔레스주의자 => 공동체 성향이 강한 그들과 세상과의 단절을 추구하는 에피쿠로스 학파는 안 맞을 수 있습니다",
          suggestion: "요가, 독서, 정원 가꾸기, 고양기 키우기, 클래식 음악듣기",
          book:
            "에피쿠로스, 오유석 옮김, 『쾌락』(문학과 지성사, 1998). 앤소니 롱 이경직 역, 『헬레니즘 철학』(서광사, 2000). 루크레티우스, 강대진 옮김, 『사물의 본성에 관하여』(아카넷, 2012)",
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

    console.log("index 바뀌기 전: ", this.index);
    this.index = this.philoArr.findIndex((i) => i.id == this.lists[1].id);
    // console.log('결과: ',this.philoArr.filter(el => el.id.includes(this.lists[1].id)))
  },
  updated: function() {
    // this.$nextTick(function() {
    //   console.log('변경됨: ', this.$el.textContext)
    // })
  },
  mounted: function() {
    //화면 최상단으로 띄우기.
    $(window).scrollTop(0, 0);

    this.changeWidth();
    this.getData();
    this.renew();
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

    getData: function() {
      setTimeout(() => {
        // // this.index = this.philoArr.findIndex(i => i.id == this.lists[1].id)
        // console.log('list[1].id: ' ,this.lists[1].id);
        console.log("index 바뀐 후: ", this.index);

        for (let i = 0; i < this.philoArr.length; i++) {
          switch (this.$store.state.data.philoObj[i].id) {
            case "아리스토텔레스":
              this.philoArr.find(
                (i) => i.id == "아리스토텔레스"
              ).value = this.$store.state.data.philoObj[i].value;
              console.log('아리: ', this.$store.state.data.philoObj[i].value);
              break;
            case "에피쿠로스":
              this.philoArr.find(
                (i) => i.id == "에피쿠로스"
              ).value = this.$store.state.data.philoObj[i].value;
              console.log('에피: ', this.$store.state.data.philoObj[i].value);
              break;
            case "스토아학파":
              this.philoArr.find(
                (i) => i.id == "스토아학파"
              ).value = this.$store.state.data.philoObj[i].value;
              console.log('스토: ', this.$store.state.data.philoObj[i].value);
              break;
            case "회의주의":
              this.philoArr.find(
                (i) => i.id == "회의주의"
              ).value = this.$store.state.data.philoObj[i].value;
              console.log('회의: ', this.$store.state.data.philoObj[i].value);
              break;
            case "견유학파":
              this.philoArr.find(
                (i) => i.id == "견유학파"
              ).value = this.$store.state.data.philoObj[i].value;
              console.log('견유: ', this.$store.state.data.philoObj[i].value);
              break;
          }          
          this.totalUser += this.$store.state.data.philoObj[i].value;
          console.log('total User: ', this.totalUser);
        }

        //this.typeUser = this.$store.state.data.typeUser;

        document
          .getElementsByClassName("type-graph")[0]
          .style.setProperty(
            "height",
            ((this.$store.state.data.typeUser / this.totalUser) * 100).toFixed(
              0
            ) + "%"
          );
        document
          .getElementsByClassName("total-graph")[0]
          .style.setProperty("height", "100%");
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
    },
  },
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
  height: 50vh;
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
.gridline {
  height: 100%;
  width: 100%;
}
.line {
  position: absolute;
  top: 0px;
  right: 0px;
  height: 100%;
  width: 100%;
  z-index: 1;
}

.textInfo {
  position: relative;
  width: 60%;
  display: flex;
  justify-content: center;
}
.textInfo img {
  width: 100%;
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

.bottom {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.bottom-box1 {
  width: 80%;
  display: flex;
  flex-direction: row;
}
.temp {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 40px;
  text-align: left;
}
.outerBox {
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
.person {
  width: 40%;
}
.userInfo {
  width: 20%;
  border: 1px solid #ddd;
  border-radius: 5px;
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

@media (max-width: 650px) {
  .wrapper {
    margin-top: 12vh;
    width: 95%;
  }
  .more-info {
    font-size: 15px;
  }
  .inwrapper {
    margin: 5px 0;
    padding: 15px 0;
  }
  .phrase {
    margin: 15px;
    border-bottom: 1px solid black;
  }
  .phrase-title {
    font-size: 20px;
  }
  .top {
    flex-direction: column;
    height: 110vh;
  }
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
  .textInfo {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .content {
    padding: 0;
  }
  .content-html {
  }
  .bottom {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .bottom-box1 {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .temp {
    width: 100%;
    border: none;
  }
  .person {
    width: 100%;
  }
  .person-img{}
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

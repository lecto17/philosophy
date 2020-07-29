<template>
  <div class="Result">
    <div class="wrapper">
     <!-- <div id="flipbook">
      <div class="hard"> Turn.js </div>
      <div class="hard"></div>
      <div> Page 1 </div>
      <div> Page 2 </div>
      <div> Page 3 </div>
      <div> Page 4 </div>
      <div class="hard"></div>
      <div class="hard"></div>
    </div> -->
      <div class="phrase">
        <h1 id="show-btn" @click="$bvModal.show('bv-modal-example')">
          <span v-html="philoArr[index].sentence"></span>
          <!-- “인간은 정치적 동물이다” <br />
          -아리스토텔레스주의 (Aristotelianism)- <br /> -->
        </h1>
        <h6>↑ 더 알아보기</h6>
        <!-- <b-button >Open Modal</b-button> -->
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
      <div class="top">
        <div class="graphInfo">
          <h4>당신의 철학적 성향은</h4>
          <br />
          <div class="wrapcon">
            <div
              class="container"
              v-for="(list, index) in lists"
              :key="list.id"
            >
              <div :id="'rank' + index" :class="'skills rank rank' + index" >
                {{ list.value }}%
              </div>
              <button id="show-btn" class="typeBtn" v-on:click="renew">
                {{ list.id }}(더 보기)
              </button>
              <br /><br />
            </div>
          </div>                                    
        </div>
        <div class="temp border">                    
            <div class="textInfo">
                <h4 v-html="this.philoArr[index].happiness" />
            </div>
        </div>                
      </div>            
          <div class="bottom">                
              <div class="person border">
                  <h3 class="title">{{this.philoArr[index].period}}</h3>
                  <div>
                      <b-card-group>
                          <b-card title=''>
                          <!-- <b-card title="Aristoles" img-src="../assets/aristoteles.png"  img-alt="Image" img-top style="width: 300px; height: auto;"> -->
                              <img class="person-img" src="../assets/aris.png"><br/><br/>
                              <!-- <img class="person-img" :src="'../assets/'+this.philoArr[index].picture"><br/><br/> -->
                              <b-card-text>                                  
                                  {{personInfo}}
                              </b-card-text>
                              <template v-slot:footer>
                                  <small class="text-muted">Last updated 3 mins ago</small>
                              </template>
                          </b-card>                      
                      </b-card-group>
                  </div>
              </div>                
              <div class="temp border">
                  <div class="buttonInfo">
                      <b-card no-body class="mb-1">
                          <b-card-header header-tag="header" class="p-1" role="tab">
                              <b-button block v-b-toggle.accordion-1 variant="info">키워드</b-button>
                          </b-card-header>
                          <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                              <b-card-body>                                
                                <b-card-text v-html="this.philoArr[index].keyword" />  
                              </b-card-body>
                          </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                          <b-card-header header-tag="header" class="p-1" role="tab">
                              <b-button block v-b-toggle.accordion-2 variant="info">대표 인물</b-button>
                          </b-card-header>
                          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                              <b-card-body>
                                <b-card-text v-html="this.philoArr[index].representative" />                                                                
                              </b-card-body>
                          </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                          <b-card-header header-tag="header" class="p-1" role="tab">
                              <b-button block v-b-toggle.accordion-3 variant="info">환장의 조합</b-button>
                          </b-card-header>
                          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                              <b-card-body>
                              <b-card-text v-html="this.philoArr[index].enemy"/>
                              </b-card-body>
                          </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                          <b-card-header header-tag="header" class="p-1" role="tab">
                              <b-button block v-b-toggle.accordion-4 variant="info">추천하는 행동</b-button>
                          </b-card-header>
                          <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                              <b-card-body>
                              <b-card-text v-html="this.philoArr[index].suggestion"/>
                              </b-card-body>
                          </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                          <b-card-header header-tag="header" class="p-1" role="tab">
                              <b-button block v-b-toggle.accordion-5 variant="info">관련 서적</b-button>
                          </b-card-header>
                          <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                              <b-card-body>
                              <b-card-text v-html="this.philoArr[index].book"/>
                              </b-card-body>
                          </b-collapse>
                      </b-card>


                      
                  </div>        
              </div>        
              <div class="userInfo border">
                  
                  <h3 class="title">참여자수<br/>&해당 유형수</h3>                                       
                  <div class="user types"><span class="inner-text">{{typeUser}}</span></div>                                        
                  <br/><span class="type-num">해당 유형수</span>
                  <div class="user total"><span class="inner-text">{{totalUser}}</span></div>
                  <br/><span class="user-num">참여자수</span>
              </div>       
              
          </div>            
          <ul>
                <strong>SNS 공유하기</strong>
                
                <br/><br/>
                <div class="snsSection">
                    <img class="sns-image" src="../assets/facebook.jpg" alt="페이스북 페이지 아이콘">
                    <ShareNetwork class="sns"
                        network="facebook"                        
                        url="https://i.ytimg.com/vi/2_69hDmB634/maxresdefault.jpg"
                        title="Find your happiness besides on you, with philosophy"
                        description="Recognize oneself by five types of philosophy, just within 5 muinutes"
                        quote="The hot reload is so fast it\'s near instant. - Evan You"
                        hashtags="Happiness,Philosophy"
                    >
                        Share on Facebook
                    </ShareNetwork>
                </div>
                <br/>
                
                <!-- <img class="sns-image" src="https://png.pngtree.com/element_our/md/20180626/md_5b32227ca3eb9.jpg" alt="트위터 페이지 아이콘"> -->
                <div class="snsSection">
                    <img class="sns-image" src="../assets/twitter.jpg" alt="트위터 페이지 아이콘">
                    <ShareNetwork class="sns"
                        network="Twitter"
                        url="https://i.ytimg.com/vi/2_69hDmB634/maxresdefault.jpg"
                        title="Find your happiness besides on you, with philosophy"
                        description="Recognize oneself by five types of philosophy, just within 5 muinutes"
                        quote="The hot reload is so fast it\'s near instant. - Evan You"
                        hashtags="Happiness,Philosophy"
                    >
                        Share on Twitter
                    </ShareNetwork>
                </div>                    
                <br/>

                <div class="snsSection">
                    <img class="sns-image" src="../assets/line.png" alt="스카이프 페이지 아이콘">
                    <ShareNetwork class="sns"
                        network="Line"
                        url="https://i.ytimg.com/vi/2_69hDmB634/maxresdefault.jpg"
                        title="Find your happiness besides on you, with philosophy"
                        description="Recognize oneself by five types of philosophy, just within 5 muinutes"
                        quote="The hot reload is so fast it\'s near instant. - Evan You"
                        hashtags="Happiness,Philosophy"
                    >
                        Share on Line
                    </ShareNetwork>
                </div>                    
                <br/>
          </ul>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
export default {
  name: "Result",
  data() {
    return {
      testColor: 'red',
      totalUser: 0,
      typeUser: 0,
      lists: [],
      index: 0,      
      philoArr: [
        {
         id: '아리스토텔레스', sentence : '"인간은 정치적 동물이다"<br>-아리스토텔레스주의 (Aristotelianism)-',
         detail: '플라톤에게는 이성적 앎이 곧 행복인 것과는 다르게 아리스토텔레스는 이성적인 앎에 기반한 실천적인 의지에 따른 행복을 주장합니다.<br /><br />아리스토텔레스의 용어로 인간의 본질은 이성적 동물(animal rationale)입니다. 그러므로 그는 기본적인 욕구가 우리를 이끄는 것처럼 우리의 합리적인 영혼(Nous)에 따라 행동하는 것이 다른 동물과는 구별되는 인간만의 특별한 행복이라 논증합니다. <br /><br />이러한 틀 안에서, 행복은 잘 수련된 본성에 따른 영혼의 활동입니다. “우리의 반복적인 행동이 곧 우리다. 따라서 탁월함은 습관이다.” <br/><br/><br/>아리스토텔레스에 따르면, 우리는 기본적으로 사회-정치적 존재(Zoon Politikon)입니다. 심지어 우리의 가장 높은 수준의 행복(철학적 삶)도 훌륭한 사회 환경, 교육을 기반으로 하기 때문에 아리스토텔레스는 정치 참여가 매우 중요하다고 주장합니다. 인간을 위해 사회적 명예와 함께 정치 생활을 하는 것은 행복한 삶의 두 번째 단계입니다. 좋은 사회-정치 생활은 우리의 행복한 삶에 필요한 미덕(Arete)을 구축하고 계발할 수 있도록 합니다. 그런데 아리스토텔레스의 행복(Eudemonia)은 단지 운 좋은 날이 아니라 평생을 의미합니다. “한 마리의 제비가 여름을 만들지 않는다.” “우리의 반복적인 행동이 곧 우리다. 따라서 탁월함은 습관이다.”아리스토텔레스에 따르면, 높은 수준의 이성(Nous)을 키우지 않고 기본적인 욕구에 충실하여, 단순하고 일시적인 만족을 추구하는 것은  좋지 않은 행복의 사례입니다. 그에게 행복은 이성(Nous)가 지배하는 영혼 활동입니다. 그렇다고 해서 아리스토텔레스가 현실을 무시하지는 것은 아닙니다. 즉, 더 높은 수준의 행복을 주장하지만, 기본적인 욕구에 대한 만족을 건너 뛰어야 한다고 말하지는 않습니다. 그러니까, 그는 금욕적인 삶을 주장하지 않습니다!', 
         happiness: '당신은 이성을 기반한 실천을 통해 행복을 얻을 수 있다고 생각합니다. 나아가 인간은 사회적 동물이기에 이성적 실천은 혼자서는 이룰 수 없고 정치적 참여에 의해 가능하다고 여깁니다. 당신은 정치, 시사에 관심이 많고 타인과 함께 어울리기를 즐깁니다. 자신만이 아니라 남의 인생에도 관심이 많은 따듯한 사람입니다. 다만 타인에 대한 관심이 지나쳐 마음이 지치기 쉬우니 먼저 자신을 돌보시길 바랍니다. ', 
         period: '384-322 BC', 
         picture: '../assets/aris.png', 
         keyword: '<code>정치, 공동체, 이성, 미덕, 실천</code>', 
         representative: '토마스 아퀴나스, 헤겔,   공동체주의, 공화주의. 마이클 샌델, 앙겔라 메르켈', 
         enemy: '에피쿠로스 학파 => 사회, 정치에 참여하기 보다 세상과 거리를 두는 에피쿠로스 학파에 속하는 사람과는 안 맞을 수 있습니다.', 
         suggestion: '사색, 공부, 정치 활동, 시민 운동', 
         book: '아리스토텔레스, 강상진 외 2인 역, <code>니코마코스 윤리학</code>(길, 2011). 아리스토텔레스, 김재홍 역, <code>정치학</code>(길, 2017). 아리스토텔레스, 오지은 역, <code>영혼에 관하여</code>(아카넷, 2018)'
        },        
        
        {
          id: '스토아학파', sentence : '“세계의 이성적 질서에 나의 생각을 맞춰야한다”<br/> -스토아 학파 (Stoic)- ', 
          detail: '헬레니즘 문화권(기원전 336년 알렉산더 대왕과 함께 시작된)에서는 POLIS(고대 그리스 도시 국가)의 민주 정치 질서의 위기로 기존의 정치 질서에 근거하지 않는 새로운 철학적 신념이 대안으로 떠오릅니다. 아리스토텔레스주의와 다르게 스토아 학파는 정치적 참여를 중요시 여기지 않습니다. 스토아 학파는 정치적 참여보다 오히려 세계시민주의(cosmopolitism)를 주장합니다. 세계시민주의는 폴리스를 넘어서 세계를 하나의 폴리스로 생각하고, 세계시민답게 살아가는 삶을 추구합니다. 더욱이, 그들은 철학이나 학문 자체를 목적으로 두는 삶보다, APATHEIA(모든 정념에서 해방된 상태)에 가치를 둡니다. 세계시민주의와 APATHEIA 모두, 영원한 자연의 질서라는 통찰력에 기초하고 있습니다. 스토아주의의 관점에서 볼 때, 행복은 자연의 질서에 따르는 삶, 자연과 조화를 이루는 삶에 의해 가능합니다. 그들은 통찰력과 이성에 의해 접근할 수 있는 영원한 규칙(충동과 욕구가 아닌)에 따라 생활하며, 평생에 걸쳐 인격을 수양하여 주어진 상황과 외부의 영향으로부터 독립적으로 살아가고자 노력합니다. 그들은 독립적이고 냉정한 품성을 통해 공정하고 사회적으로 조화롭게 행동하고자 합니다.', 
          happiness: '스토아 학파에 속하는 당신은 불행의 원인을 정념 혹은 욕망으로 보고 있습니다. 따라서 불행으로부터 벗어나기 위해서 금욕적인 삶을 통해 이성을 강화시키고 나의 이성을 자연의 질서에 맞추고자 합니다. 이러한 당신은 어떤 상황에서도 버틸 수 있는 강한 정신력과 인내심을 갖고 있습니다. 자신의 뜻을 신의 섭리에 맞추고자 하는 많은 크리스천이 스토아 학파에 속합니다. 다만 육체를 지나치게 단련하다 건강을 잃을 수도 있으니 적절한 휴식도 필요합니다. 헬스 붐이 부는 요즘, 스토아 학파의 영향력은 여전히 유지되는듯 합니다.', 
          period: '333-264 BC', 
          picture: 'stoic.png', 
          keyword: '<code>금욕, 단련, 극한, 질서, 이성</code>', 
          representative: '금욕주의, 기독교, 에피테토스(노예), 세네카(상인), 마르크스 아울렐리우스(황제), 이소룡, 김계란', 
          enemy: '견유학파. 육체를 단련하지 않고자 하는 견유학파에 속하는 사람과는 안 맞을 수 있습니다', 
          suggestion: '복싱, 주짓수, 익스트림 스포츠, 새벽기상, 금식', 
          book: '마르크스 아우렐리우스, 천병희 옮김, 명상록(숲, 2005). 에피테토스, 김재홍 역, 왕보다 더 자유로운 삶(서광사, 2013), 세네카, 김남우 외 2인, 세네카의 대화(까치, 2016)'
        },
        
        {
          id: '회의주의', sentence : '“세계의 이성적 질서에 나의 생각을 맞춰야한다”<br/> -스토아 학파 (Stoic)- ', 
          detail: '',
          happiness: '',
          period: '', 
          picture: '', 
          keyword: '', 
          representative: '', 
          enemy: '', 
          suggestion: '', 
          book: ''
        },
        
        {
         id: '견유학파', sentence : '',
         detail: '', 
         happiness: '', 
         period: '', 
         picture: '', 
         keyword: '', 
         representative: '', 
         enemy: '', 
         suggestion: '', 
         book: ''
        },

        {
         id: '에피쿠로스', sentence : '“행복은 감각이 만족된 고요한 상태”<br/> -에피쿠로스 학파 (Epicurean)-',
         detail: '아리스토텔레스와 스토아학파와는 반대로 에피쿠로스는 정치적 삶의 중요성을 부정합니다. 그는 기본적으로 철학을 행복을 성취하고 최대화하기 위한 인생의 예술로서 이해합니다. 에피쿠로스는 우리의 본성에 따라“선”을 실현하기 위한 이성을 우선 순위로 두는 아리스토텔레스와 스토아학파 대신에 좋음의 구체적인 척도로 쾌락(HEDONE)만을 받아들입니다. 에피쿠로스는 더 높고 영원한 질서(윤리적 또는 자연적 질서)를 넘어서 극단적인 감정과 경험을 피함으로써 즐거움을 달성하고 안정화시키는 데 주의를 기울입니다. 이를 에피쿠로스의 용어로 Ataraxia라고 부릅니다. 그는 행복한 삶을 위해 쾌적한 환경(예 : 정원, 친구들과 어울리기)에서 생활하고, 철학과 이성을 그 자체에 목적이 있다고 보지 않습니다 원자론적 존재론 (아리스토텔레스, 스토아학파와 반대)를 기반으로 그는 우리가 신과 죽음에 대한 두려움을 극복할 수 있고 고통을 피하기 위한 방법으로 냉정한 마음에 의해 지배되는 즐거움에 집중하자고 주장합니다. 에피쿠로스에 따르면 행복은 고통과 불쾌감을 견딜 수 있는 안정된 형태의 쾌락입니다.', 
         happiness: '에피쿠로스 학파에 속하는 당신은 행복의 척도로 이성이 아닌 감각을 중요시 여깁니다. 당신은 육체적 고통을 불행의 원인으로 여기어 육체를 만족시켜 행복하고자 합니다. 다만, 당신이 추구하는 쾌락은 흥분되고 극단적인 쾌락이 아닌, 고요한 마음의 평온입니다. 이를 위해 속세로부터 떠나 여유있는 삶을 추구합니다. 이러한 당신은 바쁜 삶 속에서도 한가함을 즐길 줄 알며 차분한 성품을 유지합니다. 기술의 발전으로 점점 빨라지는 현대 사회 속에서 요가나 명상을 통해 자신의 감정을 잘 돌보시길 바랍니다.', 
         period: '341-270 BC', 
         picture: '../assets/epic.png', 
         keyword: '평온, 감각, 웰빙, 쉼, Sleep nomix', 
         representative: '무신론, 원자론, 켄 윌버, 마릴리 먼로', 
         enemy: '아리스토텔레스주의자. 공동체 성향이 강한 그들과 세상과의 단절을 추구하는 에피쿠로스 학파는 안 맞을 수 있습니다', 
         suggestion: '요가, 명상, 정원 가꾸기, 고양기 키우기', 
         book: '에피쿠로스, 오유석 옮김, 쾌락(문학과 지성사, 1998). 앤소니 롱 이경직 역, 헬레니즘 철학(서광사, 2000). 루크레티우스, 강대진 옮김, 사물의 본성에 관하여(아카넷, 2012)'
         }
      ],
      personInfo:
        "This is a wider card with supporting text below as a natural lead-in to additional content.",
      keyword: "정치적, 공동체적",
      representative: "해당 유형의 대표 인물로는 다음과 같은 사람이 있습니다.",
      enemy: "당신과의 환장의 조합은 다음과 같은 유형의 사람입니다.",
      suggestion:
        "정치적, 공동체성을 중요시하는 당신은 이렇게 행동하시면 좋습니다.",
      book: "읽어 볼만한 책으로는 ........",
    };
  },
  props: {
    msg: String,
  },
  created: function(){
    this.lists = this.$route.params;
    this.typeUser = this.$store.state.data.typeUser;
    console.log("lists: ", this.lists); 
    console.log("typeUser: ", this.typeUser);     
    
    console.log('결과: ',this.philoArr.filter(el => el.id.includes(this.lists[1].id)))
    this.index = this.philoArr.findIndex(i => i.id == this.lists[1].id)
  },
  mounted: function() {    
    
    this.changeWidth();
    this.getData();
    
  },  
  methods: {   
    renew: function(){      
      
    },
    changeWidth: function() {
      setTimeout(() => {
        var rank1 = document.getElementById("rank1")
        var rank2 = document.getElementById("rank2")
        var rank3 = document.getElementById("rank3")
        var rank4 = document.getElementById("rank4")
        var rank5 = document.getElementById("rank5")
        rank1.style.setProperty('width', this.lists[1].value*2+'%')
        rank2.style.setProperty('width', this.lists[2].value*2+'%')
        rank3.style.setProperty('width', this.lists[3].value*2+'%')
        rank4.style.setProperty('width', this.lists[4].value*2+'%')
        rank5.style.setProperty('width', this.lists[5].value*2+'%')                              
        
      }, 1000);
    },

    getData: function() {
      setTimeout(() => {
        this.totalUser = this.$store.state.data.totalUser;
        this.typeUser = this.$store.state.data.typeUser;
        
        document.getElementsByClassName("types")[0].style.setProperty('height', ((this.typeUser / this.totalUser)*100).toFixed(0)*3 +'px')
        document.getElementsByClassName("total")[0].style.setProperty('height', '300px')        

        console.log("totalUser: ", this.totalUser);
        console.log("totalUser / typeUser: ", (( this.typeUser / this.totalUser)*100).toFixed(0));
        console.log("typeUser: ", this.typeUser)
        console.log("types height: ", document.getElementsByClassName("types")[0].style.height);
      }, 1000);
     
    },

    // renew: function(id){
    //   console.log('id: ', id);
    
    // },

  },
  
};
</script>

<style scoped>
.border {
  border: 1px solid black;
}

* {
  box-sizing: border-box;
}

#show-btn:hover {
  cursor: pointer;
  color: #8a8a5c;
}

.skills {
  text-align: right;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
}

/* .rank1 {width: 10%; background-color: #ff0000; transition: width 2s;}         */

.rank {
  /* animation-name: test;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards; */
  width:0;
  transition: width 2s;
}

.user {
  /* display: flex;
        flex-direction: column-reverse; */
  position: absolute;
  top: 50%;
  /* animation-name: total;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-direction: reverse;
  animation-fill-mode: forwards; */
}

.user-num {  
  top: 90%;
  right: 55%;
}

.type-num {  
  top: 90%;
  right: 0%;
}

.total {
  background-color: #000a3cc0;
  height: 0;
  transition: height 2s;
  left: 75%;
}
.types {
  left: 25%;
  height: 0;
  transition: height 2s;
  background-color: #ff0000;  
}

.rank1 {
  background-color: #ff0000;
}

.rank2 {
  background-color: #000a3cc0;
}

.rank3 {
  background-color: #00ff00;
}

.rank4 {
  background-color: #ff9900;
}

.rank5 {
  background-color: #808080;
}

/* @keyframes test {
  0% {
    width:0;
  }
  100% {
    width: var(--endValue);
  }
} */

/* @keyframes total {
  0% {
    height: 0%;
  }
  100% {
    height: 50%;
  }
} */

#mybook{
  width: 600px;
  height: 300px;
}

#mybook .turn-page{
  width: 300px;
  height: 300px;
  background-color: pink;
}

.wrapper {
  position: relative;
}

.phrase {
  margin-bottom: 20px;
}

.top, 
.bottom {
  height: 50%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: center; /* top, bottom div안에 있는 자식 div들을 세로 중앙정렬하기 위함(display: flex, align-items: center) */
  justify-content: space-around;
}

.graphInfo,
.person {
  height: auto;
  width: 30%;
  /* margin-right: 10px; */
}

.graphInfo{
  margin-left: 15%;
}

.container {
  width: 100%;
  margin-left: 10%;
}

.person{
  margin-left: 5%;
}

.temp{
  display: table-cell;
  vertical-align: middle;
  margin: 0 10%;
}

.buttonInfo,
.textInfo,
.userInfo {
  height: 500px;
  display: table-cell;
  vertical-align: middle;
  /* margin-left: 10px; */
}

.textInfo{
  width: 45vw;
}

.userInfo {
  position: relative;
  right: 5%;
}
.buttonInfo {
  width: 25vw;
  height: auto;
}

.person {
  width: 250px;
}

.person-img {
  width: 200px;
  height: auto;
}

.inner-text{
  font-weight: bold;
  font-size: 12px;
  color: white;
}

.typeBtn {
  border: none;
  outline: 0;
  background-color: transparent;
  float: left;
  margin-left: 5%;
}

.typeBtn:hover {
  cursor: pointer;
}

.sns:hover {
  cursor: pointer;
  font: bold;
}

.sns-image {
  width: 40px;
  height: 40px;
}

.bottom {
  margin-top: 20px;
}

.title {
  height: 50px;
}
</style>

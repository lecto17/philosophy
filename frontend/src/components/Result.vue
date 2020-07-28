<template>
  <div class="Result">
    <div class="wrapper">
      <div class="phrase">
        <h1 id="show-btn" @click="$bvModal.show('bv-modal-example')">
          “인간은 정치적 동물이다” <br />
          -아리스토텔레스주의 (Aristotelianism)- <br />
        </h1>
        <h6>↑ 더 알아보기</h6>
        <!-- <b-button >Open Modal</b-button> -->
        <b-modal id="bv-modal-example" hide-footer>
          <template v-slot:modal-title>
            <b>관련 <code>철학 내용</code>에 대하여 </b>
          </template>
          <div class="d-block text-center">
            <h3 style="font-size: 22px;">
              플라톤에게는 이성적 앎이 곧 행복인 것과는 다르게 아리스토텔레스는
              이성적인 앎에 기반한 실천적인 의지에 따른 행복을 주장합니다.<br /><br />
              아리스토텔레스의 용어로 인간의 본질은 이성적 동물(animal
              rationale)입니다. 그러므로 그는 기본적인 욕구가 우리를 이끄는
              것처럼 우리의 합리적인 영혼(Nous)에 따라 행동하는 것이 다른
              동물과는 구별되는 인간만의 특별한 행복이라 논증합니다.
              <br /><br />이러한 틀 안에서, 행복은 잘 수련된 본성에 따른 영혼의
              활동입니다. “우리의 반복적인 행동이 곧 우리다. 따라서 탁월함은
              습관이다.”
            </h3>
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
              <button id="show-btn" class="typeBtn">
                {{ list.id }}(더 보기)
              </button>
              <br /><br />
            </div>
          </div>                                    
        </div>
        <div class="temp border">                    
            <div class="textInfo">
                <h2>행복에 관한 글이 들어가는 곳입니다.</h2>
            </div>
        </div>                
      </div>            
          <div class="bottom">                
              <div class="person border">
                  <h3 class="title">활동시기</h3>
                  <div>
                      <b-card-group>
                          <b-card title="Aristoles">
                          <!-- <b-card title="Aristoles" img-src="../assets/aristoteles.png"  img-alt="Image" img-top style="width: 300px; height: auto;"> -->
                              <img class="person-img" src="../assets/aristoteles.png"><br/><br/>
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
                              <b-card-text>
                                  <code>
                                      {{ keyword }}
                                  </code>
                              </b-card-text>
                              </b-card-body>
                          </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                          <b-card-header header-tag="header" class="p-1" role="tab">
                              <b-button block v-b-toggle.accordion-2 variant="info">대표 인물</b-button>
                          </b-card-header>
                          <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                              <b-card-body>
                              <b-card-text>
                                  {{ representative }}
                                  <code>

                                  </code>
                              </b-card-text>
                              </b-card-body>
                          </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                          <b-card-header header-tag="header" class="p-1" role="tab">
                              <b-button block v-b-toggle.accordion-3 variant="info">환장의 조합</b-button>
                          </b-card-header>
                          <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                              <b-card-body>
                              <b-card-text>{{ enemy }}</b-card-text>
                              </b-card-body>
                          </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                          <b-card-header header-tag="header" class="p-1" role="tab">
                              <b-button block v-b-toggle.accordion-4 variant="info">추천하는 행동</b-button>
                          </b-card-header>
                          <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                              <b-card-body>
                              <b-card-text>{{ suggestion }}</b-card-text>
                              </b-card-body>
                          </b-collapse>
                      </b-card>

                      <b-card no-body class="mb-1">
                          <b-card-header header-tag="header" class="p-1" role="tab">
                              <b-button block v-b-toggle.accordion-5 variant="info">관련 서적</b-button>
                          </b-card-header>
                          <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                              <b-card-body>
                              <b-card-text>{{ book }}</b-card-text>
                              </b-card-body>
                          </b-collapse>
                      </b-card>


                      
                  </div>        
              </div>        
              <div class="userInfo border">
                  
                  <h3 class="title">참여자수<br/>&해당 유형수</h3>                                       
                  <div class="user total">94</div>
                  <br/><span class="user-num">참여자수</span>
                  <div class="user types">35</div>                                        
                  <br/><span class="type-num">해당 유형수</span>
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
                    <img class="sns-image" src="../assets/skype.jpg" alt="스카이프 페이지 아이콘">
                    <ShareNetwork class="sns"
                        network="Skype"
                        url="https://i.ytimg.com/vi/2_69hDmB634/maxresdefault.jpg"
                        title="Find your happiness besides on you, with philosophy"
                        description="Recognize oneself by five types of philosophy, just within 5 muinutes"
                        quote="The hot reload is so fast it\'s near instant. - Evan You"
                        hashtags="Happiness,Philosophy"
                    >
                        Share on Skype
                    </ShareNetwork>
                </div>                    
                <br/>
          </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Result",
  data() {
    return {
        testColor: 'red',
      styleObject: {
        width: 10,
      },
      lists: [],
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
  mounted: function() {
    //alert('mounted()')
    this.onload();
    // window.addEventListener('load', () => {
    //     alert('rank1', document.getElementById('rank1'))
    //     // console.log('rank1: ', document.getElementById('rank1'))
    // })
    //alert('mount finished');
    this.changeWidth();
  },
  created() {
    //alert('created()')
        // const rank = document.getElementsByClassName('rank');
        //     console.log(rank)
       
    
        //     rank[0].style.setProperty('--endValue', this.lists[0]+'%');
        //     rank[1].style.setProperty('--endValue', this.lists[1]+'%');
        //     rank[2].style.setProperty('--endValue', this.lists[2]+'%');
        //     rank[3].style.setProperty('--endValue', this.lists[3]+'%');
        //     rank[4].style.setProperty('--endValue', this.lists[4]+'%');
    setTimeout(() => {
      //  alert('setTimeout()')

      //alert('rank1의 width: ', document.getElementById('rank1').style.width)
    //   this.styleObject.width = 100;

    }, 1000);
    //alert('created finish()')
  },
  updated() {
    //alert('변화된 width값: ', document.getElementById('rank1').style.width)
  },
  methods: {
    onload: function() {
      //alert('onload');
      //vue.js 생성주기, 실행 순서 확인하기
      this.lists = this.$route.params;
      console.log("lists: ", this.lists);

      //setTimeout(this.changeWidth(), 2000);

      // document.getElementById('rank1').style.setProperty('width', '150px')
      // alert('rank1: ', document.querySelector('rank1'))
      //document.getElementsByClassName("rank1").style.width = 150;
      // alert('rank1의 width: ', document.getElementById('rank1').style.width)
      // console.log('width: ',document.getElementsByClassName("ari").style.width)
    },

    changeWidth: function() {
      //alert('rank1: ', document.getElementById('rank1').style.width)
      setTimeout(() => {
      var rank1 = document.getElementById("rank1")
      var rank2 = document.getElementById("rank2")
      var rank3 = document.getElementById("rank3")
      var rank4 = document.getElementById("rank4")
      var rank5 = document.getElementById("rank5")
      console.log('asaaa',this.lists[1].value)
      rank1.style.setProperty('width', this.lists[1].value*2+'%')
      rank2.style.setProperty('width', this.lists[2].value*2+'%')
      rank3.style.setProperty('width', this.lists[3].value*2+'%')
      rank4.style.setProperty('width', this.lists[4].value*2+'%')
      rank5.style.setProperty('width', this.lists[5].value*2+'%')
      
      console.log('rank',rank1)
      console.log('rank',rank2)
      console.log('rank',rank3)
      console.log('rank',rank4)
      console.log('rank',rank5)
}, 1000);
    },
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

.container {
  width: 100%;
  /* background-color: #ddd; */
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
  animation-name: total;
  animation-duration: 2s;
  animation-iteration-count: 1;
  /* animation-direction: reverse; */
  animation-fill-mode: forwards;
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
  background-color: #ff0000;
  left: 25%;
}
.types {
  left: 75%;
  background-color: #000a3cc0;
  border: 1px solid black;
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

@keyframes total {
  0% {
    height: 0%;
  }
  100% {
    height: 50%;
  }
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

.temp {
  display: table-cell;
  vertical-align: middle;
}

.graphInfo,
.person {
  height: auto;
  width: 30%;
  margin-right: 10px;
}

.buttonInfo,
.textInfo,
.userInfo {
  height: 500px;
  display: table-cell;
  vertical-align: middle;
  margin-left: 10px;
}
.userInfo {
  position: relative;
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

.typeBtn {
  border: none;
  outline: 0;
  background-color: transparent;
}

.typeBtn:hover {
  cursor: pointer;
}

/* .typesBox{        
        position: relative;
        display: flex;
        flex-direction: column-reverse;
    } */

.snsSection {
  /* width: 200px;
        height :auto;
        display: flex; */
}

.sns:hover {
  cursor: pointer;
  font: bold;
}

.sns-image {
  width: 40px;
  height: 40px;
}

/* .accordion {
        background-color: #eee;
        color: #444;
        cursor: pointer;
        padding: 18px;
        width: 90%;
        border: none;
        text-align: left;
        outline: none;
        font-size: 15px;
        transition: 0.4s;
        margin: 10px;
    }

    .active, .accordion:hover {
        background-color: #ccc; 
    }

    .panel {
        padding: 0 18px;
        display: none;
        background-color: white;
        overflow: hidden;
    } */

/* .person, .userInfo{
        display: flex;
        justify-content: center;
        align-items: center;
    } */

.bottom {
  margin-top: 20px;
}

.title {
  height: 50px;
}
</style>

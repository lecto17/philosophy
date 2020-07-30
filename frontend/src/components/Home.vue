<template>
  <div>
    <div class="section section1">
      <div class="main">
        <div class="text-field1">
          <div class="floating">
            <div class="title">
              행복 성향 테스트!
              <div>“철학자가 제시하는 나에게 맞는 행복은?”<br /></div>
            </div>
            <div class="subtitle">
              “행복이란 무엇인가?” <br />
              누구나 행복하려고 살아가지만,<br />
              정작 행복이 무엇인지 모를 때가 많습니다. <br />
              몇 가지 간단한 테스트를 통해 <br />
              나도 몰랐던 나에게 맞는 행복을 찾아보아요!<br />
              Philosophical Happiness Type Test
            </div>
            <div class="price">
              <router-link class="price_button" to="/test" tag="button">
                검사시작
              </router-link>
            </div>
          </div>
        </div>
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4500"
          indicators
          background="#ababab"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <!-- Text slides with image -->
          <b-carousel-slide class="carousel-slide">
            <template v-slot:img>
              <img
                class="slide-img"
                src="..\assets\slide1.jpg"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>

          <!-- Slides with custom text -->

          <!-- Slides with image only -->
          <b-carousel-slide class="carousel-slide">
            <template v-slot:img>
              <img
                class="slide-img"
                src="..\assets\slide2.jpg"
                alt="image slot"
              /> </template
          ></b-carousel-slide>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide class="carousel-slide">
            <template v-slot:img>
              <img
                class="slide-img"
                src="..\assets\slide3.jpg"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>

          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
          <b-carousel-slide class="carousel-slide">
            <template v-slot:img>
              <img
                class="slide-img"
                src="..\assets\slide4.jpg"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>
          <b-carousel-slide class="carousel-slide">
            <template v-slot:img>
              <img
                class="slide-img"
                src="..\assets\slide5.jpg"
                alt="image slot"
              />
            </template>
          </b-carousel-slide>
        </b-carousel>

        <!-- <p class="mt-4">
          Slide #: {{ slide }}<br>
          Sliding: {{ sliding }}
        </p> -->
      </div>
    </div>
    <div class="section section2">
      <div class="mainBottom">
        <div class="bottom">
          <div class="textInfo">
            <p v-html="textInfo"></p>
          </div>
          <div class="graphInfo">
            <div class="notice">
              <div>
                총 참여자 수: <strong>{{totalUser}}명</strong>
              </div>
            </div>
            <div class="graph">
              <span class="user aris">아리스토<br/>텔레스</span>
              <span class="user stoic">스토아학파</span>
              <span class="user epic">에피쿠로스</span>
              <span class="user skep">회의주의</span>
              <span class="user cyr">신플라톤주의</span>
              <!-- <div class="user aris">aris</div>
            <div class="user stoic">stoic</div>
            <div class="user epic">epic</div>
            <div class="user skep">skep</div>
            <div class="user cyr">cyr</div> -->
              <div class="gridline">
                <svg class="line">
                  <line x1="0" y1="90%" x2="100%" y2="90%" stroke="#ddd" />
                </svg>
                <svg class="line">
                  <line x1="0" y1="80%" x2="100%" y2="80%" stroke="#ddd" />
                </svg>
                <svg class="line">
                  <line x1="0" y1="70%" x2="100%" y2="70%" stroke="#ddd" />
                </svg>
                <svg class="line">
                  <line x1="0" y1="60%" x2="100%" y2="60%" stroke="#ddd" />
                </svg>
                <svg class="line">
                  <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#ddd" />
                </svg>
                <svg class="line">
                  <line x1="0" y1="40%" x2="100%" y2="40%" stroke="#ddd" />
                </svg>
                <svg class="line">
                  <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#ddd" />
                </svg>
                <svg class="line">
                  <line x1="0" y1="20%" x2="100%" y2="20%" stroke="#ddd" />
                </svg>
                <svg class="line">
                  <line x1="0" y1="10%" x2="100%" y2="10%" stroke="#ddd" />
                </svg>
              </div>
              <div class="gridgauge">
                <div class="gauge">
                  50%
                </div>
                <div class="gauge">
                  45%
                </div>
                <div class="gauge">
                  40%
                </div>
                <div class="gauge">
                  35%
                </div>
                <div class="gauge">
                  30%
                </div>
                <div class="gauge">
                  25%
                </div>
                <div class="gauge">
                  20%
                </div>
                <div class="gauge">
                  15%
                </div>
                <div class="gauge">
                  10%
                </div>
                <div class="gauge">
                  5%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import $ from "jquery";
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      types: {
        aris: 0,
        stoic: 0,
        epic: 0,
        skep: 0,
        cyr: 0,
      },
      totalUser: 0,
      userArr: [],
      slide: 0,
      sliding: null,
      textInfo:
        "다섯유형의 철학자들은 제 각각 다른 행복을 알려줍니다. <br><br>이 사람들은 외부의 환경으로부터 자기 마음을 지키기 위해 행복을 탐구한 사람들입니다. <br><br>오늘날 세계화 시대를 살아가는 우리는 팬데믹, 경제대공황 같이 우리가 감당하기 힘든 외부의 영향력 속에서 살아갑니다. <br><br>이에 따라 불안, 우울, 외로움, 두려움과 같은 정신적 어려움을 현대인들은 호소합니다.<br><br>그러나 이런 환경 속에서도 우리는 우리의 <span style='color:red; font-weight: bold'>마음</span>을 지킬 수 있습니다. <br><br>이들의 통찰력을 바탕으로 어떤 상황 속에서도 우리의 마음을 지켜 나가봅시다.",
      scrollEvent: false,
      count: 0,
    };
  },
  name: "Home",
  props: {
    msg: String,
  },
  created: function(){
    console.log('crete')
    this.$store.dispatch('getUserData');
    console.log('finsih');
  },
  mounted: function() {
    var win_h = $(window).height();
    // this.getUserData();

    $(".section").each(function(index) {
      $(this).attr("data-index", win_h * index);
    });

    $(".section").on("mousewheel", function(e) {
      var sectionPos = parseInt($(this).attr("data-index"));
      if (e.originalEvent.wheelDelta >= 0) {
        $("html,body")
          .stop()
          .animate({ scrollTop: sectionPos - win_h });
        return false;
      } else if (e.originalEvent.wheelDelta < 0) {
        $("html,body")
          .stop()
          .animate({ scrollTop: sectionPos + win_h });
        return false;
      }
    });    
    this.setData();
    this.changeWidth();
  },
  methods: {
    ...mapMutations(["getUserData"]),
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    changeWidth: function() {
      setTimeout(() => {
        var aris = document.getElementsByClassName("aris");
        var stoic = document.getElementsByClassName("stoic");
        var epic = document.getElementsByClassName("epic");
        var skep = document.getElementsByClassName("skep");
        var cyr = document.getElementsByClassName("cyr");

        aris[0].style.setProperty("height", this.types.aris + "%");
        stoic[0].style.setProperty("height", this.types.stoic + "%");
        epic[0].style.setProperty("height", this.types.epic + "%");
        skep[0].style.setProperty("height", this.types.skep + "%");
        cyr[0].style.setProperty("height", this.types.cyr + "%");
        console.log(aris[0].style.height);
      }, 1000);
    },
    setData: function(){
      setTimeout(() => {
        this.userArr = this.$store.state.data.userData;
        this.totalUser = this.$store.state.data.totalUser ;
    
        for(let i=0; i < this.userArr.length; i++){
          switch(this.userArr[i].types){
            case 'aris':
              this.types.aris = (this.userArr[i].result / this.totalUser * 100).toFixed(0); break;
            case 'skep':
              this.types.skep = (this.userArr[i].result / this.totalUser * 100).toFixed(0); break;
            case 'epic':
              this.types.epic = (this.userArr[i].result / this.totalUser * 100).toFixed(0); break;
            case 'cyr':
              this.types.cyr = (this.userArr[i].result / this.totalUser * 100).toFixed(0); break;
            case 'stoic':
              this.types.stoic = (this.userArr[i].result / this.totalUser * 100).toFixed(0); break;
          }
        }
      }, 1000);
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.section1 {
  height: 100%;
}
.section2 {
  height: 100%;
}
.main {
  position: relative;
  width: 100%;
  /* width: 850px; */
}
.text-field1 {
  margin: 0;
  padding: 0;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  width: 50vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
}

#carousel-1 {
}
.carousel-slide {
  height: 100vh;
}
.slide-img {
  width: 100%;
  height: 100%;
}
.floating {
  margin-top: 15vh;
  position: absolute;
  left: 50%;
  width: 100%;
  transform: translate(-50%);
  z-index: 100;
}

.title {
  color: #ddd;
  font-size: 5vw;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-family: "Do Hyeon", sans-serif;
  /* z-index: 100; */
}
.title div {
  color: #fff;
  font-size: 1.5vw;
  margin-bottom: 5%;
  font-weight: 100;
}

.subtitle {
  margin: 10vh 0;
  color: #fff;
  text-align: center;
  font-size: 1.2vw;
  font-weight: bold;
  text-shadow: none;
}

.price {
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  justify-content: center;
}

.price_button {
  color: #000;
  font-size: 1.2vw;
  background: rgb(255, 255, 255);
  border: none;
  z-index: 200;
  background-image: none;
  width: 15vh;
  height: 5vh;
  min-width: 15vw;
  min-height: 5vw;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

.price_button:hover {
  background-color: #2ee59d;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-7px);
}

.mainBottom {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

.bottom {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  justify-content: center;
}

.graphInfo,
.textInfo {
  margin: 50px;
  width: 50%;
  text-align: center;
}

.textInfo {
  /* 자동개행(단어 단위) */
  margin-top: 8vw;
  display: flex;
  justify-content: center;
  word-break: keep-all;
  font-size: 23px;
  text-align: justify;
  font-family:'Do Hyeon', sans-serif;
}

.graphInfo {
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
  padding-top: 2px;
  position: relative;
}

.notice{
  position: absolute;
  top: 10%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transform: translate(-50%);
  width: 15vw;
  height: 10vh;
  border: 1px solid black;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5);
  z-index: 10;
  font-family:'Do Hyeon', sans-serif;
}

.graph {
  position: relative;
  height: 100%;
}

.gridline {
  height: 100%;
  width: 100%;
}

.line {
  position: absolute;
  left: 0px;
  height: 100%;
  width: 100%;
  z-index: 1;
}
.gridgauge {
  position: absolute;
  top: 6%;
  left: 0%;
  height: 100%;
  font-size: 18px;
}
.gauge {
  height: 10%;
}

.user {
  position: absolute;
  display: inline-block;
  width: 12%;
  margin: 0 3%;
  bottom: 0;
  background: skyblue;
  min-height: 7%;
  height: 5%;  
  border-radius: 13px 13px 0px 0px;
  font-weight: bold;
  font-family: "Do Hyeon", sans-serif;
  transition: height 2s;
  z-index: 300;
}
.aris {
  left: 10%;
  background-color: rgb(252, 86, 86);
}
.stoic {
  left: 27.5%;
  background-color: rgb(255, 120, 38);
}
.epic {
  left: 45%;  
  /* transform: translate(-50%);딱 정중앙에 맞추기 위해 */
  background-color: rgb(255, 195, 44);
}
.skep {
  left: 62.5%;
  background-color: rgb(43, 185, 60);
}
.cyr {
  left: 80%;
  background-color: rgb(74, 125, 213);
}

.footer {
  width: 100%;
  height: 200px;
  background: #333;
}

@media all and (max-width: 650px) {
  .floating {
    margin-top: 12vh;
  }
  .carousel-slide {
    height: 50vh;
  }
  .title {
    font-size: 30px;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-family: "Do Hyeon", sans-serif;
    /* z-index: 100; */
  }
  .title div {
    color: #fff;
    font-size: 13px;
  }

  .subtitle {
    margin: 2vh 0;
    color: #fff;
    text-align: center;
    font-size: 9px;
  }
  .mainBottom {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .bottom {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: space-around;
    align-content: center;
    align-items: center;
  }
  .graphInfo,
  .textInfo {
    margin: 0 15px;
    width: 100%;
  }
  .graphInfo {
    height: 50vh;
    width: 80%;
  }
  .gridgauge {
    position: absolute;
    left: 0%;
    height: 100%;
    font-size: 10px;
  }
  .textInfo {
    display: flex;
    font-size: 11px;
    text-align: justify;
    width: 80%;
  }

}
</style>

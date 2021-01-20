<template>
  <div>
    <div class="section section1">
      <div class="main">
        <div class="text-field1">
          <div class="floating">
            <div class="title">
              신앙 유향 테스트!
              <div>“내 안에 있던 나의 신앙 유형은?”<br /></div>
            </div>
            <div class="subtitle">
              “나는 하나님 앞에 어떠한 사람일까요?” <br /><br />
              누구나 하나님 앞에 바른 모습으로 나아가려 하지만,<br />
              정작 어떠한 모습으로 나아가고 있는지 모를 때가 많습니다. <br /><br />
              몇 가지 간단한 테스트를 통해 <br />
              내 안에 있던 신앙유형을 확인해보세요!<br />              
            </div>
            <div class="price">
              <router-link class="price_button" to="/test" tag="button">
                검사시작
              </router-link>
            </div>
          </div>
        </div>
        <!-- <Carousel class="carousel" autoplay="true" autoplayTimeout="4500" loop="true" adjustableHeight="false" perPage="1" paginationPosition="bottom-overlay" paginationActiveColor="white" paginationColor="#777">
          <Slide>
            <template>
            <img
              class="slide-img"
              src="../assets/slide1.jpg"
              alt="image slot"
            />
            </template>
          </Slide>
          <Slide>
            <img
              class="slide-img"
              src="../assets/slide2.jpg"
              alt="image slot"
            />
          </Slide>
          <Slide>
            <img
              class="slide-img"
              src="../assets/slide3.jpg"
              alt="image slot"
            />
          </Slide>
          <Slide>
            <img
              class="slide-img"
              src="../assets/slide4.jpg"
              alt="image slot"
            />
          </Slide>
          <Slide>
            <img
              class="slide-img"
              src="../assets/slide5.jpg"
              alt="image slot"
            />
          </Slide>
        </Carousel> -->
        <div class="slide-container">
          <div class="slide-box">
            <img class="slide-img" src="../assets/slide1.jpg" alt="image slot"/>
            <img class="slide-img" src="../assets/slide2.jpg" alt="image slot"/>
            <img class="slide-img" src="../assets/slide3.jpg" alt="image slot"/>
            <img class="slide-img" src="../assets/slide4.jpg" alt="image slot"/>
            <img class="slide-img" src="../assets/slide5.jpg" alt="image slot"/>
          </div>
        </div>

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
          <Graph/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import { mapMutations } from "vuex";
import Graph from './graph.vue';
export default {
  components: {
    Graph,    
  },
  data() {
    return {
      
      slide: 0,
      sliding: null,
      textInfo:
        "다섯 유형의 신앙 선배들은 각각 다른 모습으로 하나님 앞에 나아갑니다. <br><br>이 분들은 외부의 위협들 속에서도 자신의 신앙을 지키기 위해 자신의 정체성, 사명을 기억하며 살아갔습니다. <br><br>오늘날 세계화 시대를 살아가는 우리 또한 팬데믹, 경제대공황 같이 우리가 감당하기 힘든 외부의 영향 속에서 살아갑니다. <br><br>그러나 이러한 환경 속에서도 우리는 우리의 마음을 지킬 수 있습니다.<br><br>내 안에 어떤 신앙 유형의 모습이 잠재되어 있는지 테스트를 통해 살펴보세요!",
      scrollEvent: false,
      count: 0,
    };
  },
  name: "Home",
  props: {
    msg: String,
  },
  created: function() {
    //this.$store.dispatch("getUserData");
  },
  mounted: function() {    
    this.slideEffect();
  },
  methods: {
    //...mapMutations(["getUserData"]),
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
    
    slideEffect: function() {
      const slideBox = document.getElementsByClassName('slide-box');
      const slideLength = slideBox[0].childElementCount
      let count = 1
      setInterval(() => {
        if(count===slideLength){count=0}              
        slideBox[0].style.setProperty('left', `${count*(-100)}%`);
        count += 1;
      },3500);
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
.slide-container{overflow: hidden; width: 100%;}
.slide-box{position: relative; left: 0%; display: flex; width: 100%; transition: .8s }
.slide-img{width: 100%; height: 95vh;}
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
  font-family: "Do Hyeon", sans-serif;
}

.footer {
  width: 100%;
  height: 200px;
  background: #333;
}

@media all and (max-width: 550px) {
  .section1 {
  /* height: 400px;
  max-height: 400px;
  min-height: 400px; */
}
.section2 {
  height: 50%;
}
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
    font-size: 13px;
    text-align: justify;
    width: 80%;
  }
 
  .user {
    font-size: 10px;
  }
  .graphInfo {
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.5);
    padding-top: 2px;
    position: relative;
  }
  .price_button {
    font-size: 15px;
  }
}
</style>

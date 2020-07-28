<template>
<div>
    <div class="section">
      <div class="main">      
        <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"              
          indicators
          background="#ababab"
          img-width="1024"
          img-height="480"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
          <div class="floating">
            <div class="title">
              행복 유형 테스트!
            </div> <br/><br/><br/><br/><br/>
            <div class="subtitle">
              “철학자가 제시하는 나에게 맞는 행복은?”<br/><br/>
              “행복이란 무엇인가?” <br/><br/>누구나 행복하려고 살아가지만, 
              정작 행복이 무엇인지 모를 때가 많습니다.
              <br/><br/>몇 가지 간단한 테스트를 통해 나도 몰랐던 나에게 맞는 행복을 찾아보아요!
              <br/><br/>Philosophical Happiness Type Test
            </div>
            <div class="price">
                <button class="price_button">
                    검사시작
                </button>
            </div>
          </div>
          <!-- Text slides with image -->
          <b-carousel-slide
            caption="- 아리스토텔레스 -"
            text="행복은 정치 참여하는 과정 속에서 이루어진다."
            img-src="https://picsum.photos/1024/480/?image=52"
          ></b-carousel-slide>

          <!-- Slides with custom text -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
            <h1>에피쿠로스</h1>
          </b-carousel-slide>

          <!-- Slides with image only -->
          <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

          <!-- Slides with img slot -->
          <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
          <b-carousel-slide>
            <template v-slot:img>
              <img
                class="d-block img-fluid w-100"
                width="1024"
                height="480"
                src="https://picsum.photos/1024/480/?image=55"
                alt="image slot"
              >
            </template>
          </b-carousel-slide>

          <!-- Slide with blank fluid image to maintain slide aspect ratio -->
          <b-carousel-slide caption="이미지 삽입" img-blank img-alt="Blank image">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt
              a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum.
            </p>
          </b-carousel-slide>

        </b-carousel>

        <!-- <p class="mt-4">
          Slide #: {{ slide }}<br>
          Sliding: {{ sliding }}
        </p> -->
      </div>
    </div>
    <br/><br/>       

    <div class="section">
      <div class="mainBottom">

        <div class="graphInfo">
          <h4 class="title">참여자수<br/>&해당 유형수</h4>
          <div class="user total">94</div>
          <br/><span class="user-num">참여자수</span>
          <div class="user types">35</div>                                        
          <br/><span class="type-num">해당 유형수</span>
        </div>

        <div class="profit">                           
          <div class="textInfo">
            <span v-html="textInfo"></span>
          </div>        
        </div>

      </div>
    </div>
        
</div>

</template>

<script>
import $ from 'jquery';
export default {
  data() {
      return {
        slide: 0,
        sliding: null,
        textInfo: "5유형의 철학자들은 제 각각 다른 행복을 알려줍니다.<br/> 이 사람들은 외부의 환경으로부터 자기 마음을 지키기 위해<br/> 행복을 탐구한 사람들입니다. 오늘날 세계화 시대를<br/> 살아가는 우리는 팬데믹, 경제대공황 같이<br/>우리가 감당하기 힘든 외부의 영향력 속에서 살아갑니다. <br/>그러나 이런 환경 속에서도 우리는 우리의 <code>마음</code>을 지킬 수 있습니다.<br/>이들의 통찰력을 바탕으로 어떤 상황 속에서도 우리의 마음을 지켜 나가봅시다.",
        scrollEvent : false,
        count : 0,       
      }
  },
  name: 'Main',
  props: {
    msg: String
  },
  mounted: function(){
    var win_h = $(window).height();

    $('.section').each(function(index){    
        $(this).attr("data-index",win_h * index);    
    });
    
    $('.section').on("mousewheel",function(e){    
        var sectionPos = parseInt($(this).attr("data-index"));    
        if(e.originalEvent.wheelDelta >= 0) {  
          $("html,body").stop().animate({scrollTop:sectionPos - win_h});   
          console.log('if문')
          console.log('scrollTop: ', sectionPos-win_h) 
          return false;    
        }else if (e.originalEvent.wheelDelta < 0) {              
          $("html,body").stop().animate({scrollTop:sectionPos + win_h});    
          console.log('else if문')
          console.log('scrollTop: ', sectionPos + win_h) 
          return false;     
        }    
    });
  },
  methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
}
</script>


<style scoped >
  body {
    margin: 0;
  }

  .w-100{
    height: 650px;
  }

  .main{
    position: relative;
    /* width: 850px; */
  }

  .floating{
    position: absolute;
    top: 5%;
    left: 30%; 
    z-index: 100;
  }

  .title {        
    text-align: center;
    font-size: 60px;
    font-weight: bold;
    color: black;
    /* z-index: 100; */
  }

  .subtitle {    
      text-align: center;
      font-size: 1.25rem;
      font-weight: bold;
      text-shadow: none;
  }  

  .main {
      margin: 0 auto;
      margin-top: 60px;
  }

  .price {
      display: flex;
      justify-content:center;
      padding: 18px;
  }


  .price_button {
      padding: .5rem 1rem;
      font-size: 1.25rem;
      color: #000;
      background-color: #fff;
      border: none;
      background-image: none;
      width: 150px;
      height: 70px;
      border: 1px solid black;
      border-radius: 45px;
      box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease 0s;
      cursor: pointer;
      outline: none;
  }

  button:hover {
      background-color: #2EE59D;
      box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
      color: #fff;
      transform: translateY(-7px);
  }



  @media screen and (max-width: 768px) {


      .main {
          flex-direction: column;
      }
  
      .navbar {
              flex-direction: column;
      }
      
      .navbar {
              flex-direction: column;
      }
  }

  .mainBottom{
    margin-top: 40px;
    margin-bottom: 40px;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center; 
    justify-content: space-around ;   
  }

  .graphInfo, .textInfo{
    width: 40vw;
    height: 400px;
    display: table-cell;
    vertical-align: middle;
    border: 1px solid black;
    font-size: 16px;
  }

  .graphInfo{
    position: relative;
  }
  
  .title{
    height: 50px;
  }

  .user{     
      position:absolute;
      top: 50%;
      animation-name: total;
      animation-duration:2s;
      animation-iteration-count: 1;
      /* animation-direction: reverse; */
      animation-fill-mode: forwards;
  }

  .user-num{
      /* position: absolute; */
      top: 90%;
      right: 55%;
  }

  .type-num{
      /* position: absolute; */
      top: 90%;
      right: 0%;
  }

  .total{
      background-color:#ff0000;    
      left:25%;    
  }
  .types{        
      left:75%;
      background-color: #000a3cc0;
      border: 1px solid black;
  }

  .profit{
    display: table-cell;
    vertical-align: middle;
  }    

  .user{
        /* display: flex;
        flex-direction: column-reverse; */
        position:absolute;
        top: 50%;
        animation-name: total;
        animation-duration:2s;
        animation-iteration-count: 1;
        /* animation-direction: reverse; */
        animation-fill-mode: forwards;
  }

  .total{
      background-color:#ff0000;    
      left:25%;    
  }
  
  .types{        
      left:75%;
      background-color: #000a3cc0;
      border: 1px solid black;
  }

  body {
      margin: 0;
  }

  .nav {
      height: 70px;
      border-bottom: 1px solid black;
      display: flex;
      align-items: center;
      padding: 0 15px; 
  }

  .navbar{
      display: flex;
      list-style: none;
      margin: auto;
      line-height: 1em;
      font-size: 28px;
  }


  .navbar li {
      padding: 5px 15px;
  }

  .navbar li:hover {
      background-color: #d49466;
      border-radius: 4px;
  }


</style>



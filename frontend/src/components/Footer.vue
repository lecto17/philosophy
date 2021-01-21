<template>
  <div>
    <footer class="footer">
      <div class="container">
        <div class="columns">
          <div class="column">
            <strong><p>SNS 공유하기</p></strong>
          </div>
          <div class="sns-wrap">
            <div class="snsSection">
              <ShareNetwork
                class="sns"
                network="facebook"
                url="https://happiness-every-where.site"
                title="Find your happiness besides on you, with philosophy"
                description="Recognize oneself by five types of philosophy, just within 5 muinutes"
                quote='"마음의 병에 대해서는 철학이 치료약을 제공한다. 이점에서 철학은 마음의 치료제라고 할 수 있다. "- 에피쿠로스-'
                hashtags="HappinessPhilosophy"
              >
                <img
                  class="sns-image"
                  src="../assets/facebook.png"
                  alt="페이스북 아이콘"
                />

              </ShareNetwork>
            </div>
            <br />

            <!-- <img class="sns-image" src="https://png.pngtree.com/element_our/md/20180626/md_5b32227ca3eb9.jpg" alt="트위터 페이지 아이콘"> -->
            <div class="snsSection">
              <ShareNetwork
                class="sns"
                network="Twitter"
                url="https://happiness-every-where.site"
                title="Find your happiness besides on you, with philosophy"
                description="Recognize oneself by five types of philosophy, just within 5 muinutes"
                quote="마음의 병에 대해서는 철학이 치료약을 제공한다. 이점에서 철학은 마음의 치료제라고 할 수 있다. - 에피쿠로스"
                hashtags="Happiness,Philosophy"
              >
                <img
                  class="sns-image"
                  src="../assets/twitter.png"
                  alt="트위터 아이콘"
                />
              </ShareNetwork>
            </div>
            <br />

            <div class="snsSection">
              <ShareNetwork
                class="sns"
                network="Line"
                url="https://i.ytimg.com/vi/2_69hDmB634/maxresdefault.jpg"
                title="Find your happiness besides on you, with philosophy"
                description="Recognize oneself by five types of philosophy, just within 5 muinutes"
                quote="마음의 병에 대해서는 철학이 치료약을 제공한다. 이점에서 철학은 마음의 치료제라고 할 수 있다. - 에피쿠로스"
                hashtags="Happiness,Philosophy"
              >
                <img
                  class="sns-image"
                  src="../assets/line.png"
                  alt="라인 아이콘"
                />
              </ShareNetwork>
            </div>
            <div class="snsSection kakaobox" @click="kakaoShare">
              <img
                class="sns-image"
                src="//developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_small.png"
                width="41"
              />
            </div>
            <div class="snsSection kakaobox" @click="instaShare">
              <img
                class="sns-image"
                src="../assets/instagram.png"
                width="41"
              />
            </div>                        
          </div>
          <div class="contact">
            {{ contact }}<br />
            {{ notice }}
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>


export default {
  components: {
    
  },
  data() {
    return {
      contact: "Contact here : hjyun0913@gmail.com",
      notice: "ⓒ 2020 All rights resvered by Grace Community Church",
      title: "신앙 유형 테스트",
      //title: "행복 성향 테스트",
      //description: "“철학자가 제시하는 나에게 맞는 행복은?”",
      description: "“내 안에 있던 나의 신앙 유형은?”",
      username: "mlmtorMan@gmail.com",
      password: "crewcrew1!",
      url: "https://happiness-every-where.site",
    };
  },
  methods: {
    instaShare(){
      const Instagram = require('instagram-web-api')
      
      
      const client = new Instagram( 'mlmtorMan@gmail.com', 'crewcrew1!' )
      
      client
        .login()
        .then(() => {
          client
            .getProfile()
            .then(console.log)
        })
    },
    kakaoShare() {
      window.Kakao.init("ff2cbd3658087abbabb535b7e2f33344");
      window.Kakao.Link.sendDefault({
        objectType: "feed",
        content: {
          title: this.title,
          description: this.description,
          imageUrl: "../assets/logo (1).jpg",
          imageWidth: 500,
          imageHeight: 200,
          link: {
            mobileWebUrl: this.url,
            webUrl: this.url,
          },
        },
        // buttons: [
        //   {
        //     title: "웹으로 이동",
        //     link: {
        //       mobileWebUrl: this.url,
        //        webUrl: this.url
        //     },
        //   },
        //   {
        //     title: "앱으로 이동",
        //     link: {
        //       mobileWebUrl: this.url,
        //        webUrl: this.url
        //     },
        //   },
        // ],
      });
    },
  },
};
</script>

<style scoped>
footer {
  background-color: lightgray;
  color: black;
  width: 100%;
  height: 200px;
}

/* .container{
        display: table-cell;
        vertical-align: middle;
    } */

p {
  padding-top: 15px;
  margin: 0;
}

.sns-wrap {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* left: 30% */
  /* justify-content: space-around; */
}

.snsSection {
  margin: 0 10px;
}

.sns:hover {
  cursor: pointer;
  color: #777;
}

.sns-image {
  width: 40px;
  height: 40px;
}

.contact {
  color: #4d4d33;
  /* color: #c2c2a3; */
  font-weight: bold;
}
.kakaobox:hover {
  cursor: pointer;
  color: #777;
}
.kakaobox > div {
  display: inline-block;
  margin: 5px;
}
@media all and (max-width: 650px) {
  .snsSection {
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 10px;
  }
  footer {
    height: 170px;
  }
  .contact {
    font-size: 13px;
  }
}
</style>

<template>
  <div class="graphInfo">
    <div class="notice">
      <div>총 참여자 수: <strong>{{ totalUser }}명</strong></div>
    </div>
    <div class="graph">
      <span class="user aris">아리스토<br />텔레스</span>
      <span class="user stoic">스토아학파</span>
      <span class="user epic">에피쿠로스</span>
      <span class="user skep">회의주의</span>
      <span class="user cyr">신플라톤주의</span>
      <div class="gridline">
        <svg class="line"><line x1="0" y1="90%" x2="100%" y2="90%" stroke="#ddd" /></svg>
        <svg class="line"><line x1="0" y1="80%" x2="100%" y2="80%" stroke="#ddd" /></svg>
        <svg class="line"><line x1="0" y1="70%" x2="100%" y2="70%" stroke="#ddd" /></svg>
        <svg class="line"><line x1="0" y1="60%" x2="100%" y2="60%" stroke="#ddd" /></svg>
        <svg class="line"><line x1="0" y1="50%" x2="100%" y2="50%" stroke="#ddd" /></svg>
        <svg class="line"><line x1="0" y1="40%" x2="100%" y2="40%" stroke="#ddd" /></svg>
        <svg class="line"><line x1="0" y1="30%" x2="100%" y2="30%" stroke="#ddd" /></svg>
        <svg class="line"><line x1="0" y1="20%" x2="100%" y2="20%" stroke="#ddd" /></svg>
        <svg class="line"><line x1="0" y1="10%" x2="100%" y2="10%" stroke="#ddd" /></svg>
      </div>
      <div class="gridgauge">
        <div class="gauge">50%</div>
        <div class="gauge">45%</div>
        <div class="gauge">40%</div>
        <div class="gauge">35%</div>
        <div class="gauge">30%</div>
        <div class="gauge">25%</div>
        <div class="gauge">20%</div>
        <div class="gauge">15%</div>
        <div class="gauge">10%</div>
        <div class="gauge">5%</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Graph",
  components: {},
  data() {
    return {
      types: { aris: 0, stoic: 0, epic: 0, skep: 0, cyr: 0},
      totalUser: 0,
      userArr: [],
    };
  },
  mounted: function() {
      this.changeWidth();
      this.setData();
  },
  methods:{
      changeWidth: function() {
      setTimeout(() => {
        let aris = document.getElementsByClassName("aris");
        let stoic = document.getElementsByClassName("stoic");
        let epic = document.getElementsByClassName("epic");
        let skep = document.getElementsByClassName("skep");
        let cyr = document.getElementsByClassName("cyr");
        aris[0].style.setProperty("height", this.types.aris + "%");
        stoic[0].style.setProperty("height", this.types.stoic + "%");
        epic[0].style.setProperty("height", this.types.epic + "%");
        skep[0].style.setProperty("height", this.types.skep + "%");
        cyr[0].style.setProperty("height", this.types.cyr + "%");
      }, 1000);
    },
    setData: function() {
      setTimeout(() => {
        this.userArr = this.$store.state.data.userData;
        this.totalUser = this.$store.state.data.totalUser;
        for (let i = 0; i < this.userArr.length; i++) {
          switch (this.userArr[i].types) {
            case "aris": this.types.aris = ((this.userArr[i].result / this.totalUser) * 100).toFixed(0); break;
            case "skep": this.types.skep = ((this.userArr[i].result / this.totalUser) * 100).toFixed(0); break;
            case "epic": this.types.epic = ((this.userArr[i].result / this.totalUser) * 100).toFixed(0); break;
            case "cyr": this.types.cyr = ((this.userArr[i].result / this.totalUser) * 100).toFixed(0); break;
            case "stoic": this.types.stoic = ((this.userArr[i].result / this.totalUser) * 100).toFixed(0); break;
          }
        }
      }, 1000);
    },
  }
};
</script>

<style>
.graphInfo{margin: 50px; width: 50%; text-align: center; box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5); padding-top: 2px; position: relative;}
.notice { position: absolute; top: 10%; left: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; transform: translate(-50%); width: 15vw; height: 10vh; border: 1px solid black; box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.5); z-index: 10; font-family: "Do Hyeon", sans-serif;}
.graph { position: relative; height: 100%;}
.gridline { height: 100%; width: 100%;}
.line { position: absolute; left: 0px; height: 100%; width: 100%; z-index: 1;}
.gridgauge { position: absolute; top: 6%; left: 0%; height: 100%; font-size: 18px;}
.gauge { height: 10%;}
.aris { left: 10%; background-color: rgb(252, 86, 86);}
.stoic { left: 27.5%; background-color: rgb(255, 120, 38);}
.epic { left: 45%; /* transform: translate(-50%);딱 정중앙에 맞추기 위해 */ background-color: rgb(255, 195, 44);}
.skep { left: 62.5%; background-color: rgb(43, 185, 60);}
.cyr { left: 80%; background-color: rgb(74, 125, 213);}
.user { position: absolute; display: inline-block; width: 12%; margin: 0 3%; bottom: 0; background: skyblue; min-height: 7%; height: 5%; border-radius: 13px 13px 0px 0px; font-weight: bold; font-family: "Do Hyeon", sans-serif; transition: height 2s; z-index: 300;}
</style>

<template>
  <div class="adscontainer">
    <div class="ads">
      좌측광고<br /><br />
      <div class="img">
        IMG1
      </div>
    </div>
    <div class="ads ads-right">
      우측광고 삽입<br /><br />
      <div class="img">
        IMG2
      </div>
    </div>

    <!-- <div class="ads ads1">            
            광고1<br/><br/>
                              
        </div>
        <div class="ads ads2">            
            광고2<br/><br/>
            <div class=img>
                IMG2
            </div>                    
        </div> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.adscontainer {
}
.ads {
  border: 1px solid black;
  position: fixed;
  width: 130px;
  height: 65vh;
  top: 50%;
  transform: translateY(-50%);
  /* bottom:auto;  */
  /* margin-bottom:0 auto; */
  z-index: 900;
}

      

    .ads-right {        
        right:0;
    }    
.ads-right {
  right: 0%;
}

.ads1 {
}

.ads2 {
}

.img {
  margin: 10px 5px;
  border: 1px solid black;
  height: 70%;
  /* display: flex;
        margin-left: auto;
        line-height: 1em; */
}

.adsbar ul {
  padding: 5px 8px;
}

.ads:hover {
  cursor: pointer;
  border-radius: 4px;
}

@media screen and (max-heigth: 70px) {
  .adsbar {
    flex-direction: row;
  }
}
</style>

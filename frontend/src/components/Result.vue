<template>
    <div class="Result">
        <div class="wrapper">
            <div class="phrase">
                <h1>관련 사상 대표 문구</h1>
            </div>            
            <div class="top">
                <div class="graphInfo">
                    <h4>당신의 철학적 성향은</h4>                    
                    <h5>아리스토텔레스</h5>
                    <div class="container">
                        <div class="skills ari">90%</div>
                    </div>

                    <h5>스토아</h5>
                    <div class="container">
                        <div class="skills sto">80%</div>
                    </div>

                    <h5>에피쿠로스</h5>
                    <div class="container">
                        <div class="skills epi">65%</div>
                    </div>

                    <h5>회의주의</h5>
                    <div class="container">
                        <div class="skills ske">60%</div>
                    </div>

                    <h5>견유학파</h5>
                    <div class="container">
                        <div class="skills cyr">40%</div>
                    </div>
                </div>
                <div class="temp">                
                    <div class="textInfo">
                        <h3> 철학 관련 내용 설명</h3>
                        <h3> 해당 철학자들</h3>
                        <h3> 해당 유명인들</h3>
                        <h3> 안 어울리는 유형</h3>
                        <h3> 읽어 볼만한 책</h3>
                    </div>
                </div>
            </div>            
            <div class="bottom">                
                <div class="person">
                    <h3 class="title">활동시기</h3>
                    <div>
                        <b-card-group>
                            <b-card title="Aristoles" img-src="https://lh3.googleusercontent.com/proxy/hPJGJEHEAcW04nvOOODdF57ceGpJ0qx1VgFnV7atD2ZIhF0ftBRgyizUeRud0mAaUwON_vsP56L4-a_ZUBneyqU63d7Kg0LPBYvMASeTDuQWDm1QmXHTfWIyFGaY1n4Ah0Lm8Xlx_eQ5ZKybl938V8yhPUbQfjHc2Xu-vE9HHHzX0wtcMhyGr4Gk9oFaUA"  img-alt="Image" img-top style="width: 300px; height: auto;">
                                <b-card-text>
                                    This is a wider card with supporting text below as a natural lead-in to additional content.                                    
                                </b-card-text>
                                <template v-slot:footer>
                                    <small class="text-muted">Last updated 3 mins ago</small>
                                </template>
                            </b-card>                      
                        </b-card-group>
                    </div>
                </div>
                <div class="userInfo">
                    <h3 class="title">참여자수<br/>&해당 유형수</h3>                   
                    <reactive :chart-data="datacollection"></reactive>
                </div>                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Result',
    props: {
        msg: String
    }
}

</script>

<style scoped>
    div{
        border: 1px solid black;
    }

    * {box-sizing: border-box}

    .container {
        width: 100%;
        background-color: #ddd;
    }

    .skills {
        text-align: right;
        padding-top: 10px;
        padding-bottom: 10px;
        color: white;
    }

    .ari {width: 90%; background-color: #ff0000;}
    .sto {width: 80%; background-color: #00a3cc;}
    .epi {width: 65%; background-color: #00ff00;}
    .ske {width: 60%; background-color: #ff9900;}
    .cyr {width: 40%; background-color: #808080;}

    .wrapper{
        margin: 20px;
    }

    .phrase{        
        margin-bottom: 20px;
        height: 50px;
    }

    .top, .bottom{
        height: 700px;
        margin-bottom: 20px;        
        display: flex;
        flex-direction: row;
        align-items: center; /* top, bottom div안에 있는 자식 div들을 세로 중앙정렬하기 위함(display: flex, align-items: center) */
        justify-content: center;        
    }     

    .temp{
        display: table-cell;
        vertical-align: middle;
    }

    .graphInfo, .person{        
        height: auto;        
        margin-right: 30px;
    }

    .textInfo, .userInfo{
        height: 500px;       
        display: table-cell;
        vertical-align: middle;
        margin-left: 30px;        
    }

    /* .textInfo{
        
    } */

    /* .person, .userInfo{
        display: flex;
        justify-content: center;
        align-items: center;
    } */

    .bottom{
        margin-top: 20px;
    }

    .title{
        height: 50px;
    }
 
</style>
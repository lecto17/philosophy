<template>
    <div class="Result">
        <div class="wrapper">
            <div class="phrase">
                <h1>관련 사상 대표 문구</h1>
            </div>
            <div class="top">
                <div class="graphInfo">
                    <h4>당신의 철학적 성향은</h4>                    
                    <div class="graph" id="chartDiv" style="max-width: 740px;height: 400px;margin: 0px auto">
                        graph area
                    </div>
                </div>
                <div class="textInfo">
                    <h3> 철학 관련 내용 설명</h3>
                    <h3> 해당 철학자들</h3>
                    <h3> 해당 유명인들</h3>
                    <h3> 안 어울리는 유형</h3>
                    <h3> 읽어 볼만한 책</h3>
                </div>
            </div>
            <div class="bottom">
                <div class="person">
                    <h3 class="title">활동시기</h3>
                    <div>
                        person img area
                        <img src=""/>                        
                    </div>
                </div>
                <div class="userInfo">
                    <h3 class="title">참여자수<br/>&해당 유형수</h3>
                    <div>
                        graph area
                    </div>
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

    .wrapper{
        margin: 20px;
    }

    .phrase{        
        margin-bottom: 20px;
        height: 50px;
    }

    .top{
        margin-bottom: 20px;
    }    

    .graphInfo{
        width: 49%;
        height: 350px;
        float: left;
    }

    .graph{
        height: 20px;
    }

    .textInfo{
        width: 49%;
        height: 350px;
        float: right;
        text-align: center;        
    }

    .bottom{
        margin-top: 20px;
    }

    .person{
        width: 49%;
        height: 200px;
        float: left;
        text-align: center;
    }

    .title{
        height: 50px;
    }

    .userInfo{
        width: 49%;
        height: 200px;
        float: right;
    }

</style>
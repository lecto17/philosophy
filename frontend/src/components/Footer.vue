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
                            <img class="sns-image" src="../assets/facebook.png" alt="페이스북 아이콘">
                            <ShareNetwork class="sns"
                                network="facebook"                        
                                url="http://happiness-every-where.coi.kr"
                                title="Find your happiness besides on you, with philosophy"
                                description="Recognize oneself by five types of philosophy, just within 5 muinutes"
                                quote='"마음의 병에 대해서는 철학이 치료약을 제공한다. 이점에서 철학은 마음의 치료제라고 할 수 있다. "- 에피쿠로스-'
                                hashtags="HappinessPhilosophy"
                            >
                                Share on Facebook
                            </ShareNetwork>
                        </div>
                        <br/>
                        
                        <!-- <img class="sns-image" src="https://png.pngtree.com/element_our/md/20180626/md_5b32227ca3eb9.jpg" alt="트위터 페이지 아이콘"> -->
                        <div class="snsSection">
                            <img class="sns-image" src="../assets/twitter.png" alt="트위터 아이콘">
                            <ShareNetwork class="sns"
                                network="Twitter"
                                url="http://happiness-every-where.coi.kr"
                                title="Find your happiness besides on you, with philosophy"
                                description="Recognize oneself by five types of philosophy, just within 5 muinutes"
                                quote="마음의 병에 대해서는 철학이 치료약을 제공한다. 이점에서 철학은 마음의 치료제라고 할 수 있다. - 에피쿠로스"
                                hashtags="Happiness,Philosophy"
                            >
                                Share on Twitter
                            </ShareNetwork>
                        </div>                    
                        <br/>

                        <div class="snsSection">
                            <img class="sns-image" src="../assets/line.png" alt="라인 아이콘">
                            <ShareNetwork class="sns"
                                network="Line"
                                url="https://i.ytimg.com/vi/2_69hDmB634/maxresdefault.jpg"
                                title="Find your happiness besides on you, with philosophy"
                                description="Recognize oneself by five types of philosophy, just within 5 muinutes"
                                quote="마음의 병에 대해서는 철학이 치료약을 제공한다. 이점에서 철학은 마음의 치료제라고 할 수 있다. - 에피쿠로스"
                                hashtags="Happiness,Philosophy"
                            >
                                Share on Line
                            </ShareNetwork>
                        </div>                    
                        <br/><br/><br/>
                    </div>
                    <div class="contact">
                        {{contact}}<br/>                        
                        {{notice}}
                    </div>
                </div>                
            </div>
        </footer> 
    </div>  
</template>

<script>
export default {
    data() {
        return{
            contact: 'Contact here : hjyun0913@gmail.com',
            notice: 'ⓒ 2020 All rights resvered by Grace Community Church'
        }
    }
}
</script>

<style scoped>

    footer {
        background-color: lightgray;
        color: black;
        margin: 2% 0;
        width: 100vw;
        height: 25vh;
    }

    /* .container{
        display: table-cell;
        vertical-align: middle;
    } */

    p{
        padding-top: 2%;
    }

    .sns-wrap{        
        display: flex;
        flex-direction: row;
        align-items: center; /*top, bottom div안에 있는 자식 div들을 세로 중앙정렬하기 위함(display: flex, align-items: center) */
        position: relative;
        /* left: 30% */
    /* justify-content: space-around; */
    }

    .snsSection:first-child{
        margin-left: 25%;
    }

    .snsSection{
        margin-right: 3%; 
    }

    .sns:hover {
        cursor: pointer;
        font-weight: bold;
    }

    .sns-image {
        width: 40px;
        height: 40px;
    }

    .contact{
        color: #4d4d33;
        /* color: #c2c2a3; */
        font-weight: bold;
    }

</style>
<template>
    <div>    

        <div class="ads">
            좌측광고<br/><br/>
            <div class=img>
                IMG1
            </div>  
        </div>
        <div class="ads ads-right">
            우측광고 삽입<br/><br/>
            <div class=img>
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
export default {


}
</script>

<style scoped>

    .ads{                
        border: 1px solid black;        
        position:fixed;
        width: 130px;
        height: 65vh;
        margin-top: 10%;
        
        /* bottom:auto;  */
        /* margin-bottom:0 auto; */
        z-index:900;        
    }    

    .ads-right {        
        left:90%; 
    }    

    .ads1{
        float: left;        
        margin-left: 3%;
    }

    .ads2{
        float: right;        
        margin-right: 3%;
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
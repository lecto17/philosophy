<template>
    <div class="discussion">          
      <div class="discuss_top">
        <h2 class="phrase">"나는 생각한다, 고로 존재한다."</h2>
      </div>
      <div class="discuss_body">
        <div class="post_list">
          <b-table bordered striped hover :items="post_items"></b-table>  
        </div>

        <div class="post_sub">
          <h5 class="title">이달의 인기 토론글</h5>
          <b-table :items="hot_items" :fields="post_sub_fields" :tbody-tr-class="rowClass"></b-table>
          <h5 class="title">최신 토론글</h5>
          <b-table :items="new_items" :fields="post_sub_fields" :tbody-tr-class="rowClass"></b-table>
        </div>
        
      </div>

      <div class="button">
          <b-button class="btn prev" variant="light">이전</b-button>
          <b-button class="btn next" variant="dark">다음</b-button>
          <a v-bind:href="discussionDetail" class="btn writeRouter">                        
            <b-button class="write" variant="success">글쓰기</b-button>      
          </a>
          <router-link class="btn writeRouter" to="/discussionDetail" tag="button">                        
            <b-button class="write" variant="success">글쓰기</b-button>      
          </router-link>
        </div>
    </div>
</template>

<script>
//import Discussiondetail from "./DiscussionDetail";
import { mapMutations } from 'vuex';

export default {
  components: {
    //Discussiondetail,
  },
  data() {
    return {
      discussionDetail: 'http://localhost:8080/discussionDetail',
      initPage: 0,
      posts:[],
      toggle: 0,
      post_fields: ['번호', '제목', '작성자', '날짜'],
      post_sub_fields: ['제목', '작성자', '날짜'],
      temp : [],  
      post_items: [
          { 번호: 1, 제목: 'Dickerson', 작성자: 'Macdonald', 날짜: '2020.01.04'},
          { 번호: 2, 제목: 'Larsen', 작성자: 'Shaw', 날짜: '2019.12.23'},
          { 번호: 3, 제목: 'Geneva', 작성자: 'Wilson', 날짜: '2020.01.06' },
          { 번호: 4, 제목: 'Jami', 작성자: 'Carney', 날짜: '2018.02.02' }
        ],
      new_items: [          
          { 번호: 1, 제목: 'Geneva', 작성자: 'Wilson', 날짜: '2020.01.06' },
          { 번호: 2, 제목: 'Jami', 작성자: 'Carney', 날짜: 'k 2018.02.02' }
        ],
      hot_items: [
          { 번호: 1, 제목: 'Dickerson', 작성자: 'Macdonald', 날짜: '2020.01.04' , status: 'awesome'},
          { 번호: 2, 제목: 'Larsen', 작성자: 'Shaw', 날짜: '2019.12.23'},         
        ]
    };
  },
  methods: {
    ...mapMutations(["getPosts"]),
    rowClass(item, type) {
        if (!item || type !== 'row') return
        if (item.status === 'awesome') return 'table-success'
    }    
  },
  created() {
    console.log('plz');
    this.$store.dispatch('getPosts');
    console.log('is it?');
  },
  mounted() {

  },
  computed: {},
};
</script>

<style scoped>
* {
  list-style: none;
  padding: 0;
  margin: 0;
}
.discussion {  width: 100%;  margin-top: 5vh;}
.discuss_top { padding: 30px; font-size: 30px; }
.discuss_top > .phrase { padding: 30px 0;}


.discuss_body { margin: 45px 0px; position: relative; display: flex; flex-direction: row; }
.post_list { width: 70%; padding: 20px;}
.post_sub { border: 1px solid black; width: 25%; }
.post_sub > .title { font-weight: bold; }

.button > .btn {margin: 5% 20px;}
.button > .prev{border: 2px solid gray;}
.writeRouter{ border: none; }

.post_table { width: 100%; }
.post {
  border-bottom: 1px solid gray;
}
.column {
  border-top: 3px solid black;
  border-bottom: 1px solid black;
  padding: 10px 0;
}
.id {
  width: 10%;
}
.title {
  width: 60%;
}
.user {
  width: 15%;
}
.date {
  width: 15%;
}
.hot_list,
.new_list {
  margin: 0 20px;
}
.hot_top,
.new_top {
  border-bottom: 1px dotted black;
}
</style>

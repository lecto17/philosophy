<template>
  <div class="discussion">
    <div class="container">
      <div class="discuss_top">
        나는 생각한다, 고로 존재한다.
      </div>
      <div class="discuss_body">
        <div class="post_list" v-if="toggle == 0">
          <table class="post_table">
            <th class="id column">번호</th>
            <th class="title column">제목</th>
            <th class="user column">작성자</th>
            <th class="date column">날짜</th>
            <tr class="post" v-for="post in posts" :key="post.postID" @click="toggle = post.postID">
              <td>{{ post.postID }}</td>
              <td>{{ post.title }}</td>
              <td>{{ post.userID }}</td>
              <td>{{ post.date }}</td>
            </tr>
          </table>

          <!-- 더 이상 가져올 포스트가 없을 때 버튼 v-show="false" 해야함 -->
          <button @click="appendMorePosts">더보기</button>
        </div>
        <Discussiondetail v-bind:toggle="toggle" v-on:backToList="backToList" v-else/>
        <div class="post_sub">
          <div class="hot_list">
            <div class="hot_top">인기토론글</div>
            <div class="hot_body">
              <ul>
                <li v-for="hot in $store.state.data.hotpost" :key="hot.postID">
                  {{ hot.title }}
                </li>
              </ul>
            </div>
          </div>
          <div class="new_list">
            <div class="new_top">최신토론글</div>
            <div class="new_body">
              <ul>
                <li v-for="New in $store.state.data.newpost" :key="New.postID">
                  {{ New.title }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Discussiondetail from "./DiscussionDetail";
export default {
  components: {
    Discussiondetail,
  },
  data() {
    return {
      initPage: 0,
      posts:[],
      toggle: 0,
    };
  },
  methods: {
    appendMorePosts() {
      // this.posts = this.$store.state.data.posts.filter(post => post.title.includes('16')) // store에 있는 postslist를 0부터 다시가져옴 고쳐야할듯..
      this.posts = this.posts.concat(this.$store.state.data.posts.slice(this.initPage, this.initPage + 10))// store에 있는 postslist를 0부터 다시가져옴 고쳐야할듯..
      this.initPage += 10;
      
    },
    backToList(){
      this.toggle = 0
    }
  },
  created() {
    this.appendMorePosts();
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
.discussion {
  width: 100%;
}
.discuss_top {
  padding: 30px;
  font-size: 30px;
}
.discuss_body {
  margin: 45px 0px;
  position: relative;
  display: flex;
  flex-direction: row;
}
.post_list {
  width: 70%;
}
.post_sub {
  border: 1px solid black;
  position: absolute;
  right: 0;
  width: 25%;
}
.post_table {
  width: 100%;
}
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

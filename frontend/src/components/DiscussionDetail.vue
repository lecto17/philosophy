<template>
  <div class="DiscussionDetail">
    <div class="container">
      <img class="back_img" src="../assets/back.png" @click="backToList" />
      <div class="detail">
        <div class="detail_title">
          {{ $store.state.data.posts[postID].title }}
        </div>
        <div class="detail_content">
          {{ $store.state.data.posts[postID].content }}
        </div>
      </div>
      <div class="comments">
        <div class="comment">
          <div class="user_info">
            <div class="user">최승태</div>
          </div>
          <div class="comment_content">
            전역 가드는 라우터 인스턴스를 참조하는 객체로 설정할 수 있습니다.
            그러면 전역 가드 설정 방법을 알아보겠습니다. 먼저, 전역 가드 설정을
            위해 먼저 아래와 같이 라우터 인스턴스를 생성합니다
          </div>
        </div>
        <div class="comment">
          <div class="user_info">
            <div class="user">김현수</div>
          </div>
          <div class="comment_content">
            전역 가드는 라우터 인스턴스를 참조하는 객체로 설정할 수 있습니다.
            그러면 전역 가드 설정 방법을 알아보겠습니다. 먼저, 전역 가드 설정을
            위해 먼저 아래와 같이 라우터 인스턴스를 생성합니다
          </div>
        </div>
        
      </div>
      <div class="new_comment">
        <div class="comment_info">
          <div class="user_info">
            <b-form-input
              class="user"
              v-model="text"
              placeholder="User"
            ></b-form-input>
            <b-form-input
              class="pw"
              v-model="text"
              placeholder="PassWord"
            ></b-form-input>
          </div>
          <b-form-textarea
            id="textarea"
            class="new_comment_content"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DiscussionDetail",
  props: ["toggle"],
  data() {
    return {
      postID: this.toggle - 1,
      post: {
        postID: "",
        userID: "",
        title: "",
        content: "",
        date: "",
      },
    };
  },
  methods: {
    backToList() {
      this.$emit("backToList");
    },
  },
  mounted() {
    // this.$store.state.data.posts;
  },
  computed: {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.DiscussionDetail {
  width: 70%;
}
.container {
  padding: 0;
}
.back_img {
  height: 30px;
  width: auto;
}
.comments {
  border-top: 1.5px solid #3f3aa3;
  margin: 0;
  padding: 0;
  width: 100%;
}
.comment {
    border-top: 1px solid #e3dfc8;
    margin: 3px 0;
  display: flex;
  flex-direction: row;
}
.comment_info {
  display: flex;
  flex-direction: row;
}
.user_info {
  display: flex;
  flex-direction: column;
}
.user,
.pw {
  margin: 3px;
  border: none;
  width: 100px;
  font-size: 14px;
}
.comment_content {
  margin: 3px;
  width: 100%;
  font-size: 13px;
  resize: none;
}
.new_comment{
    margin-top: 5px;
    border-top: 2px solid #3f3aa3;
    border-bottom: 2px solid #3f3aa3;
}
.new_comment_content {
  margin: 3px;
  border: none;
  width: 100%;
  font-size: 13px;
  resize: none;
}
</style>

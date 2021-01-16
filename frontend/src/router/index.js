import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Test from "@/components/Test";
import Discussion from "@/components/Discussion";
import DiscussionDetail from "@/components/DiscussionDetail";
import Result from "@/components/Result";
import Login from "@/components/Login";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history", //url에 #제거
  routes: [
    {
      path: "/test",
      name: "Test",
      component: Test,
    },
    {
      path: "/discussion",
      name: "Discussion",
      component: Discussion,
    },
    {
      path: "/discussionDetail",
      name: "DiscussionDetail",
      component: DiscussionDetail,
    },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {      
      path: "/result",
      name: "Result",
      component: Result
    },
    {      
      path: "/login",
      name: "Login",
      component: Login
    }
  ],
});

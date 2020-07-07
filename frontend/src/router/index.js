import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Test from '@/components/Test'
import Discussion from '@/components/Discussion'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history', //url에 #제거
    routes: [
      {
        path: '/test',
        name: 'Test',
        component: Test
      },
      {
      path: '/discussion',
      name: 'Discussion',
      component: Discussion
      },
      {
        path: '/home',
        name: '/Home',
        component: Home
      }
    ]
  })
import Vue from 'vue'
import VueRouter from 'vue-router'
import Test from '@/components/Test'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history', //url에 #제거
    routes: [
      {
        path: '/test',
        name: 'Test',
        component: Test
      }
    ]
  })
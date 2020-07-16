import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    data: {
        test: 13579,
        id:0,
        value:0
    },
  },
  mutations: {
    storeResult(state, {id, value}){
      state.id = id;
      state.value = value;
      console.log(id)
      axios.get('http://localhost:8000/result/'+'aris'+'/storeResult/')
      .then((res)=>{
        console.log('storeResult res : ', res)
      }).catch((err)=>{
        console.log('storeResult err : ', err)
      })
    }
    
  },
  action: {

  },
});
import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    data: {
        id:0,
        result: [],        
    },
  },
  mutations: {
    storeResult(state, id){
      state.data.id = id;
      axios.get('http://localhost:8000/result/',{
        params : {
          id : id
        }
      })
      .then((res)=>{
        console.log('res Data : ', res.data)
        state.data.result = res.data
        console.log('state.data.result: ', state.data.result)
        
      }).catch((err)=>{
        console.log('storeResult err : ', err)
      })
    }
    
  },
  action: {

  },
});
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    data: {
        id:0,
        result: [],   
        posts: [        
          { postID: '1', userID: 'u', title: 't1', content: '', date: '' },
          { postID: '2', userID: 'u', title: 't2', content: '두번째 게시글의 내용 부분입니다.', date: '' },
          { postID: '3', userID: 'u', title: 't3', content: '위의 설명과 같이 element 에는 현재 순회하는 배열의 인자값index에는 그 인자값의 인덱스array에는 현재 배열이 로그창에 찍히게 됩니다.그럼 이제 filter란 함수가 어떻게 동작하는지 알았으니 응용을 해보도록 하죠.위의 소스에 배열이 3이하인 값만 추출해 새 배열을 만들어 보도록 하겠습니다.',date: ''},        
          { postID: '4', userID: 'u', title: 't4', content: '출처: https://aljjabaegi.tistory.com/312 [알짜배기 프로그래머]', date: '' },
          { postID: '5', userID: 'u', title: 't5', content: '', date: '' },
          { postID: '6', userID: 'u', title: 't6', content: '', date: '' },
          { postID: '7', userID: 'u', title: 't7', content: '', date: '' },
          { postID: '8', userID: 'u', title: 't8', content: '', date: '' },
          { postID: '9', userID: 'u', title: 't9', content: '', date: '' },
          { postID: '10', userID: 'u', title: 't10', content: '', date: '' },
          { postID: '11', userID: 'u', title: 't11', content: '', date: '' },
          { postID: '12', userID: 'u', title: 't12', content: '', date: '' },
          { postID: '13', userID: 'u', title: 't13', content: '', date: '' },
          { postID: '14', userID: 'u', title: 't14', content: '', date: '' },
          { postID: '15', userID: 'u', title: 't15', content: '', date: '' },
          { postID: '16', userID: 'u', title: 't16', content: '', date: '' },
          { postID: '17', userID: 'u', title: 't17', content: '', date: '' },
          { postID: '18', userID: 'u', title: 't16', content: '', date: '' },
          { postID: '19', userID: 'u', title: 't16', content: '', date: '' },
          { postID: '20', userID: 'u', title: 't16', content: '', date: '' },
          { postID: '21', userID: 'u', title: 't16', content: '', date: '' },
          { postID: '22', userID: 'u', title: 't16', content: '', date: '' },
          { postID: '23', userID: 'u', title: 't16', content: '', date: '' },
          { postID: '24', userID: 'u', title: 't16', content: '', date: '' },
          { postID: '25', userID: 'u', title: 't16', content: '', date: '' },
          { postID: '26', userID: 'u', title: 't16', content: '', date: '' },
          { postID: '27', userID: 'u', title: 't16', content: '', date: '' },
          { postID: '28', userID: 'u', title: 't16', content: '', date: '' },
          { postID: '29', userID: 'u', title: 't16', content: '', date: '' },
          { postID: '30', userID: 'u', title: 't16', content: '', date: '' },
          { postID: '31', userID: 'u', title: 't11111', content: '', date: '' },
          { postID: '32', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '33', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '34', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '35', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '36', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '37', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '38', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '39', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '40', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '41', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '42', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '43', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '44', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '45', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '46', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '47', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '48', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '49', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '50', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '51', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '52', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '53', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '54', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '55', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '56', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '57', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '58', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '59', userID: 'u', title: 't3', content: '', date: '' },
          
        ],
        hotpost:[
          { postID: '30', userID: 'u', title: 't16', content: '', date: '' },
          { postID: '3', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '22', userID: 'u', title: 't16', content: '', date: '' },
          { postID: '16', userID: 'u', title: 't16', content: '', date: '' },
          { postID: '6', userID: 'u', title: 't6', content: '', date: '' },
        ],
        newpost:[
          { postID: '30', userID: 'u', title: 't16', content: '', date: '' },
          { postID: '3', userID: 'u', title: 't3', content: '', date: '' },
          { postID: '22', userID: 'u', title: 't16', content: '', date: '' },
          { postID: '16', userID: 'u', title: 't16', content: '', date: '' },
          { postID: '6', userID: 'u', title: 't6', content: '', date: '' },
        ],
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
  action: {},
})

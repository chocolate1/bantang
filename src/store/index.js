import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
Vue.use(Vuex)


export default new Vuex.Store({
  state : {
    check: false,
    inputTexts:[],
    avatar:'',
    inputText:'',
    headline:'',
    content:'',
    picurl:[]
  },
  mutations: {
    checking (state){
      state.check = true
    },
    setavatar(state,value){
      state.avatar=value
    },
    upload(state,value){
     state.picurl.push(value)
     console.log('aaa')
      // console.log(typeof(pic))
      // pic.push(file.url);
      // console.log(pic);
      // that.$store.state.picurl = pic;
    },
    clean(state){
      state.picurl=[];
      state.headline='';
      state.content='';
    },
    writetitle(state,value){
      state.headline=value
    },
    writecontent(state,value){
      state.content=value
    },
    setInput (state, value) {
      state.inputText = value
    },
    collection (state, input){
      state.inputTexts.unshift(input)
    },
    clear (state, inputTexts){
      state.inputTexts = []
    },
    allpic(state,picurl){
      state.picurl=[]
    }
  },
  getters,
  actions :{
    setInput ({commit},value) {
      commit('setInput', value)
    },
    setavatar ({commit},value) {
      commit('setavatar', value)
    },
    collection ({commit}, input){
      commit('collection', input)
    },
    clear ({commit}, inputTexts){
      commit('clear', inputTexts)
    },
    upload({commit},value){
      commit('upload',value)

    },
    clean({commit}){
      commit('clean')
    },
    writetitle({commit},value){
      commit('writetitle',value)
    },
    writecontent({commit},value){
      commit('writecontent',value)
    }
  }
})

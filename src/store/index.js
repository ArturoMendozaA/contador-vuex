import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    counter: 0,
    colorCode: 'blue'
  },
  getters: {
    contadorCuadrado(state){
      return state.counter * state.counter;
    }
  },
  mutations: {
    increaseCounter(state, randomNumba){
      console.log('random Number', randomNumba)
      state.counter += randomNumba
    },
    decreaseCounter(state, randomNumba){
      console.log('random Number', randomNumba)
      state.counter -= randomNumba
    },
    setColorCode(state, textoIn){
      state.colorCode = textoIn
    }
  },
  actions: {
    increaseCounter({ commit }){
      // console.log('increaseCounter (action)')
      axios('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new').then(function (respuesta) {
          // console.log('respuesta', respuesta)
          commit('increaseCounter', respuesta.data)
        })
    },
    decreaseCounter({commit}){
      // console.log('decreaseCounter (action )')
      axios('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new').then(function(respuesta){
        commit('decreaseCounter', respuesta.data)

      })
    },
    setColorCode({ commit }, textoIn){
      commit('setColorCode', textoIn)
    }
  },
  modules: {
  }
})

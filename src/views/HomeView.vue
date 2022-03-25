<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div
      :style="{color: $store.state.colorCode}"
      class="contador">
      {{ $store.state.counter }}
    </div>
    <div class="contadorAlCuadrado">
      {{$store.state.counter}}
      <sup>2</sup>=
      {{$store.getters.contadorAlCuadrado}}
    </div>
    <div class="buttons">
      <button @click="$store.dispatch('decreaseCounter')">-</button>
      <button @click="$store.dispatch('increaseCounter')">+</button>
    </div>
    <div>
      <input
        v-model="colorCode"
        type="text"
        placeholder="Escribe un codigo de color">
    </div>
  
  </div>
</template>

<script> 
 

export default {
  name: 'Home',    
  computed:{
    colorCode:{
      get() {
        return this.$store.state.colorCode
      },
      set(textoIn) {
        this.$store.dispatch('setColorCode', textoIn)
      }
    }

  }
}
</script>
<style>
div{
  margin-bottom: 10px;
}
.contador{
  font-size: 80px;
}
.buttons button{
  font-size: 40px;
  width: 100px;
  margin: 0 10px; /*antes creia otra cosa, pero resulta que es y margin,y  luego el x-margin*/

}
</style>
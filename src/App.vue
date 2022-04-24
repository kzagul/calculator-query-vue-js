<template>
  <div id="app">
    <div class="task1">
      <h1>Задание 1 – Очередь</h1>
      <Alg />
    </div>

    <div class="task2">
      <h1>Задание 2 – Калькулятор</h1>
      <Calculator />
    </div>
  </div>
</template>

<script>
import Calculator from './views/Calculator.vue'
import Alg from './views/AlgServerTask.vue'

export default {
  name: 'App',
  components: {
    Calculator,
    Alg
  }
}
</script>

<style>
* {
  background-color: rgb(24, 24, 24);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}



h1{
  color: #ffffff;
}

</style>

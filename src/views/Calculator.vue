<template>
  <div class="calc">

    <!-- result -->
    <div class="display l3 white b-dark">{{result || '0'}}</div>

    <!-- 1-st var -->
    <div @click="append(variable1)" class="display btn l2 white b-dark">Argument(A)</div>
    <textarea v-model="variable1" class="display btn black b-white" wrap="off"> </textarea>

    <!-- 2-nd var -->
    <div @click="append(variable2)" class="display btn l2 white b-dark">Argument(B)</div>
    <textarea v-model="variable2" class="display btn black b-white" wrap="off"> </textarea>

    <div @click="clear" class="btn b-white">Clear</div>

    <div @click="minus" class="btn b-orange">-</div>

    <div @click="add" class="btn b-orange">+</div>

    <!-- numbers' buttons -->
    <div v-for="num in numbers" :key="num.value">
        <div @click="append(num)" class="btn b-white">{{num}}</div>
    </div>
   
    <div @click="append('0')" class="btn l3 b-white">0</div>

    <div @click="equal" class="btn b-orange l3">=</div>

  </div>
</template>

<script>
import {calc} from "../calc/calculator"

export default {
  data() {
    return {
      previous: null,

      result: '',

      operator: null,

      spec: calc.argument_1,

      operatorClicked: false,

      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],

      variable1: '',

      variable2: '',

        regExp: /^(\d{1})\b/gmu,
    }
  },
  methods: {
    clear() {this.result = ''},

    append(number) {
      if (this.operatorClicked) {
        this.result = ''
        this.operatorClicked = false
      }
      this.result = `${this.result}${eval(number)}`
    },
    
    setPrevious() {
      this.previous = this.result
      this.operatorClicked = true
    },

    divide() {
      this.operator = (a, b) => a / b
      this.setPrevious()
    },

    minus() {
      this.operator = (a, b) => (a - b) * -1
      this.setPrevious()
    },

    add() {
      this.operator = (a, b) => a + b
      this.setPrevious()
    },

    equal() {
      this.result = `${this.operator(
        parseFloat(this.result), 
        parseFloat(this.previous)
      )}`;
      this.previous = null
    }

  }
}
</script>

<style>
.calc {
    margin: auto;
    width: 400px;
    font-size: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(50px, auto);
    grid-row-gap: 0.1em;
    grid-column-gap: 0.1em;
}

input {
    width: 85%;
}

.display {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 15px;
    border-radius: 5px;
    font-size: 40px;
}

.btn {
    border: 1px solid rgb(0, 0, 0);
    border-radius: 5px;
}

.btn:hover {
  background-color: #088cf1;
  border: 1px solid #999;
}

.l1 {
    grid-column: 1 / 2;
}

.l2 {
    grid-column: 1 / 3;
}

.l3 {
    grid-column: 1 / 4;
}

.b-dark {
    background-color: #333;
}
.b-white {
    background-color: #ffffff;
}
.b-orange{
     background-color: orange;
}

.black{
    color: rgb(0, 0, 0);
}
.white{
    color: rgb(255, 252, 252);
}

textarea {
    height: 50px; 
    resize: none; 
    color: rgb(255, 252, 252);
    font-size: 32px;
    padding: auto;
}


</style>
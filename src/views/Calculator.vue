<template>
  <div class="calc">

    <!-- result -->
    <div class="display l3 white b-dark">{{result || '0'}}</div>

    <!-- set 1-st var -->
    <textarea id="varA" placeholder="Insert A" v-model="variable1" class="display l3 btn black b-white" wrap="off"> </textarea>

    <!-- set 2-nd var -->
    <textarea id="varB" placeholder="Insert B" v-model="variable2" class="display btn l3 black b-white" wrap="off"> </textarea>

    <!-- 1-st var btn -->
    <div @click="appendVarA(variable1)" class="btn white b-dark">A</div>  
    <!-- 2-st var btn -->
    <div @click="appendVarB(variable2)" class="btn white b-dark">B</div>

    <div @click="equal" class="btn b-orange">=</div>
    
    <div @click="clear" class="btn b-white">Clear</div>

    <div @click="minus" class="btn b-orange">-</div>

    <div @click="plus" class="btn b-orange">+</div>

    <!-- numbers' buttons -->
    <div v-for="num in numbers" :key="num.value">
        <div @click="appendNum(num)" class="btn b-white">{{num}}</div>
    </div>
   
    <div @click="append('0')" class="btn l3 b-white">0</div>

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
      regExp: /^(([-]\d{1,20})|(\d{1,20}))\s{1,20}[-+]\s{1,20}(([-]\d{1,20})|(\d{1,20}))|(([-]\d{1,20})|(\d{1,20}))\b/gmu,
    }
  },
  methods: {
    clear() {
      this.result = ''
      this.variable1 = ''
      this.variable2 = ''
    },

    appendNum(number) {
      if (this.operatorClicked) {
        this.result = ''
        this.operatorClicked = false
      }
        this.result = `${this.result}${eval(number)}`
    },


    appendVarA(number) {
      if (this.operatorClicked) {
        this.result = ''
        this.operatorClicked = false
      }

      if(number.match(this.regExp) != null  && number != 0){
        this.result = `${this.result}${eval(number)}`
      }
      else {
        this.variable1 = ''
        document.getElementById('varA').placeholder = "invalid data"
      }
    },

    appendVarB(number) {
      if (this.operatorClicked) {
        this.result = ''
        this.operatorClicked = false
      }

      if(number.match(this.regExp) != null){
        this.result = `${this.result}${eval(number)}`
      }
      else {
        this.variable2 = ''
        document.getElementById('varB').placeholder = "invalid data"
      }
    },
    
    setPrevious() {
      this.previous = this.result
      this.operatorClicked = true
    },

    //minus operation
    minus() {
      this.operator = (a, b) => (a - b) * -1
      this.setPrevious()
    },


    plus() {
      this.operator = (a, b) => a + b
      this.setPrevious()
    },

    equal() {
      this.result = `${this.operator(parseInt(this.result), parseInt(this.previous))}`;
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
<template>
  <div class="alg">

        <textarea v-model="result" class="form-control l3 h120" wrap="off" disabled="disabled"></textarea>

        <textarea id="text2" v-model="currentNum" class="form-control l3" placeholder="Insert the number" wrap="off" pattern="/\d{1}/"></textarea>

        <div id="printRes" @click="printRes(currentNum)" class="btn b-white l3">Add task to servers</div>
        <div @click="clear()" class="btn b-white l3">Clear servers</div>

  </div>
</template>

<script>
import {calc} from "../calc/calculator"

export default {
  data() {
    return {

        access: false,

        addStr: '',

        currentNum: '',

        mainArr: ['1: ' + '|', '2: ' + '|', '3: ' + '|'],
    
        res: '',
    
        previous: null,

        result: '',

        operator: null,

        spec: calc.argument_1,

        operatorClicked: false,

        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],

        regExp: /^(\d{1})\b/gmu,

        rules: [
            v => !!v || 'Поле пустое',
            v => v.match(this.regExp) != null || 'Не корректный ввод данных' 
        ]

    }
  },
  methods: {
    //
    clear() {
        this.result = ''
        this.mainArr = ['1: ' + '|', '2: ' + '|', '3: ' + '|']
        this.addStr = ''
        this.currentNum = ''
    },

    //
    append(number) {
      if (this.operatorClicked) {
        this.result = ''
        this.operatorClicked = false
      }
      this.result = `${this.result}${eval(number)}`
    },

    //
    countLengthOfStr(str, el){
        let cnt = 0
        for (let i of str){
            if (i  === el) cnt += 1
        }
        return cnt
    },


    //
    printRes(num) {

        if (num.match(this.regExp) != null  && num != 0){
        
           this.result = ''

            this.getRes(num)
            for (let i = 0; i < this.mainArr.length; i++){
                this.result +=`${this.mainArr[i]}\n`
            }
            this.currentNum = ''
        }
        else {
            // placeholder
            this.currentNum = ''
            document.getElementById('text2').placeholder = "invalid data"
        }
    
    },
    //
    getRes(num) {
        //symbols for result
        let divider = '|'
        let str = '_'

        let addTask = (num) => {
            let min = 12000
            let index = 0
            this.mainArr.forEach((item, i) => {
                if (this.countLengthOfStr(item, '_') < min) {
                    min = this.countLengthOfStr(item, '_'), 
                    index = i
                }
            })

            for (let i = 0; i < this.mainArr.length; i++){
                if (i === index) {
                    this.mainArr[i] += (str.repeat(num) + divider)
                    break
                }
            }
        }
        addTask(num)
    }
  },

  counted: {

  }
}
</script>

<style scoped>
.alg {
    margin: auto;
    margin-top: 40px;
    width: 400px;
    font-size: 32px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: minmax(50px, auto);
    grid-row-gap: 0.1em;
    grid-column-gap: 0.1em;
}

input {
    width: 100%;
}


.display {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 15px;
    border-radius: 5px;
    font-size: 32px;
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

.h120{
    height: 120px; 
}
.h40 {
    height: 40px; 
}


</style>
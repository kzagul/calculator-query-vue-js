<template>
  <div class="alg">

    <!-- result -->
    <textarea v-model="result" class="form-control l3 h120" wrap="off" disabled="disabled"></textarea>

    <!-- input number -->
    <textarea id="text2" v-model="currentNum" class="form-control l3" placeholder="Insert number [1-9]" wrap="off" pattern="/\d{1}/"></textarea>

    <!-- buttons -->
    <div id="printRes" @click="printRes(currentNum)" class="btn b-white l3">Add task to servers</div>
    <div @click="clear()" class="btn b-white l3">Clear servers</div>

  </div>
</template>

<script>
export default {
  data() {
    return {
        addStr: '',
        currentNum: '',
        mainArr: ['1: ' + '|', '2: ' + '|', '3: ' + '|'],
        result: '',
        operatorClicked: false,
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        regExp: /^(\d{1})\b/gmu,
    }
  },
  methods: {

    clear() {
        this.result = ''
        this.mainArr = ['1: ' + '|', '2: ' + '|', '3: ' + '|']
        this.addStr = ''
        this.currentNum = ''
    },

    //count the length of certain task
    countLengthOfStr(str, el){
        let cnt = 0
        for (let i of str){
            if (i  === el) cnt += 1
        }
        return cnt
    },

    //print result -> how tasks sorted by servers
    printRes(num) {
        if (num.match(this.regExp) != null  && num != 0){
           this.result = ''
            this.addTask(num)
            for (let i = 0; i < this.mainArr.length; i++){
                this.result +=`${this.mainArr[i]}\n`
            }
            this.currentNum = ''
            document.getElementById('text2').placeholder = "Insert number [1-9]"
        }
        else {
            this.currentNum = ''
            document.getElementById('text2').placeholder = "invalid data"
        }
    },

    //solve to which server add a certain task
    addTask(num){
        let divider = '|'
        let str = '_'
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
  },
}
</script>

<style>
/* some style */
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


.btn {
    border: 1px solid rgb(0, 0, 0);
    border-radius: 5px;
}
.btn:hover {
  background-color: #088cf1;
  border: 1px solid #999;
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
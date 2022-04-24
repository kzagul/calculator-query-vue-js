class Calc {
    _argument_1
    _argument_2

    constructor() {}

    get argument_1() {
        return this._argument_1;
    }

    set argument_1(arg) {
        this._argument_1 = arg;
    }

    get argument_2() {
        return this._argument_2;
    }

    set argument_2(arg) {
        this._argument_2 = arg;
    }

    plus(char) {
        this.result = this.result.toString();
        this.result+=char;
    }

    minus() {
        this.operator = (a, b) => a - b;
        this.setPrevious();
    }

    add() {
        this.operator = (a, b) => a + b;
        this.setPrevious();
    }
}

let calc = new Calc()

export {calc}
// addition +





// subtraction -





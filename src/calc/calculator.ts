class Calc {
    private _argument_1: Number
    private _argument_2: Number

    constructor() {}

    public get argument_1(): Number {
        return this._argument_1;
    }

    public set argument_1(n: Number) {
        if(n < 0 || n > 110){
            console.log("Недопустимый возраст!");
        }
        else{
            this._argument_1 = n;
        }
    }

    public get argument_2(): Number {
        return this._argument_2;
    }

    public set argument_2(n: Number) {
        if(n < 0 || n > 110){
            console.log("Недопустимый возраст!");
        }
        else{
            this._argument_2 = n;
        }
    }
}

let calc = new Calc()

calc.argument_1 = 10

export {calc}
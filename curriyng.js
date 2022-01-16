function somar(num1){
    return function(num2) {
        return function (num3) {
            return num1 + num2 + num3;
        }
    }
}

console.log(somar(1)(4)(3))

//----------------------------------------------------------------------

function soma(num1, num2){
    return num1 + num2
}

function diminui(num1, num2){
    return num1 - num2
}

function multiplica(num1, num2){
    return num1 * num2
}

function divide(num1, num2){
    return num1/num2
}

function calcular(num1) {
    return function(num2){
        return function(fn){
            return fn(num1, num2)
        }
    }
}

console.log(calcular(1)(2)(multiplica))
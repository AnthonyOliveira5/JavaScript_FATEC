function somar(a, b){
    return a + b;

}
function subtrair(a, b){
    return a - b;
    
}
function dividir(a, b){
    return a / b;

}
function multiplicar(a, b){
    return a * b;

}

function calcular(valorA,valorB, callback){
    return callback(valorA, valorB)
    
}

console.log(calcular(5, 3, somar))
console.log(calcular(5, 3, subtrair))
console.log(calcular(5, 3, dividir))
console.log(calcular(5, 3, multiplicar))
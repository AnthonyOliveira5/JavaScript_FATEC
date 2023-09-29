const numeros = [10,12,15,35,40]

const somaNumeros = numeros.reduce((acumulador, atual) => acumulador + atual, 0)
console.log(somaNumeros)

const filtrarNumeros = numeros.filter(num => num > somaNumeros / numeros.length)
console.log(filtrarNumeros)

const menorNumero = Math.min(...numeros)
console.log(menorNumero)

const filtrarNumerosMenores20 = numeros.filter(num => num < 20)
console.log(filtrarNumerosMenores20)

const primeiroNumero = numeros.shift()
console.log(primeiroNumero)

const restante = numeros
console.log(restante)

//Não consegui fazer com o rest/Spread o segundo exercício
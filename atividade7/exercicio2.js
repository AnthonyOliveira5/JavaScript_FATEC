/* 2. Crie uma classe Cliente, essa classe deve ter nome, telefone, renda e e-mail como atributos e um método verificarCredito(), esse método deve retornar uma promise que retorna: Crédito aprovado (renda > 2000) ou Crédito recusado (renda < 2000) */

class Cliente {
    constructor(nome, telefone, renda, email){
        this.nome = nome;
        this.telefone = telefone;
        this.renda = renda;
        this.email = email;
    }
}
    
    const pessoa1 = {
            nome: "Anthony",
            telefone: "123142114",
            renda: 3000,
            email: "testando@email.com"
    }
    
    const pessoa2 = {
        nome: "Anthony",
        telefone: "123142114",
        renda: 1900,
        email: "testando@email.com"
    
    }
const verificarCredito = new Promise((resolve, reject) => {
    if(pessoa1.renda > 2000){
        resolve(`Crédito aprovado, salário ${pessoa1.renda} > 2000`)
    } else if(pessoa1.renda < 2000){
        reject(`Crédito recusado, salário ${pessoa1.renda} < 2000`)
    } else{
        reject("Valor inválido")
    }
})

verificarCredito
    .then((resultado) =>{
        console.log(resultado)
    })
    .catch((resultado) => {
        console.log(resultado)
    })

const verificarCredito2 = new Promise((resolve, reject) => {
    if(pessoa2.renda > 2000){
        resolve(`Crédito aprovado, salário ${pessoa2.renda} > 2000`)
    } else if(pessoa2.renda < 2000){
        reject(`Crédito recusado, salário ${pessoa2.renda} < 2000`)
    } else{
        reject("Valor inválido")
    }
})

verificarCredito2
    .then((resultado) =>{
        console.log(resultado)
    })
    .catch((resultado) => {
        console.log(resultado)
    })
import PromptSync from "prompt-sync";

const prompt = PromptSync()
const numero1Digitado = Number(prompt("Informe o primeiro número: "))
const numero2Digitado = Number(prompt("Informe o segundo número: "))
const numero3Digitado = Number(prompt("Informe o terceiro número: "))

if(numero1Digitado == numero2Digitado || numero1Digitado == numero3Digitado || numero2Digitado == numero3Digitado){
    console.log(`Os números são iguais`)
} else if(numero1Digitado > numero2Digitado){
    if(numero1Digitado > numero3Digitado){
        console.log(`O número ${numero1Digitado} é o maior número`)
    } else{
        console.log(`O número ${numero3Digitado} é o maior número`)
    }
} else if(numero2Digitado > numero3Digitado){
    console.log(`O número ${numero2Digitado} é o maior número`)   
} else{
    console.log(`O número ${numero3Digitado} é o maior número`)
}
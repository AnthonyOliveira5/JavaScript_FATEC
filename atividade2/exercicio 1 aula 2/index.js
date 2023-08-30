import PromptSync from "prompt-sync";
import chalk from "chalk";

const prompt = PromptSync()
/*const name = prompt(chalk.red("Qual o seu nome? "))


console.log(chalk.blue.bgRed.bold(`Olá ${name}`))

const valor1 = Number(prompt("Digite o valor 1: "))
const valor2 = Number(prompt("Digite o valor 2: "))

const total1 = valor1+valor2
console.log(`Resultado é ${total1}`)*/

const salario = Number(prompt(chalk.red("Digite o seu salário: ")))
const aumento = Number(prompt("Digite a porcentagem de aumento em decimal"))

const total = (salario * aumento) + salario

console.log(`O seu novo salário é: ${total}`)
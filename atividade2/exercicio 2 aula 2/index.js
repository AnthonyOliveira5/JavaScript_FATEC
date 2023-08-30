import PromptSync from "prompt-sync";
import chalk from "chalk";

const prompt = PromptSync()

const anoNascimento = Number(prompt(chalk.red("Digite o ano que você nasceu: ")))

const idade = 2023 - anoNascimento

console.log(`Você tem ${idade} anos`)
//Crie um código com Node.js que recebe (usando Prompt-Sync) o ano de nascimento do usuário e em seguida calcule e exiba a idade do usuário.


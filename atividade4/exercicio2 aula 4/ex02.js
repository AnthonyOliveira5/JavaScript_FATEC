import PromptSync from "prompt-sync";

const prompt = PromptSync()
const numeroTabuada = Number(prompt('Informe um número: '))
const numeroLimite = Number(prompt('Informe o limite da tabuada: '))
for (let index = 1; index <= numeroLimite; index++) {
    const total = numeroTabuada * index;
    console.log(`${numeroTabuada} X ${index} = ${total}`)

}
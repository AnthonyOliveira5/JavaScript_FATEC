import PromptSync from "prompt-sync";

const prompt = PromptSync();

function calcularPrecoComDesconto (valorProduto, quantProduto, callback){

    let calculaDesconto = 0.8 * (valorProduto * quantProduto);
    return callback(calculaDesconto);

}

function mostraValorAtualizado(resultado){

    console.log(`O valor com desconto é: ${resultado}`)

}
let valorProdutoIndicado = Number(prompt("Digite o valor do produto: "))
let quantProdutoIndicado = Number(prompt("Digite a quantidade de produtos: "))

calcularPrecoComDesconto(valorProdutoIndicado, quantProdutoIndicado, mostraValorAtualizado)
import PromptSync from "prompt-sync";

const prompt = PromptSync();
const maximoLista = Number(prompt("Digite quantos itens terá na lista: "))
let maiorValor = []

for(let i = 0; i < maximoLista; i++){
    
    let valoresLista = Number(prompt(`Número ${i}: `))
    maiorValor.push(valoresLista)
    console.log(maiorValor.length)
    
}

const valorMaximo = maiorValor.reduce(function(prev, current) { 
	return prev > current ? prev : current; 
});

console.log("O maior valor é:", valorMaximo)
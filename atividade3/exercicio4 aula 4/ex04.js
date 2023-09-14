import PromptSync from "prompt-sync";

const prompt = PromptSync();
let nomeCliente = prompt("Digite o nome do cliente: ")

let nomeHobbie = []
let teste = true

while(teste){
     
    let valoresHobbie = prompt(`Digite o seu hobbie: `)
    nomeHobbie.push(valoresHobbie)
    teste = prompt("Deseja adicionar um novo hobbie? s/n: ")

    if(teste == "n" || teste == "N"){
        teste = false
    }
}

let todosHobbies = nomeHobbie.join(", ")

console.log(`Cliente: ${nomeCliente} | Hobbies: ${todosHobbies} `) // duas formas diferentes de mostrar os hobbies



for(let i = 0; i < nomeHobbie.length; i++){// duas formas diferentes de mostrar os hobbies
    
    console.log(`Hobbie ${i + 1}: ${nomeHobbie[i]}`)

}
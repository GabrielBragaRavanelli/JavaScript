const frutas = ["banana", "maçã", "laranja"]
const maisFrutas = ["abacaxi", "uva", "melancia"]


const clone = {...frutas}

const todasasFrutas = [...frutas, ...maisFrutas] //spread operator serve para espalhar os elementos de um array em outro array

frutas.push("abacaxi") //push serve para adicionar um elemento no final do array
console.log(frutas)
console.log(maisFrutas)
console.log(clone)
console.log(todasasFrutas)


const [primeira, segunda, terceira] = todasasFrutas //desestruturação serve para extrair os elementos de um array e armazená-los em variáveis individuais
console.log(primeira)
console.log(segunda)
console.log(terceira)
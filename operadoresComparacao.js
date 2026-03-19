const gabrielIdade = 22
const minhaIdade = 23

// == comparação de valor
const saoIguais = gabrielIdade == minhaIdade
console.log("são iguais?" + saoIguais)
//=== comparação de valor e tipo

const comparacao = gabrielIdade > minhaIdade
console.log("Gabriel é mais velho que eu?" + comparacao)

const comparacao2 = gabrielIdade < minhaIdade
console.log("Gabriel é mais novo que eu?" + comparacao2)

//maior ou igual
const comparacao3 = gabrielIdade >= minhaIdade
console.log("Gabriel é mais velho ou tem a mesma idade que eu?" + comparacao3)

// menor ou igual
const comparacao4 = gabrielIdade <= minhaIdade
console.log("Gabriel é mais novo ou tem a mesma idade que eu?" + comparacao4)

const idade = 23
const idadeIrmao =16

// !== estritamnete diferente, ou seja, verifica se os valores e os tipos são diferentes, retornando true se forem diferentes e false se forem iguais.
// != significa diferente, ou seja, verifica se os valores são diferentes, retornando true se forem diferentes e false se forem iguais. 
const souMaiordeidade = idade >= 18
const idadeIrmaoMaiorDeIdade = idadeIrmao >= 18
const idadeDiferente = idade != idadeIrmao
console.log("Eu sou maior de idade?" +souMaiordeidade)
console.log("Meu irmão é maior de idade?" + idadeIrmaoMaiorDeIdade)
console.log("Minha idade é diferente da do meu irmão?" + idadeDiferente)





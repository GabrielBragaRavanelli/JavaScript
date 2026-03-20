const pessoa = {
    nome: "joao",
    idade: 17,
    profissão: "desenvolvedor"
}

//console.log(pessooa.nome) // exibe o valor da propriedade nome do objeto pessoa, que é "joao"
//console.log(pessoa.idade) // exibe o valor da propriedade idade do objeto pessoa, que é 17
//console.log(pessoa.profissão) // exibe o valor da propriedade profissão do objeto pessoa, que é "desenvolvedor"


const {nome, idade} = pessoa // usando a desestruturação para extrair as propriedades nome e idade do objeto pessoa e armazená-las em variáveis individuais com os mesmos nomes.
console.log(nome) // exibe o valor da variável nome, que é "joao"
console.log(idade) // exibe o valor da variável idade, que é 17


function saudacao(nome, idade){
    console.log("olá " + nome)
    if (idade >= 18) {
        console.log("você é maior de idade")}
}

saudacao(nome)


const frutas = ["banana", "maçã", "laranja"]
const[primeira,segunda,terceira] = frutas 
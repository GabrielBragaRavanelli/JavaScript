var nome = "Gabriel Braga Ravanelli"
console.log( `olá ${nome}, seja bem-vindo ao curso de JavaScript`)

console.log("olá " + nome + ", seja bem-vindo ao curso de JavaScript")  

var anoAtual = 2026
var anoNascimento = 2003
var minhaIdade = anoAtual - anoNascimento
console.log(  `Olá meu nome é ${nome} e eu tenho ${minhaIdade} anos. `)

var cidade = "Marília"
var estado = "SP"
var pais= "Brasil"
console.log ( `eu moro na cidade de ${cidade}, no estado ${estado}, localizado no país ${pais} `)

var temCarteira = true
console.log(typeof temCarteira)

var matematica = 8
var portugues = 6
var ciencias = 5
var media = (matematica + portugues + ciencias) / 3
console.log(`A sua média foi de ${media}`)

var salario = 3000
var salarioAumento = salario * 0.1
var total = salario + salarioAumento
console.log(` com o aumento do seu salário, você passará a receber ${total}`)

// Exercicio: concatenacao e verificacao de tipo
var mensagem = "Total de itens: "
var numero = 7
var resultadoFinal = mensagem + numero
console.log(resultadoFinal)
console.log(typeof resultadoFinal)

// Exercicio: simulacao de contador de cliques
var cliques = 0
cliques += 1
cliques += 1
cliques += 1
console.log(`Total de cliques apos 3 simulacoes: ${cliques}`)

const pi= 3.14
console.log(" O valor da const pi não pode ser alterado, pois const só pode armazenar um único valor e não pode ser reatribuida, diferente do var que pode ser reatribuida")




//--------------------- DESAFIOS - 2 --------------------- //

var idade = 19
var comparacao = idade >= 18
console.log(`Eu sou maior de idade? ${comparacao}`)

var nota1 = 7
var nota2 =9
var media = (nota1 + nota2) /2
var resultaDO = media >= 6
console.log(`A média do aluno é ${media} e ele foi aprovado? ${resultaDO}`)

var valorCompra = 35.90
var valorPago = 50
var troco = valorPago - valorCompra
console.log(`O seu troco será de ${troco}`)

var expressao = 2 + 3 *5
console.log(`o valor da expressão é ${expressao}, isso porque a multiplicação é feita antes da soma.`)


var senha1 =234234
var senha2 = 24523523523
var senha = senha1 === senha2
console.log(`As senhas são iguais? ${senha}`)
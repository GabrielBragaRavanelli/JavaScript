//function saudacao (nome){
//    console.log("olá, " + nome)
//}

//chamado de função fecha, é um outro jeito de fazer a mesma coisa, mas usando uma sintaxe diferente. Em vez de usar a palavra-chave function, eu posso usar uma expressão de função, que é uma função anônima atribuída a uma variável. Por exemplo:
//const saudacao = (nome) => {
//    console.log("vida longa e próspera, " + nome)
//}

//outra formade fazer , é usando uma sintaxe ainda mais curta, é usando uma função de seta (arrow function) sem chaves e sem a palavra-chave return, quando a função tem apenas uma expressão. Por exemplo:
const saudacao = nome => console.log("vida longa e próspera, " + nome)

saudacao("gabriel")
saudacao("Maria")
//posso fazer quantas chamadas eu quiser para a função saudacao, passando diferentes argumentos para cada chamada. E a função vai executar o mesmo código, mas com o valor do argumento que eu passar em cada chamada. No exemplo acima, a função saudacao vai exibir "olá, gabriel" e "olá, Maria" quando for chamada com os respectivos argumentos.
//colocar o nome da função e abrir parentesses, significa que eu quero executar essa função. E posso colocar um valor dentro dos parenteses, que é o argumento da função. E esse argumento vai ser usado dentro da função para realizar alguma ação. No caso da função saudacao, o argumento é nome, e dentro da função eu estou usando esse argumento para exibir uma mensagem de saudação personalizada.


//function calcularDobro(numero){
//    return numero * 2
//}

//const calcularDobro = (numero) =>{
//    return numero * 2
//}

const calcularDobro = numero => numero * 2

const numeroDobrado = calcularDobro(4)
console.log("o dobro de 4 é " + numeroDobrado)
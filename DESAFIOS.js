console.log("bem vindo ao calculadora de trocos")

let valorPago =20
let valorProduto = 15
let troco = valorPago - valorProduto
console.log("O troco a ser devolvido é: " + troco + " reais.")

let numeroPares=0
let numeroImpares=0

for(let numero =0; numero <= 100; numero++) {
    if(numero % 2 == 0){
        numeroPares++
    } else {
        numeroImpares++
    }
}

console.log("Quantidade de números pares encontrados: " + numeroPares)
console.log("Quantidade de números ímpares encontrados: " + numeroImpares)

const num1= 2
const num2= 4
const operacao = "multiplicacao"

// IF/ELSE
// definir um fluxo para somar ou multiplicar dois números usando if/else

if(operacao === "soma") {
    console.log(num1 + num2)
} else if (operacao === "multiplicacao"){
    console.log(num1 * num2)

} else{
    console.log("Operação não identificada")
}

// localizar o nivel de bônus de acordo com a faixa salarial 
// ex: $11000 e acima: 3% de bônus 
// $10999 a $7000: 5% de bônus 
// $ 6999 a $4008: 7% de bônus 
// $3999 p baixo: 9% de bônus 

const salario = 2000

if(salario >= 11000){
    console.log("3% de bônus" )
} else if(salario < 11000 && salario >= 7000){
    console.log("5% de bônus")
} else if(salario < 7000 && salario >= 4000){
    console.log("7% de bônus")
} else{
    console.log("9% de bônus")
}

// deve ser divisível por 4 mas NÃO divisível por 100
// OU
// deve ser divisível por 100 e por 400

const ano = 2024;
// const ano = 2000;
// const ano = 2022;
// const ano = 1992;

if(((ano % 4 === 0) && (ano % 100 !== 0)) || (ano % 400 === 0)){
    console.log(`${ano} é bissexto`)

}else{
    console.log(`${ano} não é bissexto`)
    }


// Verificar se estudante receberá bônus na nota.
// Estudantes recebem bônus se nota for 8 ou acima e se tiverem no máximo 2 faltas. 

const nome = "Roberta";
const nota = 8;
const faltas = 2;

const recebeBonus = (nota >= 8) && (faltas <=2) 
? `${nome} recebe bônus` 
: `${nome} não recebe bônus` 

console.log(recebeBonus);

// criar um fluxo que identifica o tipo de pessoa usuária e comunica de acordo.
// ex: pessoa usuária free tem acesso limitado ao app
//     pessoa usuária premium tem acesso a todas as funções
//     pessoa usuária super premium tem acesso total e bônus especiais

const user=  `premium`

switch(user){
    case  `free`:
        console.log("Acesso limitado");
        break;
    case `premium`:
        console.log("Acesso total ao app");
        break;
    case `super premium `:
        console.log("Acesso total ao app e bônus");
        break;
    default:
        console.log("Tipo de user desconhecido")
        break;
}

for(let contador = 1; contador <= 30; contador++){
    const numero7 = Math.floor(Math.random()*(50 - 1 + 1) + 1);
    if (numero7 === 15){
        console.log(`${numero7} em ${contador} tentativas`);
        break;
    }
}

let conta = 0;

for(let i = 1; i <= 30; i++){
    const numero8 = Math.floor(Math.random()*(50 - 1 + 1) + 1);
    if(numero8 % 5 === 0 ){
        continue;
    }
    conta++;
};
console.log(conta);

// Gerar um laço que tente "adivinhar" um dado número de 1 a 50
// e conte a quantidade de tentativas até o resultado

const numeroSecreto = 8;
let numeroAleatorio1 = 0;
let tentativas1 = 0;

while (numeroSecreto !== numeroAleatorio1) {
    numeroAleatorio1 = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    tentativas1++;
}

console.log(`adivinhou em ${tentativas1} tentativas`);

let numeroRandom = 0;

do {
    numeroRandom = Math.floor(Math.random() * (50 - 1 + 1) + 1);
    console.log(numeroRandom);
} while (numeroRandom % 2 !== 0);

console.log(numeroRandom);

// criar um laço que recebe um texto e verifica se é um palíndromo
// imprimir no console o texto, informando se é ou não palíndromo

// const texto = 'alura!';
// const texto = 'arara';
const texto = 'luz azul';

let textoInvertido = '';

for (let i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
}

console.log(textoInvertido);

const result = texto === textoInvertido
    ? `${texto} é palíndromo`
    : `${texto} não é palíndromo`;
        
console.log(result);


// FUNCTION

// elevar um número x a uma potência y

function calculaPotencia(num, pow){
    let resultado9 = 1;
    for(let i =0; i<pow; i++){
        resultado9 = resultado9 *num

    }
    return resultado9;
}

console.log(calculaPotencia(4,3));
console.log(calculaPotencia(5,5));

// criar função que calcula o fatorial de um número usando recursão.
// fatorial: n! multiplicação de n por seus antecessores maiores ou iguais a 1
// ex: 5! = 5 x 4 x 3 x 2 x 1

const fatorial = function f(num){
    if(num ===0 || num === 1) return 1;
    return num * f (num-1)
    
}
console.log(fatorial(5));
console.log(fatorial(8));
console.log(fatorial(9));

//O objetivo é criar uma função para calcular juros compostos. Isto é, dado um valor inicial, uma taxa de juros e um período de tempo, queremos receber o valor final já contendo os juros acumulados.
//Para facilitar, vamos passar juros e tempo como números inteiros. O primeiro vai equivaler a uma taxa em porcentagem (por exemplo, 5% ou 2%) e o segundo a uma quantia de meses (por exemplo, 2 ou 3 meses).
//A fórmula utilizada para esse cálculo será: valor multiplicado à taxa de juros elevada ao tempo

const calculaJuros = (valor,juros, tempo   ) => {
    let taxaJuros = (juros / 100) + 1;
    return valor * Math.pow(taxaJuros, tempo);
}

console.log(calculaJuros(1000, 5, 2));


function soma9 (a,b){return a + b}
function multiplica (a,b){return a * b}

function calcula(operacao, valor1, valor2){
    return operacao(valor1, valor2)
}

console.log(calcula(soma9, 5, 5));
console.log(calcula(multiplica, 5, 5));


const userId = '4545656';

const avisaUsuario = userId => console.log(`sessão de ${userId} está inativa`);


setTimeout((userId) => console.log(`sessão de ${userId} está inativa`), 4000, userId);
//ou
//setTimeout(avisaUsuario, 2000, userId);

// ARRAY
// pratique construindo arrays e acessando seus elementos através dos índices

const arr = [1, 2, 3, 4];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);

// criar um array com uma sequência de números entre x e y

function criaArrnum(inicio,fim){
    const arr = [];
    let elemento9 = inicio;
    for(let i = 0, j = 0; j < fim; i++, elemento9++){
        arr[i] = elemento9;
        j = elemento9
    }
    return arr;
}
console.log(criaArrnum(12,30));


// clonar array multidimensional com "deep copy"
// por que não podemos clonar arrays via variável?

const arr1 = [[1, 2], 2, 3];

const copiaArry = (arr) =>{
    const copia = [];
    arr.forEach((elem) => {
        if(Array.isArray(elem)){
            copia.push(copiaArry(elem));
        }else{
            copia.push(elem);
        }
    });
    return copia;
}

const arr2 = copiaArry(arr1);
arr2[0][0] = 5;

console.log(arr1);
console.log(arr2);

// filtrar um array e alterar valores específicos
// ex: alterar números para strings

const cpfs = ['12323434545', '34658756786', 43254365434, '76547865345', 56768767564];

const filteredCpfs = cpfs.map(cpf => {
    if(typeof cpf === 'string'){
        return cpf
    }else{
       return cpf.toString()
    }
});
console.log(filteredCpfs);
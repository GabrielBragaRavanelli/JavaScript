console.log("bem vindo ao calculadora de trocoas")

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

const salarіо = 2000

if(salarіо >= 11000){
    console.log("3% de bônus" )
} else if(salarіо < 11000 && salarіо >= 7000){
    console.log("5% de bônus")
} else if(salarіо < 7000 && salarіо >= 4000){
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
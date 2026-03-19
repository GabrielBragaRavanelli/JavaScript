const idade = 26


    if( idade >= 18){
        console.log("é maior de idade")
    } else {
        console.log("É menor de idade")
    }

const notadoAluno = 8

    if(notadoAluno >= 9){
    console.log("Excelente nota")
} else if (notadoAluno >= 7){
    console.log("Boa nota")
} else if (notadoAluno >= 4){
    console.log("Nota suficiente")
} else {
    console.log("Reprovado")
}

//else if = se não for a primeira condição, mas for a segunda, terceira ou quarta condição, ele vai executar o código dentro do bloco else if correspondente. Se nenhuma das condições anteriores for verdadeira, ele vai executar o código dentro do bloco else.


// operador ternário - outra forema de escrever if e else, mas de forma mais concisa. Ele tem a seguinte sintaxe: condição ? valor se verdadeiro : valor se falso.

const idade2 = 17
idade2 >= 18 ? console.log("é maior de idade") : console.log("É menor de idade")

notadoAluno >= 9 ? console.log("Excelente nota") : 
    notadoAluno >= 7 ? console.log("Boa nota") : 
        notadoAluno >= 4 ? console.log("Nota suficiente") : 
            console.log("Reprovado")



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

const nota1 = 9
const nota2 = 6
const nota3 = 5

const media = (nota1 + nota2 + nota3) / 3

if (media >= 9){
    console.log("Excelenete semestre")
} else if (media >= 7){
    console.log("Bom semestre")
} else if (media >= 6){
    console.log("Semestre razoável")
} else if (media >= 5){
    console.log("O aluno será designado a dependência")
} else {
    console.log("Reprovado")
}
    
media >= 9 ? console.log ("Excelenete semestre "):
    media >= 7 ? console.log ("Bom semestre"):
        media >= 6 ? console.log ("Semestre razoável"):
            media >= 5 ? console.log ("O aluno será designado a dependência"):
                console.log ("Reprovado")




var idadecadastro = 15

if(idadecadastro >= 18){
    console.log("Você tem idade suficiente para fazer cadastro")
} else if (idadecadastro >= 16){
    console.log("Por pouco você não apresnta idade suficiente para o cadastro")
} else {
    console.log("Você Não possui idade suficiente pra cadastro")
}

var idadecadastro = 16

if(idadecadastro >= 18){
    console.log("Você tem idade suficiente para fazer cadastro")
} else if (idadecadastro >= 16){
    console.log("Por pouco você não apresnta idade suficiente para o cadastro")
} else {
    console.log("Você Não possui idade suficiente pra cadastro")
}

var idadecadastro = 19

if(idadecadastro >= 18){
    console.log("Você tem idade suficiente para fazer cadastro")
} else if (idadecadastro >= 16){
    console.log("Por pouco você não apresnta idade suficiente para o cadastro")
} else {
    console.log("Você Não possui idade suficiente pra cadastro")
}

const aluna1 = {
    matametica: '7',
    portugues: '5',
    ingles: '9',
    ciencias: '8'

}

const aluna2 = {
    matametica: '6,75',
    portugues: '7',
    ingles: '8',
    ciencias: '4'

}

const aluna3 = {
    matametica: '5',
    portugues: '8,5',
    ingles: '7',
    ciencias: '6'

}


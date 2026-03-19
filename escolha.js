const notadoAluno = 8

switch(notadoAluno){
    case 10:
    case 9:
        console.log("Excelente nota")
        break
    case 8:
    case 7:
        console.log("Boa nota")
        break
    case 6:
        console.log("Nota suficiente")
        break
    case 5:
    case 4:
    case 2:
    case 1:
    case 0:
        console.log("Reprovado")
        break
    default:
        console.log("Nota inválida")

}
// default é o caso padrão, ou seja, se nenhuma das condições anteriores for verdadeira, ele vai executar o código dentro do bloco default. No exemplo acima, se a nota do aluno for diferente de 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ou 0, ele vai imprimir "Nota inválida".
// o break serve para que  quando o condição for atinjida, ele para de verificar as outras condições
//pode traduzir switch com escolha.



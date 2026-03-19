const nome = ""
//então, se você  não colocar nada dentro das aspas, o js vai declarcar como false.
if(nome){
    console.log("olá, " + nome)
} else {
    console.log("Olá, visitante")
}



const idade = null
if(idade >= null)
    if(idade != null && idade >= 18) {
        console.log("maior de idade")
    } else  if ( idade >= 0 && idade < 18){
        console.log("menor de idade")
    }

// vai ser menor de idade, porque null é considerado falso.

//valores que são false:
//false
//0 (o número zero)
//
//"" (string vazia)
//
//null
//
//undefined
//
//NaN (Not a Number)
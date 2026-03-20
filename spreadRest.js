let pessoa = {
    nome: 'João',
    idade: 30,
    profissao: 'Desenvolvedor'
}

const pessoa1 = pessoa
pessoa1.idade = 20

console.log(pessoa) // exibe o objeto pessoa, que agora tem a idade atualizada para 20, pois pessoa1 é uma referência ao mesmo objeto na memória.
console.log(pessoa1) // exibe o objeto pessoa1, que também tem a idade atualizada para 20, pois é uma referência ao mesmo objeto na memória.


//]const pessoa1 = {...pessoa} // usando o operador spread para criar um novo objeto pessoa1, copiando as propriedades do objeto pessoa. Agora, pessoa1 é um novo objeto independente, e alterações em pessoa1 não afetarão o objeto pessoa.

pessoa = {
    ...pessoa1, // usando o operador spread para copiar as propriedades do objeto pessoa1 para o objeto pessoa. Agora, pessoa é um novo objeto independente, e alterações em pessoa não afetarão o objeto pessoa1.
    profissão: "Desenvolvedor Senior",
    possuiCNH: true
}
console.log(pessoa) // exibe o objeto pessoa, que agora tem a idade atualizada para 20, pois pessoa1 é uma referência ao mesmo objeto na memória.

const {nome, ...restante} = pessoa // usando a desestruturação para extrair a propriedade nome do objeto pessoa e armazená-la na variável nome, enquanto o operador rest é usado para coletar as demais propriedades do objeto pessoa em um novo objeto chamado restante.   
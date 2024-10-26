//loja de eletronicos, e criar o iphone2323
//objetos sao construidos com chaves '{}'
//API troca de informacões entre servidores , e tudo é objeto

const nomeProduto = 'iphone 2323';
const precoProduto = 899;
const marcaProduto = 'Apple';

//console.log(nomeProduto);

const nomeDoObjeto = {
    'chave': 'valor',
    'chave2': 'valor',

}


const produto = {
    nome: 'iphone2323',
    price: 899,
    marca: 'Apple'
}

const alunos = {
    'rodrigo': 10,
    'roger': 11,
    'ronaldo': 5,
}
//dot notation
//Objeto.nomeDaChave
console.log(produto.nome);

//Bracket notation
//objeto[nomeDaChave]
console.log(produto['price']);
let nomeDinamico = 'marca';
console.log(produto[nomeDinamico]);

const alunosArray = ['rodrigo', 'roger']
console.log(alunos[alunosArray[0]]);
console.log(alunos.ronaldo);

 
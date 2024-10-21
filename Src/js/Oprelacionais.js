//compara dois valores e determina a relação - valor boleando true or false 

//Operador Maior (>)
let idade = 20
let idadeMinima = 18;
//Idade é maior que a idadeMinima ? sim ou não?
let podeDirigir = idade > idadeMinima;
//console.log(podeDirigir);

//Operador Menor (<)
let precoItem = 50;
let orcamento = 100;
let dentroOrcamento = precoItem < orcamento;
//console.log('Posso comprar?' , dentroOrcamento);

// Maior ou igual (>=)
let renda = 2999; 
let rendaMinima = 3000;
let elegivelEmprestimo = renda >= rendaMinima;
//console.log(elegivelEmprestimo);

//Menor ou igual a (<=)
let precoOriginal = 150;
let descontoAplicado = 20;
precoFinal = precoOriginal - descontoAplicado;
precoMaximoDesejado = 100;
descontoSuficiente = precoFinal <= precoMaximoDesejado;
//console.log(descontoSuficiente);

//Igual a (===) - o valor e o tipo
let codigoProduto = '123'; //aqui é estring
let codigoEsperado = 123; //aqui é numero 
//Essa resposta dará false pois, o codigo do produto é texto e o codigo esperado é numero
codigoCorreto = codigoProduto === codigoEsperado;
//console.log('O codigo está correto?' , codigoCorreto);

//Diferente a (!==) 
let senhaDigitada = 'azevedo';
let senhaArmazenada = 'Azevedo';
let senhaIncorreta = senhaDigitada !== senhaArmazenada;
console.log('A senha digitada é diferente da senha armazenada?' , senhaIncorreta);


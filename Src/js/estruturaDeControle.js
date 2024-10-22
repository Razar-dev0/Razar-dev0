//Definem como o codigo é executado com basae em condições e loops. ajudam a controlar o fluco do programa, permitindo decisões e repetições baseadas em condições especificas

//IF - SE 
//se uma condição especifica for verdadeira 
//if (condição){

//faça algo aqui SE for verdadeiro
// } 

/* 
let idade = 19;
if(idade >= 18){
    console.log('Pode Dirigir!');
}else {
    console.log('Não pode dirigir!!');
} */

//ELSE (se não)
//quando eu quero que algo diferente aconteça se a condição for falsa
//sempre está dependendo do "IF" 
//nao tem parentese 

//ELSE IF
//uma extensão do "IF" que permite verificar multiplas condições sequencialmente.usado quando tem varias condições possiveis e deseja que o codigo execute diferente blocos de acordo com a primeira condição verdadeira que encontre.

/*let dinheiro = 19;
if(dinheiro >= 50){
    console.log('Posso almoçar em restaurante caro');
} else if ( dinheiro >= 20){
    console.log('posso almoçar em restaurante Médio');
} else if (dinheiro >= 10) {
    console.log('posso fazer um lanche rapido');
} else {
    console.log('vou comer em casa');
}
*/

//SWITCH/CASE
//facilita tomada de decisões qundo se necessita comparar valores com varias possibilidades. util quando se tem muitas condições a serem verificadas e quer evitar o uso repetido de varios else/if.
//quadro de opções 
/*switch:quadro onde coloca o pedido
  case:sao os cartões com as opções especificas
  defalult:é o q faz se nao estiver no pedido
*/

/* switch (expressao) {
    case valor1:
        codigo a ser executado se expressao for igual a valor1 
        break;
    case valor2:
        codigo a ser executado se expressao for igual a valor2
        break;
    outros casos...
    default:
        codigo a ser executado se nenhum dos casos anteriores for atendido
}
*/

/*let pedido = 'pizza';
switch (pedido) {
    case 'hamburguer':
        console.log('preparando um hamburguer');
        break;
    case 'pizza':
        console.log('preparando uma pizza');
        break;
    case 'sopa':
        console.log('preparando uma sopa');
    default:
        console.log('não realizamos esse tipo de pedido');
        break;
}
*/

//complexidade ciclomatica

/*let alunos = 16;
if (alunos < 16){
    console.log('Esse filme não é recomendado para a sua idade, dirija-se a outra sala');
}else if (alunos >= 16){
    console.log('Entrada liberada. Bom filme.');
}
*/

let idadealuno = 16
if (idadealuno >= 16) {
    console.log('Entrada liberada. Bom filme');    
}else {
    console.log('Esse filme não é recomendado para a sua idade, dirija-se a outra sala');
}
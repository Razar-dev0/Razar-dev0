//criar uma calculadora com soma, subtração, divisao, e multiplicação

//function variavel(parametro) {
//    return
//}
//console.log(variavel(parametro));

//1.como eu crio uma calculadora?
//2.como eu crio a função de soma?
//3.como eu crio a função de subtração?
//4.como eu crio a fução de divisão?
//5.como eu crio a função de multiplicação?
//6.como eu agrupo essas funções para a função calculadora?


function soma(numero1, numero2) {
   
    let resultado = numero1 + numero2;
    return resultado;
}
//console.log(soma(10,2));

function subtracao(numero1, numero2) {

    let resultado2 = numero1 - numero2;
    return resultado2;
}
//console.log(subtracao(56,23));

function multiplicacao (numero1,numero2){
    let resultadoMulti = numero1 * numero2;
    return resultadoMulti;
}
//console.log(multiplicacao(7,5));

function divisao(numero1,numero2) {
    let resultadoDiv = numero1 / numero2;
    return resultadoDiv; 
}
//console.log(divisao(50,3));

function calculadora(operador, numero1, numero2) {
    console.log('operador', operador);
    console.log('numero1', numero1);
    console.log('numero2', numero2);

    switch (operador) {
        case '+':
            return soma(numero1, numero2);         

        case '-':
            return subtracao(numero1, numero2);

        case '*':
            return multiplicacao(numero1,numero2);

        case '/':
            return divisao(numero1, numero2);
                
        default: 
        console.log('operação invalida');
            break;
    }
}
console.log(calculadora('*', 50, 2));
//array é uma estrutura de comando que agrupa diversos tipos de variaveis, o colchete '[]' é a forma de juntar as variaveis

const frutas = 'maçã';
const fruta2 = 'banana';
const fruta3 = 'uva';

const animais = ['cachorro' , 'rato' , 'camelo'];

//acessando arrays , as variaveis começam com o zero '0', e vai seguindo, um '1',etc...
//para acessar o cachorro, acessar a posição 0 
//array[index] ///sendo o index a posição do elemento no array
    //console.log(animais[0]);

//acessar o segundo elemento do array 
console.log(animais[1]);

//Meétodos do array

//adicionar um elemento ao array necessita do codigo 'push'
animais.push('tracajá');
console.log(animais);
console.log(animais[3]);



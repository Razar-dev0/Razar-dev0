//1. A partir do HTML, exiba cada texto no console do js;

console.log('testando integracao');

//selecionando o elemento 
const tituloPrincipal = document.getElementById('tituloPrincipal');

//alterar o seu estilo
tituloPrincipal.style.color = 'red';
console.log(tituloPrincipal);

//outro exemplo
//selecionar o item 

const paragrafo = document.querySelector('.descricao');

//alterar estilo
//.elemento.style.propriedadeParaAlterar = 'valor da propriedade'

//pegando a segunda descrição
//selecionar o elemento


paragrafo.style.fontSize = '3rem';
console.log(paragrafo);


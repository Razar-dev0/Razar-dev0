//E (&)
//Retorna verdadeira se ambas as condições forem verdadeiras. suponha que voce so pode aprovar uma despesa se ela estiver dentro do orçamento e se for aprovada pelo gerente. Ambas as condições devem ser verdadeiras. Salvar essa verificação em uma variavel ajuda a simplificar a lógica de aprovação
let dentroDoOrcamento = true;
let aprovadoPeloGerente = true;

let despesaAprovada = dentroDoOrcamento && aprovadoPeloGerente;
//console.log(despesaAprovada);

// OU (||)
//Retorna verdadeiro se pelo menos uma das condições for verdadeiras. Imagine que um funcionario pode receber um bonus se alcançar a meta de vendas ou se tiver uma excelente avaliação de desempenho. Basta uma das condições ser verdadeira para que o bonus seja concedido

let antigiuMeta = true;
let excelenteAvaliacao = false;
let recebeBonus = antigiuMeta || excelenteAvaliacao;
//console.log('Recebe bonus ?' , recebeBonus);

//Não (!)
//Suponha que voce so permite acesso a um relatorio se não for um dia de feriado. O operador ! ajuda a verificar essa condição. Salvar essa informação em uma variavel pode ser útil para condicionar o acesso.

let feriado = true;
let podeAcessarRelatorio = !feriado;
//console.log(podeAcessarRelatorio);

let luzAcesa = true;
let alexaDesligarLuz = !luzAcesa;
console.log('A luz está ligada?' , alexaDesligarLuz);
console.log('o que tem na variavel alexadesligarluz?' , alexaDesligarLuz);

let alexaAcendeLuz = !alexaDesligarLuz;
console.log('o que tem na variavel alexadesligar?' , alexaDesligarLuz);

console.log("A luz está ligada?" , alexaAcendeLuz);





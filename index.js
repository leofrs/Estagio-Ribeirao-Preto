// Questão 1
/*const fibonnaciSequence = (num) => {
  let a = 0;
  let b = 1;

  if (num < 0)
    return console.log(
      "Números negativos não faem parte da sequencia de fibonnaci"
    );

  while (a < num) {
    let temp = a;
    a = b;
    b = temp + b;
  }

  if (a === num) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
  }
};
fibonnaciSequence(14); */

// Questão 2
/* function verificarLetra(string, letra) {
  const texto = string.toLowerCase();
  const letraLower = letra.toLowerCase(); //

  const ocorrenciasLetra = texto.split(letraLower).length - 1;

  if (ocorrenciasLetra > 0) {
    console.log(
      `A letra '${letra}' aparece ${ocorrenciasLetra} vezes na string.`
    );
  } else {
    console.log(`A letra '${letra}' não aparece na string.`);
  }
}
const stringDeTeste = "Aqui está um exemplo com algumas letras A e a.";
const letra = "a";
const resultado = verificarLetra(stringDeTeste, letra); */

// Questão 3
/* let INDICE = 12;
let SOMA = 0;
let K = 1;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);
// A soma esperada é 77 */

// Questão 4
/* Descubra a lógica e complete o próximo elemento:
a) 1, 3, 5, 7, _9_
A análise aqui foi a seguinte: O próximo número é dado pela soma do anterior + 2.
b) 2, 4, 8, 16, 32, 64, _128_
A análise aqui foi a seguinte: O próximo número é dado pela multiplicação do anterior por 2.
c) 0, 1, 4, 9, 16, 25, 36, _49_
A análise aqui foi a seguinte: O próximo número é dado pela elevação ao quadrado do próximo número da sequencia nos números inteiros, que nesse caso era 7.
d) 4, 16, 36, 64, _100_
A análise aqui foi a seguinte: O próximo número é dado pelo número que ao quadrado consigo chegar no valor atual.
e) 1, 1, 2, 3, 5, 8, _13_
A análise aqui foi a seguinte: O próximo número é dado pela soma dos dois últimos números da sequência.
f) 2,10, 12, 16, 17, 18, 19, _20_ 
A análise aqui foi a seguinte: O próximo número é par já que os 4 primeiros são pares e depois fica uma sequencia de ímpar/par.
*/

// Questão 5
/* Primeiro eu ligaria um interruptor e deixaria ligado por um tempo suficiente para que a lâmpada ficasse bem quente, por volta de uns 15min.

Depois de esperar, desligaria o primeiro interruptor e ligaria o segunto interruptor

Após isso, iria até as salas das lâmpadas.

A lâmpada que está acesa é controlada pelo segundo interruptor.

Depois, iria até uma das salas e caso a lampada estivesse fria, já saberia que seria do terceiro interruptor. Caso a lampada esteivesse quente, já saberia que era do primeiro interruptor.

Com isso concluiria a tarefa indo apenas 1 vez na sala com lapada
*/

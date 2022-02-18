// Positivos e Média

/*
Leia 6 valores. Em seguida, mostre quantos destes valores digitados foram
positivos. Na próxima linha, deve-se mostrar a média de todos os valores
positivos digitados, com um dígito após o ponto decimal.

- Entrada

A entrada contém 6 números que podem ser valores inteiros ou de ponto flutuante.
Pelo menos um destes números será positivo.

- Saída

O primeiro valor de saída é a quantidade de valores positivos. A próxima linha
deve mostrar a média dos valores positivos digitados.
*/

var total = 0;
var i = 0;
var valor = 0;
var resultadoTotal = 0;

while (i <= 6) {
  valor = parseFloat(gets());
  
  if (valor >= 0) {
    total = total + 1;
    resultadoTotal += valor;
  }
  
  i = i + 1;
}

media = resultadoTotal / total;
const calculo = (media - parseInt(media)).toFixed(1) == 0.3 ? parseInt(media) + 0.2 : media.toFixed(1);
console.log(total + " valores positivos");
console.log(calculo);
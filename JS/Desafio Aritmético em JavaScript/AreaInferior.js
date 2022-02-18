// Área Inferior

/*
Leia um caractere maiúsculo, que indica uma operação que deve ser realizada e
uma matriz M[12][12]. Em seguida, calcule e mostre a soma ou a média
considerando somente aqueles elementos que estão na área inferior da matriz,
conforme ilustrado abaixo (área verde).

vide imagem em assets: area-inferior.png

- Entrada

A primeira linha de entrada contem um único caractere Maiúsculo O ('S' ou 'M'),
indicando a operação (Soma ou Média) que deverá ser realizada com os elementos
da matriz. Seguem os 144 valores de ponto flutuante de dupla precisão (double)
que compõem a matriz.

- Saída

Imprima o resultado solicitado (a soma ou média), com 1 casa após o ponto
decimal.
*/

const operacao = gets();
const iSmax = operacao === "S";
const sx = 12, zy = 12;
let sum = 0.0, av = 0.0;
let linha = gets();

if (linha.length > 5) {
  for (var i = 0; i < zy; i++) {
    if (i != 0) {
      linha = gets();
    }

    let numeros = linha.trim().split(/[\s,]+/);

    for (var x = 0; x < sx; x++) {
      if ((i > 6) && (x < i) && (x > 11 - i)) {
        var valor = Number(numeros[x]);

        sum += valor;
        ++av;
      }
    }
  }
} else {
  var contagem = 1;

  for (var i = 0; i < zy; i++) {
    for (var x = 0; x < sx; x++) {
      var valor = 0;

      if (contagem == 1) {
        valor = Number(linha);
        primeiroloop = false;
      } else {
        linha = gets().trim();
        valor = Number(linha);
      }

      if ((i > 6) && (x < i) && (x > 11 - i)) {
        sum += valor;
        ++av;
      }
      contagem++
    }
  }
}

console.log((sum / (iSmax ? 1 : av)).toFixed("1"));
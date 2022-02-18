// Intervalo

/*
Faça um programa que leia um valor qualquer e apresente uma mensagem dizendo
em qual dos seguintes intervalos ([0,25], (25,50], (50,75], (75,100]) este
valor se encontra. Caso o valor não esteja em nenhum destes intervalos, deverá
ser impressa a mensagem: “Fora de intervalo”.

O símbolo ( representa "maior que". Por exemplo:
[0,25]  indica valores entre 0 e 25.0000, inclusive eles.
(25,50] indica valores maiores que 25 Ex: 25.00001 até o valor 50.0000000

- Entrada

O arquivo de entrada contém um número com ponto flutuante qualquer.

- Saída

A saída deve ser uma mensagem conforme exemplo abaixo.
*/

var a = parseFloat(gets());

if (a>=0 && a<=25) {
  print("Intervalo [0,25]" );
} else if (a > 25 && a <= 50) {
  print("Intervalo (25,50]");
} else if (a > 50 && a <= 75 ) {
  print("Intervalo (50,75]");
} else if (a <= 100) {
  print("Intervalo (75,100]");
} else {
  print("Fora de intervalo");
}
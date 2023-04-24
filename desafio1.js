// Bora praticar e rever tudo o que foi ensinado na aula? **💜**
// Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

// - [ ]  A soma dos dois números;
// - [ ]  A subtração dos dois números;
// - [ ]  A multiplicação dos dois números;
// - [ ]  A divisão dos dois números;
// - [ ]  O resto da divisão dos dois números;

// Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

// - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
// - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.

alert('Voce escolhera 2 numeros e realizaremos operacoes com eles')
let N1 = prompt('Primeiro numero:')
let N2 = prompt('Segundo numero:')

let n1 = Number(N1)
let n2 = Number(N2)

let some = n1 + n2
let subt = n1 - n2
let mult = n1 * n2
let div = n1 / n2
let resto = n1 % n2

let paridade
if (some % 2 == 0) {
  paridade = 'A soma dos dois numeros eh par'
} else {
  paridade = 'A soma dos dois numeros eh impar'
}
let sameNumber
if (n1 == n2) {
  sameNumber = 'Os numeros inseridos sao iguais'
} else {
  sameNumber = 'Os numeros inseridos sao diferentes'
}

alert(`A soma dos dois numeros eh: ${some}`)
alert(`A subtracao dos dois numeros eh: ${subt}`)
alert(`A multiplicacao dos dois numeros eh: ${mult}`)
alert(`A divisao dos dois numeros eh: ${div}`)
alert(`O resto da divisao do numero 1 pelo 2 eh: ${resto}`)
alert(paridade)
alert(sameNumber)



const exp = require('node:constants');
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let rank = '';
let derrotas = 0;
let vitorias = 0;
let saldo = 0
function CalcularSaldo(vitoras, derrotas){
     saldo = vitoras - derrotas
}


rl.question(`Quantidade de vitorias: `, name => {
  let vitorias = Number(name)
  console.log(`Hi ${name}!`);

rl.question(`Quantidade de derrotas: `, experience => {
  let derrotas = Number(experience);
  console.log(`Hi ${experience}!`);
  rl.close();
// var nome = "";
// var xp = 0;

CalcularSaldo(vitorias, derrotas)

if(saldo < 10 ){
  rank = 'Ferro';
}
else if(saldo >= 11 && saldo <= 20){
  rank = "Bronze"
}
else if(saldo >= 21 && saldo <= 50){
  rank = "Prata"
}
else if(saldo >= 51 && saldo <= 80){
  rank = "Ouro"
}
else if(saldo >= 81 && saldo <= 90){
  rank = "Diamante"
}
else if(saldo >= 91 && saldo <= 100){
  rank = "Lendário"
}
else if(saldo >= 101){
  rank = "Imortal"
}
console.log(`O Herói tem de saldo de `+ saldo + ` está no nível de ` + rank);
  });
});
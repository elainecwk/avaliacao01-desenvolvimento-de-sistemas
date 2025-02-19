import leia from 'readline-sync'
export default function atividade04() {  
let Numeros = leia.questionInt("Digite um Numero de 1 a 100")
const numeroComputador =  Math.trunc(Math.random() * 100);

let tentativa: number
let tentativas = 0;

console.log("Tente adivinhar o número entre 1 e 100.");
while (true) {
  
  tentativa = parseInt(prompt("Digite sua tentativa:") || "0");


  if (isNaN(tentativa) || tentativa < 1 || tentativa > 100) {
    console.log()
    }



  console.log('Atividade 04');
}}
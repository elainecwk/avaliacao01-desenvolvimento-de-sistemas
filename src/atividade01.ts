import leia from 'readline-sync'

export default function atividade01() {
  let nota = leia.questionInt("Digite uma nota ");
  if(nota < 0 || nota >100){
  console.log ("Nota Invalida")
  }else if(nota >= 90 && nota <= 100){
    console.log ("Conceito A")
  }else if (nota >= 80 && nota < 90) {
    console.log("Conceito B");
  } else if (nota >= 70 && nota < 80) {
  console.log("Conceito C");
  } else if (nota >= 60 && nota < 70) {
    console.log("Conceito D");
  } else {
    console.log("Conceito F");


  }






  console.log('Atividade 01');
}
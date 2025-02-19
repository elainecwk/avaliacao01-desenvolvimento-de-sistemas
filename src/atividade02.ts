import leia from 'readline-sync'

export default function atividade02() {
let idade = leia.questionInt("Digite sua idade")
  if(idade > 12){
    console.log("Você é uma criança");
  }else if(idade >= 12 && idade <= 17){
    console.log("Você é um adolescente");
  }else if(idade >= 18 && idade <= 59){
    console.log("Você é um adulto");
  }else{
    console.log("Você é um Idoso")
  }
 
    
  }


  console.log('Atividade 02');

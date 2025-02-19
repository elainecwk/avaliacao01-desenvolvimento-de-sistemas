import leia from 'readline-sync'
export default function atividade03() {
  let jogadas = leia.questionFloat ("Digite sua Jogada")
  
  let vetor = [];
  
  
  
  let objeto= {
     opcoes : ["Pedra", "Papel", "Tesoura"]
      
  }
  let objeto2= {
    escolhaAleatoria: (Math.floor(Math.random() * 100))
  }
  
  function determinarVencedor(jogadaUsuario: string, jogadaComputador: string): string {
    if (jogadaUsuario === jogadaComputador) {
      return "Empate!";
    }
    if (
      (jogadaUsuario === "Pedra" && jogadaComputador === "Tesoura") ||
      (jogadaUsuario === "Tesoura" && jogadaComputador === "Papel") ||
      (jogadaUsuario === "Papel" && jogadaComputador === "Pedra")
    ) {
      return "Você venceu!";
    } else {
      return "O computador venceu!";
    }
  


  

  console.log('Atividade 03');
}
}

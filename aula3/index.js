//let game = parseInt(prompt('escolha: \n 1-Pedra \n 2-Tesoura \n 3-Papel'))
//let CPU = parseInt(Math.random()*3 +1);
// case 1
 //if(CPU+=1){
 //   pontosCpu++
  //  console.log("usuário papel \n 2- vitoria para o ususario")
 //}
// case 2
//if(CPU+=2){
  //  pontosCpu++
   // console.log("usuário tesoura \n 2- vitoria para a CPU")
//}
//case 3
//if(CPU+=3){
  //  pontosCpu++
  //  console.log("usuário PAPEL \n 2- vitoria para o ususario")
//}

var escolhaJogador
var escolhaMaquina
var placar={
    jogador:0,
    maquina:0
}
//funão
let escolha =parseInt(prompt('1-Pedra, 2-papel, 3-tesoura'));

function obterEscolhaJogador(){
    if(escolhaJogador >0 && escolha < 4 ){
        escolhaJogador = escolha
    }else{
    alert('por favor escolha outro numero')
    obterEscolhaJogador()
}
//function
function somar(primeiroNumero,segundoNumero){
   return primeiroNumero + segundoNumero
}









//outro

function verificarResultado(){
  if(placar.jogador ===2){
      alert('Bora')
  }else{
      alert('Zera isso aí!!!')
  }
}
function comecarJogo(){
  obterEscolhaJogador()
  escolhaMaquina=parseInt(Math.random()*3+1)

}
//outro estudo
nomes.forEach(function(nome) {
  console.log(nome + " é instrutor da Alura");
});



nomes.forEach(function (nome){
  console.log( nome + "E instrutora da Alura");
})


//forma de aumento é o input, para que o contador seja atualizado
// conforme o usuário escreve.














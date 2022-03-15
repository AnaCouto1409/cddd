
var pacientes= document.querySelectorAll(".paciente");
var tabela = document.querySelector("#table");

tabela.addEventListener("dblclick", function(event){
	event.target.parentNode.classList.add("#fadeOut");

	setTimeout(function(){
	event.target.parentNode.remove();
}, 2000);  //adciona a classe		
	//event.target.parentNode.remove();
});
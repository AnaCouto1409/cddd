var botaoAdicionar = document.querySelector("#buscar-pacientes");


botaoAdicionar.addEventListener("click", function(){

	console.log("buscando pacientes...");

	var xhr = new XMLHTTPRequest();
	xhr.open("get", "https://api-pacientes.herokuapp.com/pacientes");


	xhr.addEventListener("load", function(){
	var resposta = xhr.responseText;
	console.log(resposta);
	console.log(typeof resposta);



	var pacientes = JSON.parse(resposta);
	console.log(resposta);
	console.log(typeof resposta);

	
});
	xhr.send();
	
});

//deus cuida de mim


//rascunho feito na aula não entra no código
pacientes.forEach (function(paciente){
	adicionaPacienteNaTabela(paciente);
});

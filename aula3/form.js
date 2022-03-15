var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');
    
    // Extraindo informações do pacient do form
    var paciente = obtemPacienteDoForm(form);
   
    
    var erros = validaPaciente(paciente);
    
    if(erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

}) 

function adicionaPacienteNaTabela (paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
}

function obtemPacienteDoForm(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd (dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}
//function forEach

function validaPaciente(paciente){
    var erros = [];

    if(!validaPeso(paciente.peso)) erros.push("O peso é inválido");
    if(!validaAltura(paciente.altura)) erros.push("A altura é inválida");
    if(paciente.nome.length == 0) erros.push("O nome do paciente não pode ser em branco");
    if(paciente.gordura.length == 0) erros.push("A gordura não pode ser em branco");

    return erros;
}
//exibe mensagem de 
function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}
//
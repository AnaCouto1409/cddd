/* 
    Prof Marcos Martins (CTD - Front end II) 
    Possível solução para a mesa de trabalho da Aula 5.
*/

//Capturando os elementos, através dos seletores do DOM
let toggleswitch = document.getElementById('toggleSwitch');
let body = document.querySelector('body');
let h1 = document.querySelector('h1');
let itemsList = document.querySelectorAll('.item');

/* Função que é chamada pelo onChanged ao clicar no ToggleSwitch */
function alteraTema() {

    // Verifica qual o valor que é retornado pelo Switch
    //console.log(switchValue.checked);

    if (toggleswitch.checked) { //Caso seja verdadeiro, ou seja, está selecionado

        /* Adicionando as classes (dark-mode) css nos elementos capturados */
        body.classList.add('body-dark');
        h1.classList.add('h1-dark');

        //1) Utilizando For..Of
        /*  for (let item of itemsList) {
             item.classList.add('items-dark')
             item.classList.add('items-text-dark')
         } */

        //2) Percorrendo com o ForEach (Recomendado)
        itemsList.forEach(item => {
            item.classList.add('items-dark');
            item.classList.add('items-text-dark');
        });

        /* 3) Alterando os elementos específicos ('h2' e 'p') ao invés de colocar a classe na div pai
         
        itemsList.forEach(item => {
             item.classList.add('items-dark');
 
             //1 maneira: Alterandos os elementos específicos pelo index/posição no DOM
             item.children[1].classList.add('items-text-dark') //[1] equivale ao 'h2'
             item.children[2].classList.add('items-text-dark') //[2] equivale ao 'p'
 
             // 2 maneira: Capturando pelo seletor (Recomendado) 
             item.querySelector('h2').classList.add('items-text-dark')
             item.querySelector('p').classList.add('items-text-dark')
         }); */


    } else { //Caso seja false, ou seja, não está selecionado


        /* Remove as classes adicionadas anteiormente, assim, a página volta para o "modo-claro" */
        body.classList.remove('body-dark');
        h1.classList.remove('h1-dark');

        //Percorre a lista de elementos, para fazer a remoção em cada um dos itens
        itemsList.forEach(item => {
            item.classList.remove('items-dark');
            //Uma forma de alterar o texto (poem o elemento principal)
            item.classList.remove('items-text-dark');
        });
    }
}
function changeTheme(){
    bodyReference.classList.toggle('dark')

    if( bodyReference.classList.contains('dark')){
        changeClassButtonReference.innerText +='mudar tema light'
    }else{
        changeClassButtonReference.innerText +='mudar tema dark'
    }
}
//vai adicionar 
bodyReference.innerHTML +='<h1>Sou um titulo</h1>'


let posts =[
    {
        titulo:'O tigre'
        texto:'O tigre (Panthera tigris) '
        imagem:'www.caixatem.org.br'
    },
    {
        titulo:'O leao'
        texto:'O leão (Panthera leo) é um mamífero carnívoro'
        imagem:'http:127.0/front-tns.tiger.jpg'
    },
    {
        titulo:'O leopardo'
        texto:'O leopardo (Panthera pardus) é um mamífero carnívoro'
        imagem:'http:127.0/front-tns.tiger.jpg'
    },
    {
        titulo:'A pantera negra'
        texto:'A pantera negra é uma variação escura (melanismo) de várias espécies'
        imagem:'http:127.0/front-tns.tiger.jpg'
    },
    {
        titulo:'O jaguar'
        texto:'O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeos'
        imagem:'http:127.0/front-tns.tiger.jpg'
    },
    {
        titulo:'O guepardo'
        texto:'O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina.'
        imagem:'http:127.0/front-tns.tiger.jpg'
    },
    
]
let mainContentReference = document.querySelector('mainContent')
for(let post of posts){
    mainContentReference.innerHTML+=`
    <div class ="item">
    <img src="${post.imagem}">
    <h2>${post.titulo}</h2>
    <p>${post.texto}</p>
    `
}
bodyReference.innerHTML+= `<h2>Olá eu sou um lindo ${informacoesUsuario.nome} voce tem ${informacoesUsuario}</h2>`












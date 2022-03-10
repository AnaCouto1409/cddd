

//titleReference.style.color='blue';

//titleReference.style.fontSize='7rem';

//console.log(titleReference)

//let titleReference = document.querySelector('.title');

//titleReference.classList.add('.title');

let mainMenuReference = document.querySelector('.main-menu-opened')

function openMenu(){
    //texto de código separado
    MenuReference.classList.add('main-menu-opened')
}
function closeMen(){
    mainMenuReference.classList.add('main-menu-opened')
}

function manipularMenu(){
    mainMenuReference.classList.toggle('main-menu')
}

let menuConten = document.querySelector("title")

menuConten.innerText = "testar modo light de tela"


let informacoesUsuario ={
    nome:'Ana Carolina',
    age:28,
}
//bodyReference.innerHTML +='<h2>olá '+informacoesUsuario.nome+'eu sou um titulo</h2>'
let titulo = prompt()
let texto = prompt()
//post.push({ titulo: tituloRespost, textoRespost})



let bodyReference = document.querySelector("body");
let themeButtonReference = document.querySelector("#themeButton");

function changeTheme() {
  bodyReference.classList.toggle("dark");

  if (bodyReference.classList.contains("dark")) {
    themeButtonReference.innerText = "Mudar tema 🌞";
  } else {
    themeButtonReference.innerText = "Mudar tema 🌚";
  }
}






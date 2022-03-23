const nomeReference = document.querySelector('#nome');
const universoReference = document.querySelector('#universo');
const descricaoReference = document.querySelector('#descricao');
const imagemReference = document.querySelector('#imagem');
const meuBotaoReference = document.querySelector('#meuBotao');


function getValues() {
  return {
    titulo: tituloReference.value,
    descricao: descricaoReference.value,
    imagem: imagemReference.value
  };
}

function createPost() {
  let post = getValues();

  let postElement = `
  <div class="card">
    <div class="cardImage">
      <img src="${post.imagem}" alt="" />
    </div>
   <div class="cardText">
    <h3>${post.titulo}</h3>
    <p>${post.descricao}</p>
    </div>
  </div>`;

  const objectPost = document.createElement("objectPost");
  objectPost.innerHTML = postElement;

  postsContainerReference.appendChild(objectPost);
}

function clearForm() {
  tituloReference.value = "";
  descricaoReference.value = "";
  imagemReference.value = "";
}

saveButtonReference.addEventListener("click", function (event) {
  event.preventDefault();
  createPost();
  clearForm();
});
// Abreviaturas
const log = console.log;
// DOM
const id = document.getElementById.bind(document)
const q = document.querySelector.bind(document)
const all = document.querySelectorAll.bind(document)
// Aplicación

class UI {
  message(message) {
    log(`Message: ${message}`);
  }
  remove(element){
    element.remove();
  }
}
const ui = new UI();

const btnData = id('btn-data');

btnData.addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      const fragment = document.createDocumentFragment();
      const contenido = id('contenido');
      for (const user of data) {
        const article = document.createElement('ARTICLE');
        article.className = 'article'
        article.innerHTML = `
        <h1 class="article__title">${user.name}</h1>
        <figure class="article__img">
          <img src="assets/img/icons/user.svg" alt="usuario">
        </figure>
        <div class="article__text"><span><i class="fas fa-user"></i></span> <p>${user.username}</p></div>
        <div class="article__text"><span><i class="fas fa-envelope"></i></span>  <p>${user.email.toLowerCase()}</p></div>
        <div class="article__text"><span><i class="fas fa-map-marked-alt"></i></span>  <p>${user.address.street},${user.address.city}</p></div>`;
        fragment.appendChild(article)
        ui.remove(btnData);
      }
      contenido.appendChild(fragment);
    })
    .catch(err => log(err));
})
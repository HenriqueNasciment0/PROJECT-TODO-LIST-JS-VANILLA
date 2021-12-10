const input = document.querySelector('#texto-tarefa');
const botao = document.querySelector('#criar-tarefa');
const listaOrdana = document.querySelector('#lista-tarefas');

/* console.log(listaOrdana); */

botao.addEventListener('click', adicionaItem);

function adicionaItem(event) {
  event.preventDefault();
  
  const divList = document.createElement('div');
  divList.classList.add('todo-div');

  const liList = document.createElement('li');
  liList.classList.add('todo-li');
  liList.innerHTML = 'vai dar certo!';

  divList.appendChild(liList);
  listaOrdana.appendChild(divList);
}

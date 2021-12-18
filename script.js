const input = document.querySelector('#texto-tarefa');
const botao = document.querySelector('#criar-tarefa');
const listaOrdana = document.querySelector('#lista-tarefas');
const itemDaLista = document.querySelectorAll('.todo-li');

botao.addEventListener('click', adicionaItem);

function adicionaItem(event) {
  const liList = document.createElement('li');
  liList.classList.add('todo-li');
  liList.innerText = input.value;
  input.value = null;
  input.focus();
  listaOrdana.appendChild(liList);
}

function marcaItem(e) {
  e.target.classList.add('marcou');
}

listaOrdana.addEventListener('click', marcaItem);
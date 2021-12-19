const input = document.querySelector('#texto-tarefa');
const botao = document.querySelector('#criar-tarefa');
const listaOrdana = document.querySelector('#lista-tarefas');
const itemDaLista = document.querySelectorAll('.todo-li');
const bntApagaTudo = document.querySelector('#apaga-tudo');

botao.addEventListener('click', adicionaItem);

function adicionaItem(event) {
  const liList = document.createElement('li');
  liList.classList.add('todo-li');
  liList.innerText = input.value;
  input.value = null;
  input.focus();
  listaOrdana.appendChild(liList);
}

function marcaItem(event) {
  event.target.classList.add('marcou');
}

listaOrdana.addEventListener('click', marcaItem);

function desmarcaItem(event) {
  listaOrdana.childNodes.forEach((itemDaLista) => { itemDaLista.classList.remove('marcou'); });
  event.target.classList.add('marcou');
}

listaOrdana.addEventListener('click', desmarcaItem);

function completaItem(event) {
  event.target.classList.toggle('completed');
}

listaOrdana.addEventListener('dblclick', completaItem);

function apagaTodasTarefas(event) {
 listaOrdana.innerText = '';
}

bntApagaTudo.addEventListener('click', apagaTodasTarefas);

const input = document.querySelector('#texto-tarefa');
const botao = document.querySelector('#criar-tarefa');
const listaOrdana = document.querySelector('#lista-tarefas');
const itemDaLista = document.querySelectorAll('.todo-li');
const bntApagaTudo = document.querySelector('#apaga-tudo');
const removeFinalizados = document.getElementById('remover-finalizados');
const salvarTarefas = document.getElementById('salvar-tarefas');
const moverPCima = document.getElementById('mover-cima');
const moverPBaixo = document.getElementById('mover-baixo');
const limparSelecionado = document.getElementById('remover-selecionado');

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
  listaOrdana.childNodes.forEach((itemDaLista) => {
    itemDaLista.classList.remove('marcou');
  });
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

function removerFinalizadosBtn() {
  const completos = document.getElementsByClassName('completed');
  for (let i = 0; i < completos.length;) {
    /* completos[i].parentNode.removeChild(completos[i]); */
    listaOrdana.removeChild(completos[i]);
  }
}

removeFinalizados.addEventListener('click', removerFinalizadosBtn);

function salvarTarefasLocal() {
  const salvarTarefasConcluidas = localStorage.getItem('tarefas');
  listaOrdana.innerHTML = salvarTarefasConcluidas;
}
salvarTarefasLocal();

function salvarTarefasBtn() {
  localStorage.tarefas = listaOrdana.innerHTML;
}

salvarTarefas.addEventListener('click', salvarTarefasBtn);

// p/ cima e p/ baixo com ajuda do código de Fernanda Guerra. //
function moverElementosCima() {
  const marcados = document.querySelector('.marcou');
  if (!marcados) return;
  if (marcados.previousElementSibling) {
    marcados.parentElement.insertBefore(
      marcados,
      marcados.previousElementSibling
);
  }
}

moverPCima.addEventListener('click', moverElementosCima);

function moverElementosBaixo() {
  const marcados = document.querySelector('.marcou');
  if (!marcados) return;
  if (marcados.nextElementSibling) {
    marcados.parentElement.insertBefore(marcados.nextElementSibling, marcados);
  }
}

moverPBaixo.addEventListener('click', moverElementosBaixo);

function limparSelecionadoBtn() {
  const marcados = document.querySelector('.marcou');
    listaOrdana.removeChild(marcados);
}

limparSelecionado.addEventListener('click', limparSelecionadoBtn);

const lista = document.querySelector('#lista-tarefas');
const adicionarBtn = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa');
const itens = Array.from(document.querySelectorAll('.todo-li'));
const apagarItensBtn = document.querySelector('#apaga-tudo');
const apagarCompletosBtn = document.querySelector('#remover-finalizados');
const salvarTarefasBtn = document.querySelector('#salvar-tarefas');
const moverCimaBtn = document.querySelector('#mover-cima');
const moverBaixoBtn = document.querySelector('#mover-baixo');
const removeSelecinadoBtn = document.querySelector('#remover-selecionado');

function adicionaNaLista() {
  const item = document.createElement('li');
  item.className = 'todo-li';
  item.innerText = input.value;
  input.value = null;
  input.focus();
  lista.appendChild(item);
}
adicionarBtn.addEventListener('click', adicionaNaLista);

function marcado(e) {
  e.target.classList.add('marcado');
}
lista.addEventListener('click', marcado);

function desmarcado(e) {
  for (let i = 0; i < lista.children.length; i += 1) {
    const lisitem = lista.children[i];
    lisitem.classList.remove('marcado');
  }
  e.target.classList.add('marcado');
}
lista.addEventListener('click', desmarcado);

function completo(e) {
  e.target.classList.toggle('completed');
}
lista.addEventListener('dblclick', completo);

function apagarItens() {
  lista.innerText = ' ';
}
apagarItensBtn.addEventListener('click', apagarItens);

function apagarCompletos() {
  const completos = document.getElementsByClassName('completed');
  for (let i = 0; i < completos.length;) {
    lista.removeChild(completos[i]);
  }
}
apagarCompletosBtn.addEventListener('click', apagarCompletos);

function salvarTarefas() {
  const chave = localStorage.getItem('list');
  lista.innerHTML = chave;
}
salvarTarefas();

function ativarSalvarTarefas() {
  localStorage.list = lista.innerHTML;
}
salvarTarefasBtn.addEventListener('click', ativarSalvarTarefas);

function moverCima() {
  const marcado = document.querySelector('.marcado');
  if (!marcado) return;
  if (marcado.previousElementSibling) {
    marcado.parentElement.insertBefore(marcado, marcado.previousElementSibling);
  }
}
moverCimaBtn.addEventListener('click', moverCima);

function moverBaixo() {
  const marcado = document.querySelector('.marcado');
  if (!marcado) return;
  if (marcado.nextElementSibling) {
    marcado.parentElement.insertBefore(marcado.nextElementSibling, marcado);
  }
}
moverBaixoBtn.addEventListener('click', moverBaixo);

function removerSelecionado() {
  const marcado1 = document.querySelector('.marcado');
    lista.removeChild(marcado1);
}
removeSelecinadoBtn.addEventListener('click', removerSelecionado);
const form = document.querySelector('#form');
const tabela = document.querySelector('#tabela-corpo');

form.addEventListener('submit', (event) => {
event.preventDefault();

const nome = form.elements.nome.value;
const telefone = form.elements.telefone.value;

const novaLinha = document.createElement('tr');
const colunaNome = document.createElement('td');
const colunaTelefone = document.createElement('td');
colunaNome.textContent = nome;
colunaTelefone.textContent = telefone;
novaLinha.appendChild(colunaNome);
novaLinha.appendChild(colunaTelefone);

tabela.appendChild(novaLinha);

form.reset();
});

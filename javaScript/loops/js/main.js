let nomes = [];
let quantNomes = 3;
let list = document.querySelector(".nomes");

// criar um loop para solicitar os nome e guardar dentro da lista
// esse loop deve ir de 0 a 2 (3 itens) e salvar os nomes
for (let i = 0; i < quantNomes; i++) {
  nomes.push(prompt("Digite um nome: "));

  let nome = document.createElement("li");
  nome.innerText = nomes[i];
  list.appendChild(nome);

  // mostrar o nome no console
  console.log(nomes[i]);
}

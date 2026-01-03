// script.js - cart and WhatsApp checkout
const produtos = [
  { nome: "Banana Prata", preco: 4.50, categoria: "Frutas" },
  { nome: "Maçã Gala", preco: 6.00, categoria: "Frutas" },
  { nome: "Alface Crespa", preco: 3.00, categoria: "Verduras" },
  { nome: "Cenoura", preco: 4.20, categoria: "Legumes" },
  { nome: "Pão Artesanal", preco: 12.00, categoria: "Artesanais" }
];

let cesta = [];

function filtrarCategoria(cat) {
  const lista = document.getElementById("listaProdutos");
  lista.innerHTML = "";

  produtos.filter(p => p.categoria === cat).forEach(p => {
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${p.nome}</strong><br>
      R$ ${p.preco.toFixed(2)}<br>
      <button onclick="adicionarCesta('${p.nome}', ${p.preco})">
        Adicionar
      </button>
    `;
    lista.appendChild(div);
  });
}

function adicionarCesta(nome, preco) {
  cesta.push({ nome, preco });
  atualizarCesta();
}

function atualizarCesta() {
  const ul = document.getElementById("itensCesta");
  ul.innerHTML = "";
  let total = 0;

  cesta.forEach(item => {
    total += item.preco;
    const li = document.createElement("li");
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    ul.appendChild(li);
  });

  document.getElementById("total").textContent = total.toFixed(2);
}

function finalizarPedido() {
  let mensagem = "Olá, Taboa Orgânicos 🌿%0A%0AGostaria de fazer o seguinte pedido:%0A";

  cesta.forEach(item => {
    mensagem += `• ${item.nome} - R$ ${item.preco.toFixed(2)}%0A`;
  });

  mensagem += `%0AEntrega na Baixada Santista.%0AObrigado!`;

  window.open(`https://wa.me/5513981509312?text=${mensagem}`, "_blank");
}
const buttons = document.querySelectorAll(".menu-btn");
const sections = document.querySelectorAll(".section");

// Trocar de aba
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    buttons.forEach((b) => b.classList.remove("active"));
    sections.forEach((sec) => sec.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById(btn.dataset.section).classList.add("active");
  });
});

// Adicionar clientes (exemplo)
const clientes = [
  { nome: "Ana Maria", dataNasc: "15/03/1990", cpf: "123.456.789-00", telefone: "(11) 98765-4321", email: "ana.maria@email.com" },
  { nome: "Bruno Silva", dataNasc: "22/07/1985", cpf: "987.654.321-00", telefone: "(21) 91234-5678", email: "bruno.silva@email.com" },
  { nome: "Carla Souza", dataNasc: "08/11/1992", cpf: "456.123.789-00", telefone: "(31) 99876-5432", email: "carla.souza@email.com" },
  { nome: "João Silva", dataNasc: "13/03/2000", cpf: "123.456.789-00", telefone: "(11) 99806-4723", email: "joao@mail.com" },
  { nome: "Mariana Costa", dataNasc: "05/05/1995", cpf: "321.654.987-00", telefone: "(21) 98765-1234", email: "mariana.costa@mail.com" },
];

const tbodyClientes = document.getElementById("clientes-tbody");
clientes.forEach((c) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${c.nome}</td>
    <td>${c.dataNasc}</td>
    <td>${c.cpf}</td>
    <td>${c.telefone}</td>
    <td>${c.email}</td>
    <td>
      <button class="btn-acao-tabela"><i class='bx bx-edit'></i></button>
      <button class="btn-acao-tabela"><i class='bx bx-trash'></i></button>
    </td>
  `;
  tbodyClientes.appendChild(tr);
});

// Painel de filtro
const btnAbrirFiltro = document.getElementById("btnAbrirFiltro");
const painelFiltro = document.getElementById("painelFiltro");
const btnFecharFiltro = document.getElementById("btnFecharFiltro");
const btnLimpar = document.getElementById("btnLimpar");

btnAbrirFiltro.addEventListener("click", () => painelFiltro.style.display = "block");
btnFecharFiltro.addEventListener("click", () => painelFiltro.style.display = "none");
btnLimpar.addEventListener("click", () => document.getElementById("formFiltro").reset());


// ESTOQUE
const btnAbrirFiltroEstoque = document.getElementById("btnAbrirFiltroEstoque");
const painelFiltroEstoque = document.getElementById("painelFiltroEstoque");
const btnFecharFiltroEstoque = document.getElementById("btnFecharFiltroEstoque");
const btnLimparEstoque = document.getElementById("btnLimparEstoque");

btnAbrirFiltroEstoque.addEventListener("click", () => {
  painelFiltroEstoque.classList.toggle("active");
});

btnFecharFiltroEstoque.addEventListener("click", () => {
  painelFiltroEstoque.classList.remove("active");
});

btnLimparEstoque.addEventListener("click", () => {
  document.getElementById("formFiltroEstoque").reset();
});

// Adicionar produtos (exemplo)
const estoque = [
  { idLivro: 1, titulo: "Livro A", quantidade: 10, fornecedor: "Fornecedor X", dataEntrada: "2025-08-01", valorCusto: 50.00 },
  { idLivro: 2, titulo: "Livro B", quantidade: 0, fornecedor: "Fornecedor Y", dataEntrada: "2025-08-05", valorCusto: 35.00 },
  { idLivro: 3, titulo: "Livro C", quantidade: 5, fornecedor: "Fornecedor Z", dataEntrada: "2025-08-10", valorCusto: 42.50 },
];

const tbodyEstoque = document.getElementById("estoque-tbody");
estoque.forEach(item => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${item.idLivro}</td>
    <td>${item.titulo}</td>
    <td>${item.quantidade}</td>
    <td>${item.fornecedor}</td>
    <td>${item.dataEntrada}</td>
    <td>R$ ${item.valorCusto.toFixed(2)}</td>
    <td>
      <button class="btn-acao-tabela"><i class='bx bx-edit'></i></button>
      <button class="btn-acao-tabela"><i class='bx bx-trash'></i></button>
    </td>
  `;
  tbodyEstoque.appendChild(tr);
});


// vendas

const btnAbrirFiltroVendas = document.getElementById("btnAbrirFiltroVendas");
const painelFiltroVendas = document.getElementById("painelFiltroVendas");
const btnFecharFiltroVendas = document.getElementById("btnFecharFiltroVendas");
const btnLimparVendas = document.getElementById("btnLimparVendas");

btnAbrirFiltroVendas.addEventListener("click", () => {
  painelFiltroVendas.classList.toggle("active");
});

btnFecharFiltroVendas.addEventListener("click", () => {
  painelFiltroVendas.classList.remove("active");
});

btnLimparVendas.addEventListener("click", () => {
  document.getElementById("formFiltroVendas").reset();
});

// Adicionar vendas (exemplo)
const vendas = [
  { idVenda: 101, cliente: "Ana Maria", data: "2025-08-01", total: 150.50, status: "Concluída" },
  { idVenda: 102, cliente: "Bruno Silva", data: "2025-08-05", total: 320.00, status: "Pendente" },
  { idVenda: 103, cliente: "Carla Souza", data: "2025-08-10", total: 75.25, status: "Cancelada" },
];

const tbodyVendas = document.getElementById("vendas-tbody");
vendas.forEach(item => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${item.idVenda}</td>
    <td>${item.cliente}</td>
    <td>${item.data}</td>
    <td>R$ ${item.total.toFixed(2)}</td>
    <td>${item.status}</td>
    <td>
      <button class="btn-acao-tabela"><i class='bx bx-edit'></i></button>
      <button class="btn-acao-tabela"><i class='bx bx-trash'></i></button>
    </td>
  `;
  tbodyVendas.appendChild(tr);
});

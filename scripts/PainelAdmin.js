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
  { nome: "João Silva", email: "joao@mail.com", cpf: "123.456.789-00", cadastro: "01/01/2025" },
  { nome: "Maria Souza", email: "maria@mail.com", cpf: "987.654.321-00", cadastro: "05/03/2025" },
];

const tbodyClientes = document.getElementById("clientes-tbody");
clientes.forEach((c) => {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${c.nome}</td>
    <td>${c.email}</td>
    <td>${c.cpf}</td>
    <td>${c.cadastro}</td>
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

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

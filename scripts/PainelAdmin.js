const buttons = document.querySelectorAll(".menu-btn");
const sections = document.querySelectorAll(".section");
const initialMessage = document.getElementById("initial");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    initialMessage.style.display = "none";
    buttons.forEach(b => b.classList.remove("active"));
    sections.forEach(sec => sec.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.section).classList.add("active");
  });
});

// Exemplo: adicionar clientes (substituir por dados reais)
const clientes = [
  { nome: "João Silva", email: "joao@mail.com", cpf: "123.456.789-00", cadastro: "01/01/2025" },
  { nome: "Maria Souza", email: "maria@mail.com", cpf: "987.654.321-00", cadastro: "05/03/2025" },
];

const tbodyClientes = document.getElementById("clientes-tbody");
clientes.forEach(c => {
  const tr = document.createElement("tr");
  tr.innerHTML = `<td>${c.nome}</td><td>${c.email}</td><td>${c.cpf}</td><td>${c.cadastro}</td><td><button class="btn-principal">Ver</button></td>`;
  tbodyClientes.appendChild(tr);
});

// Exemplo: gráfico de vendas
const ctx = document.getElementById("grafico-vendas").getContext("2d");
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Janeiro", "Fevereiro", "Março", "Abril"],
    datasets: [{
      label: 'Vendas (R$)',
      data: [5000, 7000, 4000, 9000],
      backgroundColor: '#1abc9c'
    }]
  }
});

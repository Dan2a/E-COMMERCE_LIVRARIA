const buttons = document.querySelectorAll(".menu-btn");
const sections = document.querySelectorAll(".section");
const initialMessage = document.getElementById("initial");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // esconder texto inicial
    initialMessage.style.display = "none";

    // remover ativo de todos
    buttons.forEach(b => b.classList.remove("active"));
    sections.forEach(sec => sec.classList.remove("active"));

    // ativar botão clicado e seção correspondente
    btn.classList.add("active");
    document.getElementById(btn.dataset.section).classList.add("active");
  });
});

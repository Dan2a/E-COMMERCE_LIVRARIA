document.addEventListener("DOMContentLoaded", function () {
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar-container").innerHTML = data;

      const path = window.location.pathname;

      // verifica se a página é login ou cadastro
      if (
        path.includes("cadastroCliente.html") ||
        path.includes("adminConsulta.html") ||
        path.includes("painelAdmin.html")
      ) {
        document.querySelector(".navbar-search").style.display = "none";
        const navbarSearch = document.querySelector(".navbar-search");
        if (navbarSearch) {
          navbarSearch.style.display = "none";
        }
        const navbarButtons = document.querySelector(".navbar-buttons");
        if (navbarButtons) {
          navbarButtons.style.display = "none";
        }
      }
    });
});

function openCart() {
  document.getElementById("cartSidebar").classList.add("active");
}

function closeCart() {
  document.getElementById("cartSidebar").classList.remove("active");
}

function removeItem(button) {
  const item = button.closest(".cart-item");
  item.remove();
}

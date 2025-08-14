function addAddress() {
    const container = document.getElementById('address-container');
    const template = document.getElementById('address-template');
    const clone = template.cloneNode(true);
    clone.style.display = '';
    clone.style.border = '#c9c9c9 0.1px solid';
    clone.style.padding = '10px';
    clone.removeAttribute('id');
    clone.querySelector('.remove-btn').onclick = function () {
        clone.remove();
    };
    container.appendChild(clone);
}
function addCard() {
    const container = document.getElementById('card-container');
    const template = document.getElementById('card-template');
    const clone = template.cloneNode(true);
    clone.style.display = '';
    clone.removeAttribute('id');
    clone.querySelector('.remove-btn').onclick = function () {
        clone.remove();
    };
    container.appendChild(clone);
}

document.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-btn')) {
        e.target.closest('.address-container').remove();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const salvarBtn = document.querySelector('.btn-salvar');
    const modal = document.getElementById('success-modal');
    const closeBtn = modal.querySelector('.close-btn');

    salvarBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Impede envio real do formulário (remova se quiser enviar ao backend)
        modal.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
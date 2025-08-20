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

function adicionarTelefone() {
    const container = document.getElementById('telefones-container');
    const template = document.getElementById('telefone-template');
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

document.addEventListener('DOMContentLoaded', () => {

    // Função genérica para abrir modal
    function abrirModal(modal) {
        if (modal) modal.style.display = 'block';
    }

    // Função genérica para fechar modal
    function fecharModal(modal) {
        if (modal) modal.style.display = 'none';
    }

    // ---------------- Modal de Sucesso ----------------
    const btnSalvar = document.querySelector('.btn-salvar');
    const modalSucesso = document.getElementById('success-modal');
    const closeSucesso = modalSucesso?.querySelector('.close-btn');

    btnSalvar?.addEventListener('click', (e) => {
        e.preventDefault();
        abrirModal(modalSucesso);
    });

    closeSucesso?.addEventListener('click', () => {
        fecharModal(modalSucesso);
        window.location.replace('index.html');
    });

    // Fechar clicando fora → também redireciona
    window.addEventListener('click', (event) => {
        if (event.target === modalSucesso) {
            fecharModal(modalSucesso);
            window.location.replace('index.html');
        }
    });

    // ---------------- Modal de Cancelamento ----------------
    const btnCancelar = document.querySelector('.btn-cancelar'); 
    const btnNao = document.querySelector('.btn-nao');
    const btnSim = document.querySelector('.btn-sim');
    const modalCancelamento = document.getElementById('cancel-modal');
    const closeCancelamento = modalCancelamento?.querySelector('.close-btn');

    // Abre modal de cancelamento
    btnCancelar?.addEventListener('click', (e) => {
        e.preventDefault();
        abrirModal(modalCancelamento);
    });

    // Botão NÃO → fecha modal
    btnNao?.addEventListener('click', () => fecharModal(modalCancelamento));

    // Botão SIM → fecha e redireciona
    btnSim?.addEventListener('click', () => {
        fecharModal(modalCancelamento);
        window.location.replace('index.html');
    });

    // Botão X → fecha modal
    closeCancelamento?.addEventListener('click', () => fecharModal(modalCancelamento));

    // Fechar clicando fora → apenas fecha
    window.addEventListener('click', (event) => {
        if (event.target === modalCancelamento) {
            fecharModal(modalCancelamento);
        }
    });

    // Cria telefone ao carregar a página
    adicionarTelefone();
    // Cria endereço ao carregar a página
    addAddress();
    // Cria cartão ao carregar a página
    addCard();
});

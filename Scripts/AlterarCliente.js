document.addEventListener('DOMContentLoaded', () => {

    let formToToggle = null;

    // Funções para adicionar e remover elementos
    function adicionarTelefone(enable = false) {
        const container = document.getElementById('telefones-container');
        const template = document.getElementById('telefone-template');
        const clone = template.cloneNode(true);
        
        clone.style.display = 'flex';
        clone.style.flexWrap = 'wrap';
        clone.style.gap = '10px';
        clone.removeAttribute('id');

        if (enable) {
            clone.querySelectorAll('input, select, textarea').forEach(campo => {
                campo.removeAttribute('disabled');
            });
            clone.querySelector('.remove-btn').removeAttribute('disabled');
        }

        clone.querySelector('.remove-btn').addEventListener('click', () => {
            clone.remove();
        });

        container.appendChild(clone);
    }
    
    function addAddress(enable = false) {
        const container = document.getElementById('address-container');
        const template = document.getElementById('address-template');
        const clone = template.cloneNode(true);

        clone.style.display = 'flex';
        clone.style.flexDirection = 'column';
        clone.style.border = '#c9c9c9 0.1px solid';
        clone.style.padding = '10px';
        clone.style.marginBottom = '10px';
        clone.removeAttribute('id');

        if (enable) {
            clone.querySelectorAll('input, select, textarea').forEach(campo => {
                campo.removeAttribute('disabled');
            });
            clone.querySelector('.remove-btn').removeAttribute('disabled');
        }
        
        clone.querySelector('.remove-btn').addEventListener('click', () => {
            clone.remove();
        });

        container.appendChild(clone);
    }
    
    function addCard(enable = false) {
        const container = document.getElementById('card-container');
        const template = document.getElementById('card-template');
        const clone = template.cloneNode(true);

        clone.style.display = 'block';
        clone.removeAttribute('id');

        if (enable) {
            clone.querySelectorAll('input, select, textarea').forEach(campo => {
                campo.removeAttribute('disabled');
            });
            clone.querySelector('.remove-btn').removeAttribute('disabled');
        }

        clone.querySelector('.remove-btn').addEventListener('click', () => {
            clone.remove();
        });
        
        container.appendChild(clone);
    }

    // Cria os elementos iniciais ao carregar a página
    adicionarTelefone();
    addAddress();
    addCard();

    // Funções para alternar o estado dos formulários e botões
    window.toggleCampos = function(formulario, isEditing) {
        const campos = formulario.querySelectorAll('input, select, textarea');
        const botoesExtras = formulario.querySelectorAll('button.remove-btn, #btnBuscarCep');
        const btnAlterar = formulario.querySelector('.btn-alterar');
        const btnCancelar = formulario.querySelector('.btn-cancelar, .btn-cancelar-senha');
        const btnSalvar = formulario.querySelector('.btn-salvar, .btn-salvar-senha');
        
        if (!btnAlterar || !btnCancelar || !btnSalvar) return;

        if (isEditing) {
            campos.forEach(campo => {
                campo.removeAttribute('disabled');
            });
            botoesExtras.forEach(btn => {
                btn.removeAttribute('disabled');
            });
            btnAlterar.style.visibility = 'hidden';
            btnCancelar.style.visibility = 'visible';
            btnSalvar.style.visibility = 'visible';
        } else {
            campos.forEach(campo => {
                campo.setAttribute('disabled', 'disabled');
            });
            botoesExtras.forEach(btn => {
                btn.setAttribute('disabled', 'disabled');
            });
            btnAlterar.style.visibility = 'visible';
            btnCancelar.style.visibility = 'hidden';
            btnSalvar.style.visibility = 'hidden';
        }
    };
    
    // Define o estado inicial de todos os formulários como desabilitado
    document.querySelectorAll('form').forEach(form => {
        toggleCampos(form, false);
    });

    window.toggleSenha = function() {
        const formSenha = document.getElementById('formulario-senha');
        formSenha.style.visibility = formSenha.style.visibility === 'hidden' ? 'visible' : 'hidden';
    };
    
    // Lógica para abrir/fechar modais
    const modalSucesso = document.getElementById('success-modal');
    const modalCancelamento = document.getElementById('cancel-modal');

    function abrirModal(modal) {
        if (modal) modal.style.display = 'block';
    }

    function fecharModal(modal) {
        if (modal) modal.style.display = 'none';
    }

    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            fecharModal(e.target.closest('.modal'));
        });
    });

    modalSucesso?.querySelector('.close-btn').addEventListener('click', () => {
        fecharModal(modalSucesso);
        if (formToToggle) {
            toggleCampos(formToToggle, false);
            // Verifica se é o formulário de senha para também esconder
            if (formToToggle.id === 'formulario-senha') {
                formToToggle.style.visibility = 'hidden';
            }
            formToToggle = null; // Limpa a referência após usar
        }
    });

    modalCancelamento?.querySelector('.btn-nao').addEventListener('click', () => {
        fecharModal(modalCancelamento);
    });

    modalCancelamento?.querySelector('.btn-sim').addEventListener('click', () => {
        fecharModal(modalCancelamento);
        if (formToToggle) {
            toggleCampos(formToToggle, false);
            // Verifica se é o formulário de senha para também esconder
            if (formToToggle.id === 'formulario-senha') {
                formToToggle.style.visibility = 'hidden';
            }
            formToToggle = null; // Limpa a referência após usar
        }
    });

    // Submissão dos formulários
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            formToToggle = form; // Salva a referência do formulário na submissão
            abrirModal(modalSucesso);
            toggleCampos(form, false);
        });
    });

    // Adiciona os eventos de clique para os botões "Adicionar"
    document.querySelector('.formulario-dados-pessoais .btn-principal').addEventListener('click', () => adicionarTelefone(true));
    document.querySelector('.formulario-enderecos .btn-principal').addEventListener('click', () => addAddress(true));
    document.querySelector('.formulario-cartoes .btn-principal').addEventListener('click', () => addCard(true));

    // Adiciona os eventos de clique para os botões "Alterar Informações"
    document.querySelectorAll('.btn-alterar').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const form = e.target.closest('form');
            if (form) {
                toggleCampos(form, true);
            }
        });
    });

    // Adiciona os eventos de clique para os botões "Cancelar" e "Cancelar Senha"
    document.querySelectorAll('.btn-cancelar, .btn-cancelar-senha').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            formToToggle = e.target.closest('form');
            abrirModal(modalCancelamento);
        });
    });
});
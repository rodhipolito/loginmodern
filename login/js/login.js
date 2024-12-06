'use strict';

const loginContainer = document.getElementById('login-container');

// Função para mover o overlay
const moveOverlay = () => loginContainer.classList.toggle('move');

// Eventos para alternar entre os modos "login" e "registrar"
document.getElementById('open-register').addEventListener('click', moveOverlay);
document.getElementById('open-login').addEventListener('click', moveOverlay);

document.getElementById('open-register-mobile').addEventListener('click', moveOverlay);
document.getElementById('open-login-mobile').addEventListener('click', moveOverlay);

// Função para validar o login
function validateLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email === 'admin' && password === 'admin') {
        alert('Login bem-sucedido!');
        // Exemplo de redirecionamento: window.location.href = 'dashboard.html';
    } else {
        alert('Usuário ou senha inválidos!');
    }
}

// Conecta o botão "Logar" à função de validação
document.querySelector('.form-button').addEventListener('click', validateLogin);

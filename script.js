// Pega os elementos
let magic = document.querySelector('.login-magic');
let senha = document.querySelector('.login-password');
let btnSenha = document.querySelector('.login-magic .btn-secondary');
let btnMagic = document.querySelector('.login-password .btn-secondary');
let mostrar = document.querySelector('.mostrar-senha');
let input = document.querySelector('#senha');

// Troca para tela de senha
btnSenha.onclick = function() {
    magic.style.display = 'none';
    senha.style.display = 'block';
};

// Troca para tela de link magico
btnMagic.onclick = function() {
    senha.style.display = 'none';
    magic.style.display = 'block';
};

// Mostra/esconde a senha
mostrar.onclick = function() {
    if (input.type == 'password') {
        input.type = 'text';
        mostrar.textContent = 'Esconder senha';
    } else {
        input.type = 'password';
        mostrar.textContent = 'Mostrar senha';
    }
}
// public/js/cadastroPerfil.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('/perfil/api/perfis')
        .then(response => response.json())
        .then(perfis => {
            const listaPerfis = document.getElementById('lista-perfis');
            perfis.forEach(perfil => {
                const li = document.createElement('li');
                li.textContent = perfil.nome;
                listaPerfis.appendChild(li);
            });
        });
});

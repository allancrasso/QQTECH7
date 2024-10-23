// public/js/cadastroUsuario.js
document.addEventListener('DOMContentLoaded', () => {
    // Função para carregar usuários via API
    function carregarUsuarios() {
        fetch('/usuario/api/usuarios')
            .then(response => response.json())
            .then(usuarios => {
                const listaUsuarios = document.getElementById('lista-usuarios');
                listaUsuarios.innerHTML = ''; // Limpa a lista antes de carregar

                // Popula a lista com os usuários retornados da API
                usuarios.forEach(usuario => {
                    const li = document.createElement('li');
                    li.textContent = `${usuario.nome} - ${usuario.email}`;
                    listaUsuarios.appendChild(li);
                });
            })
            .catch(error => {
                console.error('Erro ao carregar usuários:', error);
            });
    }

    // Carrega os usuários ao abrir a página
    carregarUsuarios();
});

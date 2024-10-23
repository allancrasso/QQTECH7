// public/js/associarPerfil.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('/perfil/api/associacoes')
        .then(response => response.json())
        .then(associacoes => {
            const listaAssociacoes = document.getElementById('lista-associacoes');
            associacoes.forEach(associacao => {
                const li = document.createElement('li');
                li.textContent = `Usuário ${associacao.usuarioId} - Perfil ${associacao.perfilId}`;
                listaAssociacoes.appendChild(li);
            });
        });
});

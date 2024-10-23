// public/js/loja.js
document.addEventListener('DOMContentLoaded', () => {
    fetch('/loja/api/lojas')  // API para buscar lojas
        .then(response => response.json())
        .then(lojas => {
            const listaLojas = document.getElementById('lista-lojas');
            lojas.forEach(loja => {
                const li = document.createElement('li');
                li.textContent = loja.nome;
                listaLojas.appendChild(li);
            });
        })
        .catch(error => console.error('Erro ao carregar lojas:', error));
});

let associacoes = [];

module.exports = {
    getAssociacoes: () => associacoes,

    associarUsuarioPerfil: (usuarioId, perfilId) => {
        const novaAssociacao = { id: associacoes.length + 1, usuarioId, perfilId };
        associacoes.push(novaAssociacao);
    },

    getAssociacaoById: (id) => {
        return associacoes.find(associacao => associacao.id === id);
    },

    atualizarAssociacao: (id, usuarioId, perfilId) => {
        const associacao = associacoes.find(associacao => associacao.id === id);
        if (associacao) {
            associacao.usuarioId = usuarioId;
            associacao.perfilId = perfilId;
        }
    }
};

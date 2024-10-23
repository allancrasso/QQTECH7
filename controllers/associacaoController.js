const path = require('path');
const usuarioModel = require('../models/usuarioModel');
const perfilModel = require('../models/perfilModel');
const associacaoModel = require('../models/associacaoModel');

// Exibe o formulário de associação de usuário e perfil
exports.exibeFormularioAssociacao = (req, res) => {
    const usuarios = usuarioModel.getUsuarios();
    const perfis = perfilModel.getPerfis();
    res.sendFile(path.join(__dirname, '../views/associarUsuarioPerfil.html'));
};

// Processa a associação entre usuário e perfil
exports.associarUsuarioPerfil = (req, res) => {
    const { usuarioId, perfilId } = req.body;
    if (usuarioId && perfilId) {
        associacaoModel.associarUsuarioPerfil(parseInt(usuarioId), parseInt(perfilId));
    }
    res.redirect('/associacao');
};

// Exibe o formulário de edição da associação
exports.editarAssociacao = (req, res) => {
    const associacaoId = parseInt(req.params.id);
    const associacao = associacaoModel.getAssociacaoById(associacaoId);
    
    if (!associacao) {
        return res.status(404).send('Associação não encontrada');
    }

    const usuarios = usuarioModel.getUsuarios();
    const perfis = perfilModel.getPerfis();
    
    res.render(path.join(__dirname, '../views/editarAssociacao.html'), { usuarios, perfis, associacao });
};

// Processa a atualização da associação
exports.atualizarAssociacao = (req, res) => {
    const associacaoId = parseInt(req.params.id);
    const { usuarioId, perfilId } = req.body;

    if (usuarioId && perfilId) {
        associacaoModel.atualizarAssociacao(associacaoId, parseInt(usuarioId), parseInt(perfilId));
    }
    res.redirect('/associacao');
};

// Lista as associações via API
exports.listarAssociacoes = (req, res) => {
    const associacoes = associacaoModel.getAssociacoes();
    const usuarios = usuarioModel.getUsuarios();
    const perfis = perfilModel.getPerfis();

    const resultado = associacoes.map(associacao => {
        const usuario = usuarios.find(u => u.id === associacao.usuarioId);
        const perfil = perfis.find(p => p.id === associacao.perfilId);

        return {
            id: associacao.id,
            usuario: usuario ? usuario.nome : 'Usuário não encontrado',
            perfil: perfil ? perfil.nome : 'Perfil não encontrado'
        };
    });

    res.json(resultado);
};

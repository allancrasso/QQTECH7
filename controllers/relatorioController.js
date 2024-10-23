const usuarioModel = require('../models/usuarioModel');
const perfilModel = require('../models/perfilModel');
const talaoModel = require('../models/talaoModel');

// Relatório de usuários cadastrados
exports.relatorioUsuarios = (req, res) => {
    const usuarios = usuarioModel.getUsuarios();
    res.render('relatorioUsuarios', { usuarios });
};

// Relatório de perfis de usuários
exports.relatorioPerfis = (req, res) => {
    const perfis = perfilModel.getPerfis();
    res.render('relatorioPerfis', { perfis });
};

// Relatório de manutenção de talões
exports.relatorioTaloes = (req, res) => {
    const taloes = talaoModel.getEnvios();
    res.render('relatorioTaloes', { taloes });
};

// Relatório de gestão de recebimento de talões
exports.relatorioRecebimentos = (req, res) => {
    const recebimentos = talaoModel.getRecebimentos();
    res.render('relatorioRecebimentos', { recebimentos });
};

// Relatório de gestão de estoque
exports.relatorioEstoque = (req, res) => {
    const estoque = talaoModel.getEstoqueLojas();
    res.render('relatorioEstoque', { estoque });
};

const usuarioModel = require('../models/usuarioModel');
const perfilModel = require('../models/perfilModel');
const associacaoModel = require('../models/associacaoModel');

// Exibe o dashboard com informações de usuários, perfis e associações
exports.exibeDashboard = (req, res) => {
    const totalUsuarios = usuarioModel.getUsuarios().length;
    const totalPerfis = perfilModel.getPerfis().length;
    const totalAssociacoes = associacaoModel.getAssociacoes().length;

    res.render('dashboard', {
        totalUsuarios,
        totalPerfis,
        totalAssociacoes
    });
};

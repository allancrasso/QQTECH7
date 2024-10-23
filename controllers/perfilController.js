const path = require('path');
const perfilModel = require('../models/perfilModel');

// Exibe o formulário de cadastro de perfil
exports.exibeFormularioCadastroPerfil = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/cadastroPerfil.html'));
};

// Processa o cadastro de um novo perfil
exports.adicionaPerfil = (req, res) => {
    const { nome } = req.body;
    if (nome) {
        perfilModel.addPerfil(nome);
    }
    res.redirect('/perfil/cadastro');
};

// Lista os perfis via API
exports.listarPerfis = (req, res) => {
    const perfis = perfilModel.getPerfis();
    res.json(perfis);
};

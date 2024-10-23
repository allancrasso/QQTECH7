const path = require('path');
const lojaModel = require('../models/lojaModel');

// Exibe o formulário de cadastro de loja
exports.exibeFormularioCadastroLoja = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/cadastroLoja.html'));
};

// Processa o cadastro de uma nova loja
exports.adicionaLoja = (req, res) => {
    const { nome } = req.body;
    if (nome) {
        lojaModel.addLoja(nome);
    }
    res.redirect('/loja/cadastro');
};

// Lista as lojas via API
exports.listarLojas = (req, res) => {
    const lojas = lojaModel.getLojas();
    res.json(lojas);
};

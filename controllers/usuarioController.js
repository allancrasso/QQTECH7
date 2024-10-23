const path = require('path');
const usuarioModel = require('../models/usuarioModel');

// Exibe o formulário de cadastro de usuário
exports.exibeFormularioCadastro = (req, res) => {
    res.sendFile(path.join(__dirname, '../views/cadastroUsuario.html'));
};

// Processa o cadastro de um novo usuário
exports.adicionaUsuario = (req, res) => {
    const { nome, email } = req.body;
    if (nome && email) {
        usuarioModel.addUsuario(nome, email);
    }
    res.redirect('/usuario/cadastro');
};

// Lista os usuários via API
exports.listarUsuarios = (req, res) => {
    const usuarios = usuarioModel.getUsuarios();
    res.json(usuarios);
};

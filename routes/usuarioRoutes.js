const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Exibe o formulário de cadastro de usuário
router.get('/cadastro', usuarioController.exibeFormularioCadastro);

// Processa o cadastro de usuário
router.post('/add', usuarioController.adicionaUsuario);

// Lista os usuários via API
router.get('/api/usuarios', usuarioController.listarUsuarios);

module.exports = router;

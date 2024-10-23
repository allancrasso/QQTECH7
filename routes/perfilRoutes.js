const express = require('express');
const router = express.Router();
const perfilController = require('../controllers/perfilController');

// Exibe o formulário de cadastro de perfil
router.get('/cadastro', perfilController.exibeFormularioCadastroPerfil);

// Processa o cadastro de perfil
router.post('/add', perfilController.adicionaPerfil);

// Lista os perfis via API
router.get('/api/perfis', perfilController.listarPerfis);

module.exports = router;

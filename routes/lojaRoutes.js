const express = require('express');
const router = express.Router();
const lojaController = require('../controllers/lojaController');

// Exibe o formulário de cadastro de loja
router.get('/cadastro', lojaController.exibeFormularioCadastroLoja);

// Processa o cadastro de loja
router.post('/add', lojaController.adicionaLoja);

// Lista as lojas via API
router.get('/api/lojas', lojaController.listarLojas);

module.exports = router;

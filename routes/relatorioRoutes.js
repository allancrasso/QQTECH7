const express = require('express');
const router = express.Router();
const relatorioController = require('../controllers/relatorioController');

// Rotas para diferentes relatórios
router.get('/usuarios', relatorioController.relatorioUsuarios);
router.get('/perfis', relatorioController.relatorioPerfis);
router.get('/taloes', relatorioController.relatorioTaloes);
router.get('/recebimentos', relatorioController.relatorioRecebimentos);
router.get('/estoque', relatorioController.relatorioEstoque);

module.exports = router;

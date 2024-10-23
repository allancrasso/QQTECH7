const express = require('express');
const router = express.Router();
const talaoController = require('../controllers/talaoController');  // Certifique-se de que está no caminho correto

// Exibe o formulário de envio de talões
router.get('/', talaoController.exibeFormularioEnvio);

// Processa o envio de talões (Verifique se 'enviarTalao' está definido no controlador)
router.post('/add', talaoController.enviarTalao);

// Lista os envios de talões via API
router.get('/api/envios', talaoController.listarEnvios);

module.exports = router;

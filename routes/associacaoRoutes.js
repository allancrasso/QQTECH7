const express = require('express');
const router = express.Router();
const associacaoController = require('../controllers/associacaoController'); // Certifique-se de que o caminho está correto

// Exibe o formulário de associação de usuário e perfil
router.get('/', associacaoController.exibeFormularioAssociacao);

// Processa a associação entre usuário e perfil
router.post('/add', associacaoController.associarUsuarioPerfil);

// Exibe o formulário de edição da associação
router.get('/editar/:id', associacaoController.editarAssociacao);

// Processa a atualização da associação
router.post('/editar/:id', associacaoController.atualizarAssociacao);

// Lista as associações via API
router.get('/api/associacoes', associacaoController.listarAssociacoes);

module.exports = router;
